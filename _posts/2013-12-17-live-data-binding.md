---
layout: post
title: Live Data Binding with AngularJS, React and EmberJS
category: 
- front-end
tags: 
- front-end
- javascript
- live data
- angularjs
- react
- emberjs
author: Chris Montrois
excerpt: If Words With Friends can ping you seconds after an update occurs why can't your bank?
date: 2013-12-17
permalink: /articles/live-data-binding-with-angularjs-react-emberjs
published: true
---

### Live Data Binding with AngularJS, React and EmberJS

You should never have to reload a web page. Content should be pushed to you as it originates. If Words With Friends can ping you seconds after an update occurs why can't your bank? Live updates are the future of the web and the best way to enable them is through live-binding on the client-side.

Live-binding means your HTML automatically updates to reflect your data. Libraries like AngularJS, React, and EmberJS have made it incredibly easy to make any site dynamic. Consider this AngularJS template:

`<p>Current Price: {quote.price}</p>`

This should look familiar if you've worked other JavaScript templates (e.g., Handlebars, Mustache). If you haven't, just think of `quote.price` as a placeholder for the actual price. Normal libraries will render your template once, but AngularJS will re-render it as soon as `quote.price` changes its value. This process of automatically updating the DOM is called live-binding.

The mantra of live-binding is that you should never have to use JavaScript for mundane tasks. This includes toggling a CSS class, hiding an element, or injecting HTML. The fact is these libraries can do it better than you anyway. When you're not worried about the markup, you can focus on the important part of your application: the data.

Data-driven applications are easier to build, easier to maintain, and easier to reckon about. When you remove DOM manipulation, your client-side code becomes much simpler and more testable. Your template represents what the view should look like for any given state. This means you can change any combination of data points at any time without worrying.

Adding live data to an AngularJS site is trivially easy. Consider this example where the data for our page comes from an API:

```
// Make an HTTP GET request to our API
$http.get('/api/timely_quote', function(res) {
	// Bind the API response to our template scope 
	$scope.quote = res.data; 
});
```

As soon as `$scope.data` changes value, AngularJS will re-render our template based on the new data. What happens if we wrap the same call in a `setInterval`?

```
setInterval(function() {
	$http.get('/api/timely_quote', function(res) { 
		$scope.quote = res.data; 
	});
}, 5000);
```

With just two lines of code our page is automatically updating every five-seconds. That's the power of live-binding. The same concepts apply for WebSockets, long-polling, and intra-page user interaction.

Static pages are obsolete as soon as they're loaded. They're functionally equivalent to a printed copy. The future of the web is one of live, vibrant pages that tell the user what's happening before they ask. Stop building zombies and start working towards a more user friendly web.

Resources:

* React: [http://facebook.github.io/react](http://facebook.github.io/react)
* AngularJS: [http://angularjs.org](http://angularjs.org)
* EmberJS: [http://emberjs.com](http://emberjs.com)

