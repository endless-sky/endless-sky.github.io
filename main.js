/* Functions for the screenshot gallery "lightbox." */
var lightboxElement;
function openLightbox(img) {
	// Make sure the given element is a gallery image.
	if(!isImage(img))
		return;
	
	// Display the image in the lightbox.
	lightboxElement = img;
	document.getElementById("lightbox-image").src = img.src;
	document.getElementById("lightbox-title").innerHTML = img.title;
	document.getElementById("lightbox-caption").innerHTML = img.alt;
	document.getElementById("lightbox-back").style.display = "block";
	
	// Check whether the previous and next buttons should be shown.
	document.getElementById("lightbox-previous").style.display =
		isImage(img.previousElementSibling) ? "block" : "none";
	document.getElementById("lightbox-next").style.display =
		isImage(img.nextElementSibling) ? "block" : "none";
}
function closeLightbox() {
	document.getElementById("lightbox-back").style.display = "none";
}
function previousLightbox(event) {
	event.stopPropagation();
	openLightbox(lightboxElement.previousElementSibling);
}
function nextLightbox(event) {
	event.stopPropagation();
	openLightbox(lightboxElement.nextElementSibling);
}
function isImage(element) {
	return (element != null && element.matches("img"));
}
