---
layout: post
title: Designing and Developing MOD/L
categories: 
- development
- design
tags: 
- Logo
- CSS
- HTML 
- JS 
- Bootstrap 3 
- Responsive Web Design
- Jekyll
author: Mark Healey
excerpt: We wanted a logo and website that represented the multi-faceted and cross-team nature of our work.
date: 2013-10-01
permalink: /articles/creating_modl
---

### col&bull;lab&bull;o&bull;ra&bull;tion: the action of working with someone to produce or create something.

The effort of designing and developing this site was quite literally the definition of collaboration. [Tim](https://twitter.com/tim_burcham) and I worked closely with [Phil](https://twitter.com/raucreativity) and [Michael](https://twitter.com/beardfury), two talented front-end designers, to create the MOD/L logo and this website's design. Our goals were threefold: create something unique, uncomplicated, thoughtful and responsive; showcase in-progress and completed MOD/L projects alongside a blog; provide easy access to our [Twitter feed](https://twitter.com/mod_labs) and [GitHub repositories](https://github.com/markitondemand). 

#### Leading with design

We started the process reviewing a handful of logo options. From deep space to launching rockets, the original direction felt a bit lofty and geometric. 

##### Early Concepts

<img src="{{site.baseurl}}images/articles/building_modl/early_concepts.png" class="img-responsive" alt="Early concepts" />

We wanted a logo that represented the multi-faceted and cross-team nature of our work. Something that signified cohesion and collaboration instead of something distant, isolated or mysterious. Halfway through a short second round, we all were attracted to Phil's dressed-up dodecahedron. It is simple yet complex, its many faces separate yet connected. Pretty much exactly our team structure within MOD.

##### Second Round

<img src="{{site.baseurl}}images/articles/building_modl/second_round.png" class="img-responsive" alt="Second round" />

##### Variations

<img src="{{site.baseurl}}images/articles/building_modl/variations.png" class="img-responsive" alt="Dodecahedron variations" />

It's only a coincidence that the final MOD/L logo looks great on a t-shirt. Much better than the rocket.

<img src="{{site.baseurl}}images/articles/building_modl/tshirts.png" class="img-responsive" alt="T-Shirts" />

#### Putting the pedal to the metal

We built this site in 4 days.

Getting started building a simple website these days is easier than ever. Using tools like [Yeoman](http://yeoman.io/) and [HTML5 boilerpate](http://html5boilerplate.com/) greatly simplify setting up. Implementing [Bootstrap 3](http://getbootstrap.com)'s grid system and components prevents you from having to worry about the engine and lets you focus on the handling.

Taking advantage of the database-free static site generator found in [Jekyll](http://jekyllrb.com/), we were able to focus our efforts on the markup and UI spending almost no energy on server configurations or blog settings or deployment procedures. The four of us tweaked templates and stylesheets [more than four dozen times](https://github.com/modl/modl.github.io/commits/master) to get them _just right_. We tested on every browser and device we could find (stopping short at IE9's lesser siblings) and are very happy with the result.

When it comes to hosting, we are using [GitHub Pages](http://pages.github.com/). Publishing content or making template changes is as simple as `git push` and [GitHub handles the rest](http://jekyllrb.com/docs/github-pages/). Magical? No. Simple? Yes.

#### Looking ahead

We wanted to design and develop this website quickly so we could turn our efforts to project work where we're aiming to enhance existing capabilities, create new solutions, and foster innovation across our organization. In the coming weeks and months, look for blog posts on a wide range of topics sourced from our 20+ teams. Also watch for updates to projects we're working on including [Jetpack](/#jetpack) <span class="char-code">&alpha;</span>lpha and <span class="char-code">&beta;</span>eta ideas.

<img src="{{site.baseurl}}images/articles/building_modl/ipad.png" class="img-responsive" alt="T-Shirts" />

If you have thoughts on or find issues with our new website, [let us know on Twitter](https://twitter.com/mod_labs).
