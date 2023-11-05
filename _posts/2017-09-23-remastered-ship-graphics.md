---
layout: post
title: Remastered Ship Graphics
author: Michael Zahniser
---
Recently I've been playing with different ideas for making the ships look less flat and cartoony, and I reached the conclusion that the real problem is that all the ships were rendered with nearly-overhead illumination (30&deg; from vertical). I originally chose that illumination angle to avoid big dark shadows, but it turns out those shadows are necessary to give the shape of the ship definition. I've switched over to a much sharper illumination angle of 65&deg;, manually adding "fill lights" to keep the shadows from being completely black, and I'm quite happy with the results:

<img class="centered shadowed" src="/images/blog/mereti.jpg" width="540" height="540" alt="A collection of Kor Mereti ships looking blocky">

<img class="centered shadowed" src="/images/blog/wanderers.jpg" width="540" height="440" alt="Various Wanderer ships showing parts with different thickness">

<img class="centered shadowed" src="/images/blog/sestor.jpg" width="540" height="540" alt="Kor Sestor ships with 3D-like exterior plating">

<img class="centered shadowed" src="/images/blog/navy.jpg" width="540" height="440" alt="Navy ships with a variety of colored panels">

The downside is that plugin creators will have to re-render their own ships to match, but the improvement is significant enough that I still think it's worth doing - and better now than in a year or two when there are even more ships in the game!