---
layout: post
title: Working with Current Trends in Web Development
categories: 
- web development
- code libraries
- open source
tags: 
- Grunt
- jQuery
- .NET
- NodeJS
- TypeScript
- LESS
- SASS
author: Brian Baker, Development
excerpt: Over the years MOD has developed custom libraries before the industry has decided (or in some cases dreamt up) a standard. 
date: 2013-11-18
permalink: /articles/webdevtrends
published: true
---

Over the years [Markit On Demand](http://www.markit.com/product/markit-on-demand) has developed custom libraries before the industry has decided (or in some cases dreamt up) a standard. Before the widespread adoption of [jQuery](http://jquery.com/), for example, Markit On Demand had its own libraries for DOM traversals, manipulation, and eventing. Once jQuery became the standard across the web there was no longer a reason to maintain a custom solution and jQuery was adopted at MOD.
 
Years ago, Markit On Demand needed a solution to handle the combining and transforming of JavaScript and CSS assets. At the time, there weren't many options for .NET, so once again we set out to build a custom library. Shortly thereafter, &lsquo;ResourceManager&rsquo; was born.  The library worked beautifully for years, but recently it started to show its age with the lack of support for LESS, TypeScript, and other emerging languages. Our once cutting-edge combiner was finally falling behind the industry. As a result, our Web Capabilities Team (a small group of developers focused on improving quality and efficiency) started a working group to research new alternatives. The unanimous decision from the group was to adopt a new <a href="http://bundletransformer.codeplex.com/" target="_blank">Bundling</a> feature of .NET 4.5. Bundling is quickly becoming the standard for combining and transforming CSS and JavaScript. It has a growing community surrounding it enabling developers to use [LESS](http://lesscss.org/), [SASS](http://sass-lang.com/), [TypeScript](http://www.typescriptlang.org/), [CoffeeScript](http://coffeescript.org/), and more.
 
<div class="img-panel">
	<img src="http://download-codeplex.sec.s-msft.com/Download?ProjectName=bundletransformer&DownloadId=387063&Build=20821" width="200" />
	<img src="http://nodejs.org/images/logo.png" width="200" />
	<img src="http://www.typescriptlang.org/content/images/logo_small.png" width="200" />
	<img src="http://lesscss.org/images/logo.png" width="200" />
	<img src="http://coffeescript.org/documentation/images/logo.png" width="200" />
	<img src="http://pivotal.github.io/jasmine/images/jasmine_logo.png" width="200" />
	<img src="http://www.jshint.com/res/jshint.png" width="200" />
	<img src="http://yuilibrary.com/img/yui-logo.png" width="200" />
	<img src="http://gruntjs.com/img/grunt-logo.png" width="200" />
</div>

Bundles is great for new sites that can run on .NET 4.5 servers but Markit On Demand also maintains hundreds of .NET 3.5 sites that cannot upgrade. In order to allow these older sites to make use of the latest tech, the Web Capabilities Team developed a proof of concept for integrating Grunt into the development workflow. [Grunt](http://gruntjs.com/) runs on top of [Node.js](http://nodejs.org/) and allows developers to pre-compile their CSS and JavaScript regardless which .NET framework is used. A handful of new projects at Markit On Demand are using this new workflow to pre-compile LESS and TypeScript.
 
The Web Capabilities Team continues to provide custom solutions to issues that don't yet have a community-wide standard. However, whenever possible, Markit On Demand looks to remove homebrewed solutions in favor of community supported standards.