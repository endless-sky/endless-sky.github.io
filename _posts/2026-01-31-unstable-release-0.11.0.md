---
layout: post
title: Unstable release 0.11.0
author: Saugia
---

Many of us are feeling that winter cold, but do you know what else is cold? The vacuum of space, where Endless Sky v0.11.0 awaits! All things new can be found in the [changelog](https://github.com/endless-sky/endless-sky/blob/v0.11.0/changelog) for this release.
If you thought, "Hey, that's not v0.10.11!", you'd be right - we've decided to bump the version numbers again! Similar to how we updated version numbers for v0.10.0, we've achieved some notable records for Github development recently - the lowest number of open Pull Requests since 2020, and the lowest number of PRs older than one year since 2018! Additionally, there is a similar number of contributors and new PR's being opened (meaning that the lower PR numbers aren't a result of a proportional decrease in contributions), so overall, PRs are being resolved much quicker than in the past. On top of this, there are a few long-requested UI quality of life changes coming in v0.11.0 (more on that below!), so we felt this was a great time to increment the second version number again.

As was the case with v0.10.0 (and v0.9.0, if you remember that), v0.11.0 will break the usual pattern of releases, and we will be adjusting accordingly. The release after this one, v0.11.1, will also be an unstable release (new content, code, etc.), planned for the end of April. v0.11.2 will be the first stable release (bugfixes, etc.) of the v0.11.x cycle, and will last two months instead of the usual three weeks. After that update, we will then move back to the usual release schedule of unstable/stable (September + October, January + February, May + June, etc.).

And now, here are some of the showcases of major changes for this update.
Wondering what all I meant by "quality of life" UI changes? Well, one of our new contributors, @xobes, has been hard at work looking at UI enhancements. For a long time, we've had requests to make some outfitter keybinds more easily accessible, especially when it comes to outfit storage. You will now find new buttons in the outfitter for installing/uninstalling outfits, loading/unloading them from cargo, and storing them planet-side! Not only this, but the Player Info panel is now easily accessible through a new button on the planetary UI panel, along with a few other UI adjustments.

<img class="centered shadowed" src="/images/blog/v0.11.0/shop-buttons.jfif" width="800" height="450" />

<img class="centered shadowed" src="/images/blog/v0.11.0/planet-panel.jfif" width="800" height="450" />

Another long-standing request is to have more starts available to the game, which Anarchist has provided us! In addition to the default one currently in the game, there are now three more human starts for a little more variance - start richer, start with less, or start with something a bit different than what we have now. Which you choose is up to you!

<img class="centered shadowed" src="/images/blog/v0.11.0/starts.jfif" width="1058" height="636" />

Something else Anarchist has done is heavily reworked bounty hunting jobs in human space. They are more common now, have lower combat rating requirements and a more gradual ease into more difficult jobs. The list of ships in their fleets has been overhauled, adding more variants and more usage of light warships in the lower end. Notably, bounty jobs now affect reputation, the same way hunting pirates does normally.

<img class="centered shadowed" src="/images/blog/v0.11.0/marauder.jfif" width="1092" height="671" />

While we're still talking about human space, bene-dictator has implemented "message buoys" that send hails upon entering certain systems and traveling between regions, giving us a little more immersion when space truckin' around!

<img class="centered shadowed" src="/images/blog/v0.11.0/buoy.jfif" width="800" height="200" />

Under the hood, several improvements to overall performance have been made and should noticably reduce gameplay lag. Pathfinding and casual flight should feel a lot smoother, and VRAM usage should be much lower using High DPI graphics. Thanks to the efforts of xobes, Amazininte, and warp-core!
Finally, for those of you wondering about Hai Reveal: We've made the decision to remove the Hai Reveal storyline from the game. Only about a dozen of the missions were ever available, and they conflicted with the plotline of other storylines. No progress has been made on it in several years, so we've opted to remove it and related content for the time being, giving us a blank slate for when we eventually do return to and properly continue it.
As mentioned above, this will be a double unstable release period. In order to play unstable releases on Steam and GOG, you need to opt into their respective beta branches.
- For [Steam](https://store.steampowered.com/app/404410/Endless_Sky/), go to your library, right click Endless Sky, go to Properties, go to Betas, select the beta in the drop down box, and that's it!
- For [GOG](https://www.gog.com/en/game/endless_sky), go to your library, right click Endless Sky, go to Manage Installation -> Configure, and select the beta in the Beta Channels drop down box.

With all releases comes the [Github discussion](https://github.com/endless-sky/endless-sky/discussions/12204) post and a [Release feedback box](https://docs.google.com/forms/d/e/1FAIpQLScl3EVWbqL3puI3poCQD7tVMCNBun76vlSyCTe9UoxW8eqM2A/viewform?usp=dialog)! This time around, there are a few questions beyond what pertains to the update - mainly, we'd like to get an idea of sequencing after the Free Worlds campaign.

The next release, v0.11.1, will also be an unstable update, and is planned for the end of April.
The next stable release, v0.11.2, will be a longer stable period focused on bugfixes for the prior double unstable releases.

Give us a star on the [Github repository](https://github.com/endless-sky/endless-sky) if you haven't yet, so that new players and contributors alike can find the game easier! Until next time!
