---
layout: post
title: Virtual Reality & Project Venetia
categories: 
- Innovation
tags: 
- Virtual Reality
- Oculus Rift
author: 
- Rebecca Bradley
- Mark Manes
- Heather Williams
twitter_handle: 
- RBradley_xox
- profplum
excerpt: With Virtual Reality, we have a new medium where we can paint a picture without the limitations of 2D screen &mdash; and discover new ways to understand and interact with data in the process.  With the first consumer release of VR expected in the coming months, we are on the cutting edge of this fast moving technology.
date: 2015-10-19
permalink: /articles/oculus-rift-virtual-reality-venetia
published: true
---
 
Data Visualization is part of the heart and soul of [Markit](http://markit.com). We have been processing and representing data in charts and graphs for over twenty years. With Virtual Reality, we have a new medium where we can paint a picture without the limitations of 2D screen &mdash; and discover new ways to understand and interact with data in the process.  With the first consumer release of VR expected in the coming months, we are on the cutting edge of this fast moving technology. By summer of next year, we will have a way to put our hands in the experience and not just our eyes and ears as it is now.

The idea of Project Venetia was to create a cutting edge view into market sentiment, one that brings information alive with streaming data in three-dimensional visualizations, as a sort of virtual trading floor. Transforming complex data sets into an immersive environment like VR has the potential to help investors better understand market data and see patterns more efficiently &mdash; and the potential to bring our customers new ways to impact their users.  We used the [Oculus Rift](http://www.vanityfair.com/news/2015/09/oculus-rift-mark-zuckerberg-cover-story-palmer-luckey) for this project, though a number of different VR devices are available or almost available on the market.

<img src="{{site.url}}/images/articles/rift/3.png" class="img-responsive" alt="Venetia - Virtual Trading Floor" />

Virtual Reality goes beyond just adding more screen real estate for 2D data. Designing for an immersive environment is completely different than designing for a flat screen. VR has its own challenges and unique problems, without the same interaction models or tools that we were used to. We had to develop a workflow that was compatible between all the diverse tools and disciplines required to move from scene layout to coding.

VR scenes can consist of 3D assets, textures & materials, audio/video, and of course the underlying code (C#) that brings it all together. To design the trading floor, we created objects in [Rhino 3D](https://www.rhino3d.com/), and determined their UV mapping and z-orientation. The objects were then imported into [Unity](https://unity3d.com/) and customized in color and material, with Unity powering the Oculus Rift headset.

The project was a process of learning the constraints and limitations of designing for VR and working together to make the technology useful &mdash; to design something people actually want to use and experience. The user doesn't have the constraints they have in the real-world; the possibilities for data visualizations are limitless in virtual reality.

In our VR app, the user can actually 'see' the entire S&amp;P 500 at once &mdash; to visualize performance at an index, sector, or company level. Investors can track real time volatility, news, and analysis &mdash; all with a deeper understanding of the interactions between supply and demand in the markets. Relevant, streaming videos begin playing when the user moves closer, and a reaction that occurs on gaze could also work for hand tracking or gestures.

<img src="{{site.url}}/images/articles/rift/0.png" class="img-responsive" alt="Venetia - Virtual Trading Floor" />

Virtual reality also has the potential to bring people together &mdash; whether they are across town or across the globe. It can facilitate communication between advisors and investors, making both advice AND information more accessible (and real time) than ever. Investors are able to evaluate market data and move from research to trade, with the ability to share ideas with their advisor or a network of fellow traders. 

Markit is always looking at technology in a way that brings our customers new ways to impact their users. It is not far fetched to see the Project Venetia proof of concept morph into something that is far more dramatic with a far greater significance. We will build upon these lessons learned to continuously push new ways to visualize data and to make finance an experience in itself.

We are also seeing uses in other industries for VR:

*  [Fashion via Dior](http://www.digitaltrends.com/mobile/dior-eyes-vr-fashion-show-headset-news/)
*  [Dior Real Eyes](https://www.youtube.com/watch?v=pdcELZEANbs)
*  [9 Industries using VR](http://www.techrepublic.com/article/9-industries-using-virtual-reality/)

<footnote>A footnote: the name Venetia came from a free-association naming exercise from the project team.  It went something like this: the virtual space is in the sky, and allows a user a certain omniscience of the markets.  [Plutus](https://en.wikipedia.org/wiki/Plutus) was the Greek god of wealth, and had similar omniscience. The planet Pluto is also in the sky, and an 11-year-old girl named [Venetia Burney](https://en.wikipedia.org/wiki/Venetia_Burney) gave Pluto its name.</footnote>