---
layout: post
title: Unstable release 0.11.3
author: Amazinite
---

It's that time of the year again where we have another major update for Endless Sky! Say hello to version 0.11.3, our last major update of the year. This is an unstable update containing major new content and mechanic additions. The changelog for all the new changes this update is available [here](https://github.com/endless-sky/endless-sky/blob/master/changelog). If that's too much reading for you, though, then here are some of the major highlights:

This update includes a combined 72 new missions, most of which come from the efforts of @daeridanii and @beccabunny adding new missions to the Successors and Remnant/Ka'het, respectively. The Successors in particular have 57 new missions, making up the first part of the Successor campaign while also introducing six new ships and one new outfit. If you haven't found where the Successors yet, you might want to do a bit of digging down south. And be sure to keep a careful eye out for which places are available for you to jump to in every system.

<img class="centered shadowed" src="/images/blog/v0.11.3/ghosts.png" width="700" height="350" />

Various QoL changes have been made surrounding illegal outfits. When you get scanned while you have illegal outfits, the dialog that appears when you're fined will now tell you which outfit was found, which ship it was found on, and whether the outfit is installed or in the cargo hold of the ship. On top of that, you can now  And give a thanks to @ThrawnCA for the boarding panel now warning you if a ship you just captured has illegal outfits installed. You may also notice the new icons in the boarding panel that tell you if an outfit is installed or in the cargo hold of the ship you're boarding. :eyes:

<img class="centered shadowed" src="/images/blog/v0.11.3/boarding.png" width="700" height="425" />

The logbook has received a big facelift that should make it a more helpful and enticing place to visit. Instead of the entire right side of the panel being useless, it now displays the galaxy map. Dated log entries will now also record the system you were in when the log entry was recorded. In a future update, we will also go through the logs in the game to have them mark other systems related to the event recorded in the log, such as can be seen in the following example.

<img class="centered shadowed" src="/images/blog/v0.11.3/log.png" width="850" height="500" />

And resolving an issue on GitHub from all the way back in 2015, we now have a permadeath mode, accessible by activating the permadeath gamerule. You get to choose how severe your permadeath mode is, with options to make your save files inaccessible or to entirely delete them, as well as whether this occurs when you are killed or, if you're really brave, if you enter permadeath mode the moment you take off from a planet and can only safely exit your game when landed.

<img class="centered shadowed" src="/images/blog/v0.11.3/gamerules.png" width="700" height="700" />

And some notable bug fixes include the following:
- Fixed rapidly hitting the spaceport key immediately after landing causing panels to draw out of the intended order. (@warp-core)
- Person ships can no longer mind control your escorts that you captured from their fleet.
- Fixed a potential crash and unintended save file deletion caused by creating a new pilot with the same name as an old pilot if the old pilot was from before 0.11.1 and hadn't been played in a newer version of the game.
- Fixed various cases where your selected escorts for issuing orders could become desynced from the ship you are currently targeting.
- Fixed a case where the electron beam missions during the Free Worlds campaign could cause your flagship to have a negative number of electron beams installed. (@warp-core)
- The "Select nearest asteroid" command now works if the asteroid scanners are installed on your escorts.

And some other honorable mentions:
- Rewrote and reintroduced the Delvan Shipworm missions, which were previously removed for containing LLM generated content. (@LazerLit)
- The flamethrower and stack core can now appear equipped on randomly spawned NPCs after they each become available in the main campaign. (@LixiChronikouOriou)
- Added administration costs to all ships. This cost is only used if using the fleet size limit gamerule that limits your fleet size based off of the administration costs of your ships. (@mOctave)
- Minable asteroids can now be damaged by corrosion. (@apttie)
- Optical tracking is now based off of the number of pixels in a sprite instead of the mass of the ship.
- Changed confusion to now be angle-based instead of position-based. This results in aiming confusion causing ships to be less accurate at range, instead of being less accurate up close. (@Anarchist2)
- Auto-aim is now much more intelligent when using multiple different fixed guns with differing velocities.
- Multiple projectile collisions that occur in the same frame will now deal damage in a predictable order that maximizes shield and hull damage. (Shoutout to @Tau for pointing out the previous odd behavior.)

And a ton of other cool stuff, but if I were to list everything, I'd just be copying the changelog here, so go read the whole thing if you want to know about all the cool new changes!

Remember to star the game on Github or leave a positive review on Steam or GoG if you haven't already. And as usual, here is our feedback box for this release:
https://forms.gle/gPERzubizkhyeq6w8

Friendly reminder that in order to play unstable updates on Steam or GOG, you will need to opt into the beta branch.
- On Steam, go to your library, right click Endless Sky, go to Properties, go to Betas, and select the beta in the drop down box. (You don't need any sort of beta code, just select beta in the drop down box and close the menu.)
- On GOG, go to your library, right click Endless Sky, go to Manage Installation -> Configure, and select the beta in the Beta Channels drop down box.

The next release, v0.11.4, will be a stable release that focuses on bug fixes, and is scheduled for October 31st. You will not need to opt into the beta branch on Steam or GOG when it is made available.