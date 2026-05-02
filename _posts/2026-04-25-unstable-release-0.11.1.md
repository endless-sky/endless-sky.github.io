---
layout: post
title: Unstable release 0.11.1
author: Saugia
---

Hope you're ready to spring into Endless Sky's v0.11.1 update, which is now live! If you recall from our previous announcement, this is also an unstable release, bringing more major changes such as new content, balancing, mechanics, bugfixes and more. You can check out the [changelog](https://github.com/endless-sky/endless-sky/blob/v0.11.1/changelog) for the release to get right to all the changes.

Let's get right to the highlights of this release - there's some big ones!
Now, for a while, we've been talking about gamerules. For those of you who are not aware, there is a gamerules.txt file where you can adjust several pre-determined toggles such as depreciation of outfits and ships, person ship spawn rates, max mining times, as well as more recent, notable additions, like disabled fighters ignoring projectiles, and universal ammo restocking.

For the longest time, these have only been accessible by navigating through the game's files. Amazinite has finally brought it to us in the form of a button right on the game's main menu! This makes them much more accessible for the average player to set up options for their pilots before and during a playthrough. Currently, there is a "default" setting, which will always be what we intend for the game's vanilla experience.

You will note that in addition to this new interface, Amazinite has also added a few more gamerules. One is the ability to toggle the spawning of raid fleets, in case you're tired of those pirates chasing after your tasty cargo ships. Another, which has been the basis of a LOT of discussion over the years... is the ability to toggle how many ships you can have in a fleet. Yes, you heard it right - you can now HARD-limit your fleet size!

Note that while gamerules are something we can expand upon, we don't plan on adding toggles for every single facet of the game. Stay tuned for any more that may be added in the future! (Did somebody say... ironman mode?)

<img class="centered shadowed" src="/images/blog/v0.11.1/gamerules.png" width="800" height="450" />

Apart from the gamerule changes, there are certainly other UI additions. You will notice that you now have the option to sell minables and outfits separate from one another in the trading panel. Thanks to efforts from xobes!

<img class="centered shadowed" src="/images/blog/v0.11.1/trading.png" width="800" height="450" />

Was the written mention of nuclear weapons not alarming enough for you in the main campaign? TomGoodIdea has given us a new alert icon and sound to go with the chaos! Was the text dramatic enough for you? You may change the indicator to icon only, audio only, or have it disabled entirely in your preferences.

<img class="centered shadowed" src="/images/blog/v0.11.1/nuke.png" width="109" height="91" />

Tom has also implemented the functionality for minables to be targeted by homing weapons, for those of you who are mining with guided missiles (for some reason). Have fun with your game of advanced (easier) darts!

<img class="centered shadowed" src="/images/blog/v0.11.1/asteroid.png" width="800" height="450" />

Speaking of missiles, some significant changes are coming in this patch. Human missiles have proven to be powerful within human content, especially after having received several buffs over the years. However, a majority of non-human missiles have had seen little to no changes over time, leaving them to gather dust. In comparison to the current state of human missiles, many of them seem lackluster, and a few have been above and beyond ideal parameters. Anarchist2 has gone through and done a major rebalance to most of these weapons to better place them in the game's current state:
- Hai Tracker Pods require slightly less outfit space and have reduced infrared tracking.
- EMP Torpedo bays have increased capacity, reduced torpedo mass, and significantly reduced infrared tracking.
- Techiimachs no longer have bonus stats and rely mostly on the safe functionality to separate them from regular EMP Torpedoes. Their stats now mirror EMP Torpedoes, but have slightly higher capacity, reduced mass, and a higher price.
- Ka'het EMP Deployers require less outfit space, have notably higher capacity, and significantly reduced infrared tracking.
- Firelights no longer have trigger radius, blast radius, and corrosive damage, along with the launcher having increased outfit space, mass, and decreased capacity. Tracking has been changed to optical tracking so they don't bypass jamming. They have been tuned down as they have been too powerful in many combat scenarios.
- Firestorms have increased mass, and their launchers have notably reduced capacity, but retain their power as deadly weapons.
- Cluster Mine Launchers require significantly less space, and have significantly increased capacity. Mines have lower mass.
- Thunderhead Launchers have increased capacity, notably reduced radar tracking, increased infrared tracking, swapped optical tracking to infrared tracking on second stages, and reduced mass for the missiles, making them more specialized for their role.
- Swarm Pods require less space, have increased optical tracking, and reduced radar tracking.
- Piercers are seeing a drastic change, losing all homing attributes and being converted into unguided rockets, while maintaining their piercing design. They have a significantly reduced reload, notably increased hull damage, significantly increased capacity, increased accuracy, reduced firing energy/heat, drastically reduced lifetime, reduced missile strength, reduced hit force, and reduced ammo cost.

<img class="centered shadowed" src="/images/blog/v0.11.1/piercer.png" width="800" height="450" />

Note that any weapon not listed here has not seen any changes at this time. 

Anarchist has also reduced optical jamming across the board, and adjusted it so that it now affects a ship's effective mass instead of a raw lock chance. Combined with the above, tracking and evasion should be more interactable now, instead of an after-thought. Quite a lot of changes here to missile gameplay! Be sure to let us know what you think as you play!

Finally, let's look to the content side of things. Now, now, I know what you're all thinking. If Patir 2 was so good, then why don't we have Patir 3? Well, now we do! beccabunny has continued the next big installment of the Patir series, giving us some great new lore for our favorite flying slugs, those funky asteroids, and the Remnant! I did hear there are some items involved that many of you have been quite interested to see more of... but you'll have to play the story to find out for sure!

<img class="centered shadowed" src="/images/blog/v0.11.1/swan.png" width="800" height="450" />

And that wraps up the highlights! Here's list of honorable mentions:

- NPCs will now de-prioritize targets that are already being attacked by overwhelming firepower. Azure3141
- The Tangled Shroud has a new spooky sprite! Daeridanii1
- Ssil Vida was upside down for the longest time? Not anymore! beccabunny
- New explosion sprites for Quarg ships! Now they blow up pretty alongside the Pug! Gefüllte Taubenbrust
- Quarg fleets in "Defend Laki Nemparu" have been fixed to match their power prior to the Quarg rework, which were otherwise making the mission far too difficult. Saugia
- There is now a preference to highlight all ships in the UI for visibility. Amazinite
- Planetary tribute messages can now be customized! Give me yer money! TheGiraffe3
- Message buoys for Geminus and Martini now use the correct dates. No time travelers allowed! Anarchist2

As mentioned above, this is another unstable release. In order to play unstable releases on Steam and GOG, you need to opt into their respective beta branches.
For [Steam](https://store.steampowered.com/app/404410/Endless_Sky/), go to your library, right click Endless Sky, go to Properties, go to Betas, select the beta in the drop down box, and that's it!
For [GOG](https://www.gog.com/en/game/endless_sky), go to your library, right click Endless Sky, go to Manage Installation -> Configure, and select the beta in the Beta Channels drop down box.

There are a LOT of changes this release! We'd love to hear your feedback, which our dedicated [Release Feedback Box](https://docs.google.com/forms/d/e/1FAIpQLSfa9ureH8f_skQLHdk-Clg7y61yW22hXcH7xb1Gaqf856-I7g/viewform) is great for! There's also a [GitHub discussion](https://github.com/endless-sky/endless-sky/discussions/12413) post.

The next release, v0.11.2, will be a stable release, and is planned for the end of June. This is longer than the typical 3-4 weeks so we have plenty of time for feedback and bugfixes following these past two unstable releases.

Our GitHub loves stars! You could be one of those stars! Go on over to [GitHub](https://github.com/endless-sky/endless-sky) if you haven't starred our repository yet to help with the game's visibility! See you when summer hits!

<img class="centered shadowed" src="/images/blog/v0.11.1/v0.11.1.png" width="800" height="450" />
