---
layout: post
title: Wearables
categories: 
- fintech
tags: 
- Smart Text
- Wearables
- Android Wear
- Apple Watch
- Smartwatch
- Speech Recognition
author: Tim Burcham
twitter_handle: tim_burcham
excerpt: How will your money and the markets look on a smartwatch or wearable device?
date: 2015-02-07
permalink: /articles/wearables
published: true
---

With the impending launch of [Apple Watch](https://www.apple.com/watch/), [Android Wear](https://www.android.com/wear/) devices like the Moto 360 already on the market, and original wearables like the [Pebble Smartwatch](https://getpebble.com/)<sup>1</sup> well-established, it is clear that the era of the mass-market wearable device is here.  [As designers and technologists work](http://www.fastcodesign.com/3040936/how-your-favorite-apps-will-look-on-the-apple-watch) to broadly understand the implications of these devices and their usability, we are looking at their applications in the world of finance.

At first look, wearables appear to simply be a miniaturization of our phones &mdash; why would I want to check email on a tiny screen?  However, a smart watch, or even a Fitbit isn't necessarily intended for 'active' use, like we use our phones, or laptops &mdash; if we consider that they are first and foremost 'passive' use devices, we can quickly see numerous applications.  We can start with some key assumptions:

* With a smaller size, we in turn must work with smaller data : bite-sized morsels of financial data, rather than an entire application
* Interactions with a smart watch will be fast, on the order of seconds, rather than minutes
* Given the size and speed of the interaction, the user experience must be highly relevant

Given these assumptions, our mobile development team prototyped an Android Wear app that uses speech recognition to look up a security:

<iframe src="//player.vimeo.com/video/114930769?color=0071a3" width="700" height="394" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>

We quickly discovered that the round display of the Moto 360 made viewing security details difficult -- and found that our Smart Text capability, summarizing those details in a quick sentence, was much more appropriate for the screen size, and interaction model.  In addition, with the only input device being voice, we were able to make use of our [speech recognition](/articles/speech-recognition-and-nlp) experiments, and our XREF systems, to identify the correct security for display.

Granted, the above video is 'active use', but our next step is to wire the short notification to our alerting engines for quotes, news and research, and our MIND capability for determining relevancy.  In this way, we can provide only important notifications on securities in your portfolio or watchlist, using sound or Apple's Taptic feedback system to discretely notify an investor of a new trading opportunity, or to alert a Financial Advisor to an important client or book event.

It's definitely early days for wearables, and smart watches in particular, but we feel that the smaller size makes a compelling case for micro-interactions that can help an investor in the course of their day, with a minimum of effort.

<sup>1</sup> Fun fact: our demo quote api made it into the [official examples](https://github.com/pebble/pebble-sdk-examples/blob/master/pebblekit-js/quotes/src/js/pebble-js-app.js) for the Pebble!

