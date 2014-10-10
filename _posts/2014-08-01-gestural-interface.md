---
layout: post
title: Gestural Computing in Finance
categories: 
- gestural
- wearables
tags: 
- gestural
- Leap Motion
- Myo
- Kinect
- Wii Remote
- Oblong
- Three.js
author: Tim Burcham
twitter_handle: tim_burcham
excerpt: Alternate user interfaces like the Leap Motion, Kinect, and Myo armband get us closer to the utopian interfaces from Minority Report and Iron Man. How do we best use these interfaces in financial applications?
date: 2014-08-01
permalink: /articles/gestural-computing-in-finance
published: true
---

MOD/L has always been fascinated by alternate input controllers, and especially hacking them beyond their original intent. Certain expressive mediums, like sound design and performance art, lend themselves well toward these types of controls, and many years of research, experimentation and application has been done on this space.  From Leon Theremin's experiments in the 1920s, to Nam June Paik and Charlotte Moorman's [Video Cello](https://www.youtube.com/watch?v=-9lnbIGHzUM) in the 1960s, these fields of expressive art helped to set the stage of our current trends with low-cost [gestural computing](http://en.wikipedia.org/wiki/Gesture_recognition).

<iframe width="806" height="453" src="//www.youtube.com/embed/w5qf9O6c20o" frameborder="0" allowfullscreen></iframe>

Science Fiction has also helped to lead our thoughts on interface, in particular, multi-touch interfaces.  Consider Star Trek's Enterprise interface, and any modern tablet, for example:

<img src="/images/articles/gestural/tng-interface.jpg" class="img-responsive img-thumbnail" />

In the last two decades, what I'll call the 'futurist fascination' with gestural or physical interfaces has manifested in Minority Report, and later, Iron Man, as forms of technology interaction: virtual or physical walls of interface, highly advanced A.I., and a magical 'waving of the hands' to interact with the system.

### Minority Report

<iframe width="806" height="453" src="//www.youtube.com/embed/8deYjcgVgm8" frameborder="0" allowfullscreen></iframe>

### Iron Man

<iframe width="806" height="453" src="//www.youtube.com/embed/e-jN8UgMGrs" frameborder="0" allowfullscreen></iframe>

These high concept systems help to inform many of the current innovations in the gestural space &mdash; gaming systems like Wii or Kinect (and the hacker cultures that have formed around those systems); the Leap Motion &mdash; arguably the most successful Kickstarter project to date; the forthcoming Myo armband, which could take advantage of natural human nervous system latency, and more.

When considering any of these types of devices in a gaming, music, performance art, or even medical context, the applications are endless and exciting -- drive the car with a virtual steering wheel, or dry run a particular surgical procedure in advance.  Replication of existing physical interactions in each of those contexts just makes sense.

However, when considering business or particularly finance oriented applications, a more nuanced approach must be taken -- there aren't many physical interactions to necessarily model.  We've spent some time looking at this particular space, however, and have found a number of creative approaches to gestural computing for finance.

MOD/L has built a simple example of combining Leap Motion and the LeapJS controller API, with HTML5 interactions, to both operate pinch and zoom on a stock chart, and rotating a 3d cube of portfolio performance:

<iframe src="//player.vimeo.com/video/100161138?color=0071a3" width="806" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

Here's another experiment approximating an Iron Man style interface with a Leap:

<iframe src="//player.vimeo.com/video/71216887" width="806" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

One of the benefits of gestural computing, however, is to be able to work at a different scale than a personal computer. For example, what happens when you build a massive wall of touch interface, as [MultiTaction](http://www.multitaction.com/) has? We are working to add a number of [F2](http://www.openf2.org) Apps to a similar interface at this writing.

<iframe class="vine-embed" src="https://vine.co/v/OmpM1YT5OVv/embed/simple" width="806" height="453" frameborder="0"></iframe>

Or, activate an entire conference room with sensors, gestural awareness, and high-bandwith collaboration tools, a la [Oblong Industries](http://www.oblong.com/blog/wp-content/uploads/2013/09/Mezzanine-Beyond-Telepresence.jpg)?

And last, on the fun-but-not-terribly-useful side of things, what would happen if you added [traditional CME trading hand signals](http://www.cmegroup.com/education/open-outcry-futures-trading-hand-signals.html) to a Leap Motion?  Cameron, at least, would have a lot of fun.

<iframe width="806" height="453" src="//www.youtube.com/embed/6yguPLkPh0A" frameborder="0" allowfullscreen></iframe>