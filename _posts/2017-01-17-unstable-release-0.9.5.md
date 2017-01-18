---
layout: post
title: Unstable release 0.9.5
author: Michael Zahniser
---
A new release is now available on GitHub, stable version 0.9.5. This version focuses on adding new content and experimental features. Downloads are available for [Mac OS X](https://github.com/endless-sky/endless-sky/releases/download/v0.9.5/endless-sky-macosx-0.9.5.dmg), [64-bit Windows](https://github.com/endless-sky/endless-sky/releases/download/v0.9.5/endless-sky-win64-0.9.5.zip), and [32-bit Windows](https://github.com/endless-sky/endless-sky/releases/download/v0.9.5/endless-sky-win32-0.9.5.zip). Ubuntu Linux packages are available in a [PPA](https://launchpad.net/~mzahniser/+archive/ubuntu/endless-sky), and a Debian Linux [package](https://mentors.debian.net/package/endless-sky) is also available. For more details, see the [changelog](https://github.com/endless-sky/endless-sky/blob/master/changelog).

Release 0.9.6 will be a stable release focused on fixing any bugs introduced in this release, and on small, safe changes and polishing; it will probably be completed a month from now.

The biggest change to the game mechanics in this release is the addition of a depreciation mechanic. Arguably the most enjoyable part of the game is when you are no longer so wimpy that you can't fight anyone, but not yet so powerful that no fights are challenging. But prior to 0.9.5 that period of the game would typically last for less than an hour because as soon as you are able to reliably capture other ships, you can earn hundreds of millions of credits per hour.

The way depreciation is implemented is that every ship and outfit loses value each day until it is 360 days old, at which point it is worth 25% of its original value. If you sell it, it stays "in stock" and can be bought back at the depreciated price until you leave the planet. Captured ships and plundered outfits always start out fully depreciated. Depreciation does not in any way affect the performance of a ship or outfit; a brand new ship is no more powerful or fast than a fully depreciated one.

As in real life, the most depreciation occurs on the first few days after you buy an item. That means that if you had the choice, it is always optimal to sell the least depreciated copy you have of an outfit, and buy back the most depreciated one available. But actually going through all your ships to find out which one had the newest copy of an outfit would be tedious and pointless, so the game handles that for you automatically. That is, when you sell a laser turret, you will always sell the newest laser turret you own, even if it is technically installed in a different ship.
