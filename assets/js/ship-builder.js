'use strict';

document.onreadystatechange = () => {
	if (document.readyState === 'complete') initialize();
};

// Globals.
let image = null;
// Keep track of whether the mouse button is down.
let isDragging = false;
// Coordinates of the most recent mouse click or drag in the canvas.
let xCoordinate = Number.NaN;
let yCoordinate = Number.NaN;
// Normal images should be shown at twice their resolution, but an image with
// "@2x" at the end of its file name will be drawn at 1x resolution.
let scale = 2;
// The color swizzle to use:
let swizzle = 0;
// Whether or not the collision mask outline(s) should be shown:
let showOutline = false;


// Add the various event listeners.
function initialize() {
	// Make sure the file reading API is available.
	if (typeof window.FileReader !== 'function') {
		window.alert('This utility requires a browser that supports the "FileReader" API');
		return;
	}

	const canvas = document.getElementById("canvas");
	canvas.addEventListener("mousedown", onMouseDown);
	canvas.addEventListener("mousemove", onMouseMove);
	document.body.addEventListener("mouseup", onMouseUp);

	// File selection callback.
	document.getElementById('sprite-selector').addEventListener('change', loadImage, { capture: false, passive: true });
	// Swizzle selection change.
	document.getElementById('swizzle-select').addEventListener('change', setSwizzle, { capture: false, passive: true });
	// Collision-mask toggle.
	document.getElementById('show-outline').addEventListener('change', setShowOutline, { capture: false, passive: true });
	// Hardpoint buttons click handlers.
	for (const el of document.querySelectorAll('.hardpoint-type button')) {
		el.addEventListener('click', addPoint, { capture: false, passive: true });
	};
}


// Handle a mouse click within the canvas.
function onMouseDown(event) {
	isDragging = true;

	drawCoordinates(event.offsetX, event.offsetY);
}

// Handle mouse motion within the canvas. The button may or may not be down.
function onMouseMove(event) {
	if (!isDragging)
		return;

	drawCoordinates(event.offsetX, event.offsetY);
}

// Keep track of when the mouse button is released.
function onMouseUp(event) {
	isDragging = false;
}

// Draw a circle at the given coordinates, and update the stored coordinates.
function drawCoordinates(x, y) {
	// The center of the image is (0, 0). Each pixel counts as half of a source
	// pixel, since this is either a scaled-up image or an @2x file.
	const canvas = document.getElementById('canvas');
	xCoordinate = .5 * (x - .5 * canvas.width);
	yCoordinate = .5 * (y - .5 * canvas.height);

	drawImage();
}


// Draw the image. Since <canvas> does not support "layers," we must always redraw everything
// that the user wants to see. (An alternative would be to manually composite layers, e.g. use
// multiple <canvas> elements and use one to draw the swizzled image, one to draw the current
// point, one to draw the outline, etc.)
function drawImage() {
	/** @type {HTMLCanvasElement} */
	const canvas = document.getElementById("canvas");
	const context = canvas.getContext("2d", { alpha: true, desynchronized: true });
	context.clearRect(0, 0, canvas.width, canvas.height);
	if (image)
		context.drawImage(image, 0, 0, canvas.width, canvas.height);

	// Swizzle the image.
	const CHANNEL = {
		RED: 0,
		GREEN: 1,
		BLUE: 2,
		ALPHA: 3,
	};
	const SWIZZLE = [
		{ red: CHANNEL.RED, green: CHANNEL.GREEN, blue: CHANNEL.BLUE },
		{ red: CHANNEL.RED, green: CHANNEL.BLUE, blue: CHANNEL.GREEN },
		{ red: CHANNEL.GREEN, green: CHANNEL.RED, blue: CHANNEL.BLUE },
		{ red: CHANNEL.BLUE, green: CHANNEL.RED, blue: CHANNEL.GREEN },
		{ red: CHANNEL.GREEN, green: CHANNEL.BLUE, blue: CHANNEL.RED },
		{ red: CHANNEL.BLUE, green: CHANNEL.GREEN, blue: CHANNEL.RED },
		{ red: CHANNEL.GREEN, green: CHANNEL.BLUE, blue: CHANNEL.BLUE },
	][swizzle];
	const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
	const pixels = imageData.data;
	for (let i = 0; i < pixels.length; i += 4) {
		// Get each new channel value from the relevant channel.
		const red = pixels[i + SWIZZLE.red];
		const green = pixels[i + SWIZZLE.green];
		const blue = pixels[i + SWIZZLE.blue];
		pixels[i + 0] = red;
		pixels[i + 1] = green;
		pixels[i + 2] = blue;
		// No alpha adjustment.
	}

	if (showOutline) {
		setCollisionMaskData(pixels, canvas.width);
	}

	// Repaint the canvas with the new pixel data.
	context.putImageData(imageData, 0, 0);

	// Draw the current selection, if one exists.
	drawCoordinateCircle(context, canvas);
}


/**
 * Mutate the given pixel data, changing pixels that denote the initial collision mask to pure red.
 * TODO: Render outline into a separate <canvas> so it needs only be computed once.
 * TODO: Show result of mask refinement, so that this tool and the game show the same mask.
 * @param {Uint8ClampedArray} pixels Raw RGBA pixel data from the image.
 * @param {number} canvasWidth Width of the canvas, needed to generate the direction kernel.
 */
