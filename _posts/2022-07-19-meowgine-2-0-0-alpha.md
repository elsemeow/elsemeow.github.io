---
layout: post
title: MeowGine 2.0.0-alpha
summary: >-
  I released a reimagined version of my canvas-based game engine with relative
  scaling — MeowGine.
---

A week of sleepless nights has yielded results. I've launched an updated version of my canvas-based game engine with relative scaling – [MeowGine](https://github.com/elsemeow/meowgine){:target="_blank"}. Instead of trying to build my own collision detection for complex objects, I've incorporated Jim Riecken's [SAT.js](https://github.com/jriecken/sat-js){:target="_blank"} as the foundation for the `Entity` class. You can find examples ("Pens") under the [#meowgine-v2](https://codepen.io/tag/meowgine-v2){:target="_blank"} tag on CodePen.

![MeowGine](/assets/images/blog/2022-07-19-meowgine-2-0-0-alpha/img-01.png){:loading="lazy"}

The initial release of MeowGine, launched on October 21, 2021, contains fundamental calculation errors. [MeowGine v1.2.0-alpha](https://github.com/elsemeow/meowgine/tree/v1.2.0-alpha){:target="_blank"} is no longer in development but remains accessible for use. Older "Pens" used for project testing up to version `v1.2.0-alpha` are available under the [#meowgine](https://codepen.io/tag/meowgine){:target="_blank"} tag on CodePen.

In the near future, the 3rd version will be released with substantial changes in structure and logic.
