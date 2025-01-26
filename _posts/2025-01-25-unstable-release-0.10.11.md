---
layout: post
title: Unstable release 0.10.11
author: Saugia
---

It's a new year, which means new Endless Sky content! v0.10.11 is now live on Github, Steam, and GoG! This is an unstable release, and is one of the larger ones we've had in a while, bringing a ton of new content, adjustments to existing content, balance changes, bug fixes, and more. If you would like to see the full list of changes, head on over to our changelog.

Here are the major highlights for this release:

We often have players making note that various sound effects can be at odds compared to others in terms of volume levels, with two notably loud outliers being hyperdrives and explosions. Though one consideration is going across all files and adjusting the volumes, we have a more in-depth approach thanks to tibetiroka. If you open your preferences page, you will find that there is a new "Audio" tab, which leads to a new interface that displays volume sliders for the various sounds of the game.

<img class="centered shadowed" src="/images/blog/v0.10.11/volume.jfif" width="400" height="300" />

This isn't all tibetiroka has for us regarding audio. Sounds are now paused on pop-ups of UI panels, such as dialog, missions, opening the map, and so on, instead of continuing to play in the background. You'll also find that if you fast-forward, most sounds will also now fast-forward, with the exceptions being longer/looping sounds such as engines or beam weapons. These changes help the game's audio feel a bit less chaotic overall.
 
Continuing on with UI changes, we have a bright new addition to the map interface. Thanks to Azure, you will find a new "Stars" tab in the map panel. Upon clicking this, in the place of system rings, small graphics of each system's stars will appear! For systems you haven't yet discovered, there will be a default star icon. A neat new way to look at the map, that we may revisit again in the future. 

<img class="centered shadowed" src="/images/blog/v0.10.11/stars.png" width="500" height="300" />

Moving over to some balance changes, we decided to take another look at turret mounts. Before this update, turret traverse rates were a bit inconsistent across the board. In this update, Hecter and Quantumshark have adjusted traverse rates to be more consistent based mainly on their size and range. We'll be keeping an eye on these changes and see how they affect gameplay, and if any future ones might be a good idea.

When missiles lose their locks on their targets, they have the possibility to "haywire" and veer off. Anarchist2, however, found that haywire behavior was actually not functioning properly - factors that made a missile more likely to go haywire were instead doing the opposite and essentially decreasing it. Thanks to them, missiles now properly go haywire, and in tangent, jammers now function a bit better than before.

Speaking of guided munitions, another notable change comes in the form of a nerf to Pug Seekers, with their missile strength being cut down from 40 to 10, making anti-missiles much more useful in the Pug fights. Although Seekers are meant to overwhelm human anti-missiles, they shouldn't outright nullify their use, either from human fleets, or if the player decides to invest into them.
The biggest balance change coming in this update is one that has been talked about for quite some time. The Navy's Carrier we all know too well is a powerhouse - particle cannons, missile launchers, turrets, and its several carried ships. However, this makes it feel more like a Cruiser, just with more health, space, and carried ships. To help differentiate it more from being a "Cruiser 2.0", four of its gun mounts and one turret mount have been removed. In place of them, it now has eight fighter bays instead of four, and along the original 6 drone bays, it now sits at a total of 14 carried ships. Weapons-wise, it now relies on longer-range missile and torpedo launchers instead of Particle Cannons, but retains a Heavy Laser turret and Heavy AM's for defense. Some internal changes have been made to help support the fighters (an extra shield generator, missile ammunition), and weapon space has been adjusted accordingly.

<img class="centered shadowed" src="/images/blog/v0.10.11/carrier.png" width="490" height="350" />

These changes help shift the Carrier away from the big, heavy brawler role it currently plays alongside the Cruiser, and into a supportive ranged approach, relying on its fighters and drones to do a majority of its damage. This also helps with fighting against them - in things like the Free Worlds battles, the Carrier itself is now less of a direct combatant. Any Carriers prior to this update will still retain the original build. More importantly, we've elected to leave the Giftbringer alone as increasing its fighter count would spike the difficulty of that fight by a lot with its Sestor drones. It has been dubbed a "Modified Carrier", using the original hardpoint setup, and got a slightly adjusted sprite for it thanks to Gefullte Taubenbrust.

But wait, there's more! While looking at human carriers, we gave the Aerie the love it finally deserved, and it now has four fighter bays instead of two. It is an overall buff, and it helps make the Aerie be more competitive against other ships of its class. Thanks to Quantumshark again for helping me extensively test and balance all of these carrier changes. 

<img class="centered shadowed" src="/images/blog/v0.10.11/aerie.png" width="320" height="250" />

If you think those were all big changes, I haven't even gotten to the biggest addition to this update. You might remember our newer friends in the south, the Successors. If you head back down there, however, you will find a new, much larger region has been added, and along with it, another new alien faction! The Avgi, thanks to a tremendous amount of work done by Azure3141 and beccabunny, have brought with them an astounding number of new systems, outfits, ships, intro missions, and more! As with all new alien content, I'd like to leave most of it to speculation, and let everyone find their way in the Twilight Zone maze. Don't let this shorter description fool you - there are a lot of fun things out there, some more nuclear than others...

<img class="centered shadowed" src="/images/blog/v0.10.11/avgi.jfif" width="400" height="225" />

Some other changes and fixes coming with this update include:

New side mission chains in human space and Hai space by SpearDane, Hurleveur, alexrovw, and TheGiraffe3.
More direct choices in earlier FW missions by Anarchist2.
You can now steer while reversing by SomeTroglodye.
A sound effect is now played upon reaching mission destinations by a-random-lemurian.
You can no longer purchase an outfit despite not having the credits, which lead to negative credits by warp-core.

In order to play unstable updates over on Steam or GoG, you have to opt into the beta branch:
For Steam, go to your library, right click Endless Sky, go to Properties, go to Betas, select the beta in the drop down box, and that's it!
For GOG, go to your library, right click Endless Sky, go to Manage Installation -> Configure, and select the beta in the Beta Channels drop down box.
The next release, v0.10.12 stable, will be coming in late February, and will be focused mainly on bugfixes for this unstable release. You won't have to opt into the beta branch once it is available.

As this is a major update, and it is bringing a lot of big changes with it, feel free to head over to our [feedback box](https://docs.google.com/forms/d/e/1FAIpQLSdyuyskMNz8lHO3OQCfAnBHNzM7YFJgZDsqd64aefqtmGGmuw/viewform?usp=dialog) and give any feedback you might have on the new changes! As for the Github [discussion post](https://github.com/endless-sky/endless-sky/discussions/10947) for this release.

And as always, if you haven't yet, make like the new map panel button and ⭐ us on Github! It helps out our game's discoverability!