function setCollisionMaskData(pixels, canvasWidth) {
	const rowOffset = 4 * canvasWidth;
	const DIR = [
		pixels.length - rowOffset,
		pixels.length - rowOffset + 4,
		4,
		rowOffset + 4,
		rowOffset,
		rowOffset - 4,
		pixels.length - 4,
		pixels.length - rowOffset - 4
	];

	const hasOutline = [];
	let start = 0;
	while (start < pixels.length) {
		// Find a non-empty pixel that has no outline.
		for ( ; start < pixels.length; start += 4) {
			if (pixels[start + 3]) {
				// The pixel is occupied and not an outline, start tracing.
				if (!hasOutline[start])
					break;
				// Skip to the next unoccupied pixel.
				for (start += 4; start < pixels.length; start += 4)
					if (!pixels[start + 3])
						break;
			}
		}
		if (start >= pixels.length)
			break;

		let pos = start;
		let d = 7;
		const directions = [];
		do {
			hasOutline[pos] = true;
			// Find the next occupied pixel.
			let firstD = d;
			let isAlone = false;
			while (true) {
				if (pixels[(pos + 3 + DIR[d]) % pixels.length])
					break;
				d = (d + 1) % 8;
				if (d == firstD) {
					isAlone = true;
					break;
				}
			}
			if (isAlone)
				break;
			directions.push(d);
			// Continue tracing the outline at that pixel.
			pos = (pos + DIR[d]) % pixels.length;
			d = (d + 6) % 8;
			// Loop until we are back where we started.
		} while (pos != start);

		// At least 4 points are needed to circle a transparent pixel.
		if (directions.length < 4)
			continue;

		// Fill raw outline (no interpolation and no simplification).
		pos = start;
		let i = 0;
		do {
			// Draw this outline pixel.
			pixels[pos + 0] = 255;
			pixels[pos + 1] = 0;
			pixels[pos + 2] = 0;
			pixels[pos + 3] = 255;
			pos = (pos + DIR[directions[i]]) % pixels.length;
			++i;
		} while (pos != start);
	}
}


/**
 * @param {CanvasRenderingContext2D} context The 2D drawing context of the <canvas>
 * @param {{width: number, height: number}} o The image's displayed width & height.
 */
function drawCoordinateCircle(context, { width, height }) {
	if (Number.isNaN(xCoordinate) || Number.isNaN(yCoordinate))
		return;
	const x = xCoordinate * 2 + .5 * width;
	const y = yCoordinate * 2 + .5 * height;

	context.beginPath();
	context.arc(x, y, 5, 0, 2 * Math.PI, false);
	context.lineWidth = 1;
	context.strokeStyle = "#FF0000";
	context.stroke();
}


// Add a named point to the list of points.
function addPoint(clickEvent)
{
	if (Number.isNaN(xCoordinate) || Number.isNaN(yCoordinate)) {
		window.alert('Select a valid point on the image.');
		return;
	}

	document.getElementById("points").textContent += `\t${clickEvent.target.name} ${xCoordinate} ${yCoordinate}\n`;
}


// Load a reasonably-sized image file. Theoretically we can work on any file size,
// but anything that is over a certain size is going to 1) not be sized appropriately,
// and 2) bloat the Endless Sky memory requirements for no good reason.
function loadImage(changeEvent) {
	const file = changeEvent.target.files?.[0];
	if (!file) return;
	if (file.size > 3 * 1024 * 1024) {
		window.alert(`"${file.name}" is too large -- create a smaller asset!`);
		input.value = '';
		return;
	}

	// Begin loading the file.
	const reader = new FileReader();
	reader.onload = createImage;
	reader.readAsDataURL(file);

	// The scale depends on whether this is an @2x image.
	if (file.name.lastIndexOf("@2x") == file.name.lastIndexOf(".") - 3)
		scale = 1;
	else
		scale = 2;
}

// An image file has been loaded. Convert it to an image.
function createImage(fileLoadEvent) {
	image = new Image();
	image.onload = imageLoaded;
	image.src = fileLoadEvent.target.result;
}

// An image has been created. Draw it.
function imageLoaded() {
	if (Math.max(image.width, image.height) > 30000 || (image.width * image.height > 268000000)) {
		// TODO: Dynamic scaling would resolve this, but would also mean we need to handle
		// conversion from the data URL to pixel array ourselves.
		window.alert('Image dimensions too large for <canvas> utility');
		document.getElementById('sprite-selector').value = '';
		return;
	}
	const canvas = document.getElementById("canvas");
	canvas.width = scale * image.width;
	canvas.height = scale * image.height;

	xCoordinate = Number.NaN;
	yCoordinate = Number.NaN;
	drawImage();

	canvas.classList.add('has-image');
	document.getElementById("points").textContent = "";
	for (const el of document.querySelectorAll('.hardpoint-type button')) {
		el.removeAttribute('disabled');
	}
}


function setSwizzle(changeEvent) {
	swizzle = Number(changeEvent.target.value);
	document.getElementById('swizzle-value').value = swizzle;

	drawImage();
}

function setShowOutline(changeEvent) {
	showOutline = changeEvent.target.checked;

	drawImage();
}
