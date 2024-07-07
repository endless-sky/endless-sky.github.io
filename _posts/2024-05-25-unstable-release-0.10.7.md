---
layout: post
title: Unstable release 0.10.7
author: Saugia
---

Hello! I heard you like updates. Well, you're in luck, because the newest version of Endless Sky, v0.10.7, is now live on both Steam and Github! This is an unstable release that brings with it a little bit of everything - new content, mechanics, visuals, balance changes, and so on. If you want to know exactly what that everything is, you can find the changelog for all the new changes in the update available here: https://github.com/endless-sky/endless-sky/blob/master/changelog

The following are some highlights of notable changes and additions coming with this release.

Have you ever wondered why cloaking paints your ship dark red, and all of a sudden nobody in the galaxy can see it? Well, thanks to Koranir, not only does your ship turn red, but a fancier outline for cloaking effects makes it partially transparent! This can be toggled within the settings.

<img class="centered shadowed" src="/images/blog/v0.10.7/cloak.png" width="400" height="225" />

While we're talking about new settings, Koranir has also introduced a new "Dynamic Camera Acceleration" setting that makes flying feel a bit more dynamic, with the camera panning away from your ship based on its acceleration. This is currently defaulted to on, but it can also be turned off in the settings. We may change it to default to off based on feedback.

A neat new mechanic turrets can now be given is a "firing arc", where you can define the start and end angles that a turret hardpoint can rotate, as well as what direction it faces. This can be useful for if you want to make turrets that don't shoot through large structures on a ship model, or to give a ship blindspots that it can't fire turrets from 1010todd and oo13.

On the content side, missions can now "mark" systems of importance without the player being required to visit them, as well as leave them marked after being visited. Not only that, but mission triggers and conversations can do various new things such as play music, give the player debt, and perform events immediately instead of having to wait at least one day. @Amazinite

Around human space, if you keep your eyes peeled, you will find a few more planets and stations that weren't there last time, bringing with them a little of fluff. Some of these can be used as stopovers for content that otherwise didn't have a nearby planet to land at. Thanks to DoomKorath and bene-dictator for contributing these.

<img class="centered shadowed" src="/images/blog/v0.10.7/uninhabited.png" width="400" height="225" />

If you're itching for more missions, DoomKorath has also introduced a short mission series for the Wanderers involving an interaction with the Mereti. What for, you'll have to see for yourself! There are a few other new short mission chains coming with this update aside from this one, so a decent amount of new short story content to get involved with, with the help bene_dictator, spearsdane, Saugia, and several others.

Now getting into the balance side of things. Replacing fighters can be a bit of a chore because they can be destroyed easily in a larger fight, especially when they get tagged with random shots. To alleviate this, in the new update, disabled fighters can no longer be hit by stray projectiles and must be targeted first, so any fighters disabled out of the way won't die as easily anymore. However, blast damages and proximity-triggered weapons will still damage them, so be sure not to destroy that heavy warship right on top of your favorite fighter!

<img class="centered shadowed" src="/images/blog/v0.10.7/fighter.png" width="400" height="225" />

Speaking of projectiles, a few updates ago we changed missiles so that they had lower acceleration and drag. While this made them easier to dodge, it also made it much harder for the player to use them. Often times missiles will overshoot their target and fly just barely past them. We've decided to revert these changes, done by Anarchist, along with few adjustments to carrying capacities. We'll be keeping our eye on missiles, and especially missile pods, as we move forward.

Along with a plethora of balance adjustments including the above, there is one big one. Something we've talked about a lot over the years is the speed of ships in-game. Often times these discussions bring up how some larger ships, commonly Heavy Warships, can be exceptionally fast for their size compared to smaller ones such as Interceptors, or that some smaller ships aren't fast enough on their own right. With that said, the masses of all ships across the board have been adjusted to have more variation between smaller and larger ships. The smallest ships are faster, and the largest ships are slower. As part of this change, thrust, reverse thrust, turn, and afterburner thrust have been given a flat 50% buff. Thanks again to DoomKorath for putting a lot of effort in calculating all of this.

<img class="centered shadowed" src="/images/blog/v0.10.7/mass.png" width="400" height="225" />

Note that while this change affects every ship, ships still have inherent speed strengths (for example, the Falcon is still focused on its speed). This can also be considered an indirect buff to fighters along with the disabled protection. We expect these changes to receive the most feedback, so we'll be watching carefully on where they go.

A friendly reminder that in order to play unstable updates on Steam or GOG, you have to opt into the beta branch.

- On Steam, go to your library, right click Endless Sky, go to Properties, go to Betas, select the beta in the drop down box, and that's it! Also a reminder that we now have a GOG release, and you can find that here if you're interested. 

- On GOG, go to your library, right click Endless Sky, go to Manage Installation -> Configure, and select the beta in the Beta Channels drop down box.

If you're using the High DPI plugin, you should also update that to the [current version](https://github.com/endless-sky/endless-sky-high-dpi/releases/v0.10.7).

Next release will be v0.10.8 Stable, meaning it will focus on bug fixes for this release, and have a shorter cycle ending somewhere around the end of June. This won't require you to opt into the beta branch once available.

If you'd like to give feedback on anything else this update, or on the game in general, here is our [feedback box](https://forms.gle/6A9kEcrFHSLw9CQw5). With all of the meaty changes above, there is plenty to talk about. Play around with the new update for a bit, then head over to the survey and give us your thoughts!

The Github discussion post that comes with this release can be found [here](https://github.com/endless-sky/endless-sky/discussions/10105).

And as always, a reminder to star us on [Github](https://github.com/endless-sky/endless-sky) if you haven't yet to help the game's visibility!
