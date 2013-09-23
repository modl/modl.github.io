---
layout: post
title: Code Month
category: Code
category: Data Visualization
author: 
---

Here at Markit on Demand we work with large, complex data sets almost every day. When designing with data we use the same process for designing a logo or a website. Initial stages begin with research—that is, learning where the data comes from, what it represents, and what it means to the end user. Sketching and wire framing come next and produce the concepts to accurately present the data. There comes a time, however, when photoshop, illustrator, or any other design program stop being useful. Generally, it's because there is no good way to input hundreds or even thousands of data points into a design program. You need to see the real thing. That's why our design team created Code Month, an exercise in code prototyping. To help foster our coding abilities, a select group of us take roughly a month to research a data set and develop a real visualization to represent that data. It's meant to be an exercise in rapid prototyping to quickly develop visualization solutions for our clients. These are a few examples from our first two code months so far.  

### Official Development Assistance Visualization

[![Michaels's Project](media/2012/july/michael.jpg)](media/2012/july/michael.html)

###### **Designer**: Michael Kelly
###### **Coding Experience**: Intermediate
###### **Data Source**: [The World Bank](http://data.worldbank.org/data-catalog/world-development-indicators)
I took on this project in order to learn the [D3.js](http://d3js.org) library. D3 is designed to connect data to SVG objects in a modern browser. It uses just HTML, CSS, and JavaScript which was appealing because it meant I could also work on my web front-end coding skills at the same time. The dataset I chose is interesting, not just for the content, but because it's multi-dimensional. It shows how much money each country gave to each other country every year going back to 1960. You can't really just show that with a simple line chart. I started by learning how to process data from a CSV in D3, and showing that data in a simple bar chart. Then I added a slider and learned how to animate the bars from year to year. Finally, I created a bubble chart and added sorting to the animation so it would be easy to see over time which countries were giving the most money, and which regions were receiving the most. Next, I'd like to add an informational panel that would let you highlight a particular country/region pair and see the history of donations between the two. I'd also like to incorporate the gross national income of each region to show how large the donation was relative to the economy of the region.

[View the Project](media/2012/july/michael)

### Data Visualization of Fruit & Sugar Consumption for the past 10 Years.

[![Kara's Project](media/2012/july/kara.jpg)](media/2012/july/kara.html)

###### **Designer**: Kara Larsen
###### **Coding Experience**: Beginner (Processing)
###### **Data Source**: [Data.gov](https://explore.data.gov/Agriculture/Fruit-and-Tree-Nuts-Yearbook-Data-tables/r6wy-597z), [USDA](http://www.ers.usda.gov/data-products/food-consumption-and-nutrient-intakes.aspx)
I was able to take an excel file of fruit data from data.gov, (Dept of Agriculture) site and reference the data to create a chart and label the fruit & sugar by color in a 'mountain chart'. After taking the workshop with [Jer Thorp](http://blprnt.com/), I learned some tricks that would make this easier to implement using any set of data from an excel file into a chart format. [Processing](http://processing.org) has some great features, it would be great to also implement user interaction when mousing over this chart.

[View the Project](media/2012/july/kara)

### GDP Historical Growth

[![Phil's Project](media/2012/july/phil.jpg)](media/2012/july/phil.html)

###### **Designer**: Phillip Rau
###### **Coding Experience**: Beginner/Intermediate
###### **Data Source**: [The World Bank](http://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG)
The project goal was to show GDP growth for a number of countries over a 40 year period. I created an interactive webpage that uses a special kind of visualization called a 'horizon chart' that graphs the data in a way that is easy to understand and view trends. I learned how to use D3 and javascript in the process and it was a really great experience, thanks to some knowledgeable co-workers. Eventually I would like to allow people to choose which countries to graph and in what order, and to make sure it degrades gracefully for non-modern browser.

[View the Project](media/2012/july/phil)

### Historical Fires

[![Andrew's Project](media/2012/july/andrew.jpg)](media/2012/july/andrew.html)

###### **Designer**: Andrew Alger
###### **Coding Experience**: Beginner
###### **Data Source**: [National Interagency Fire Center](https://www.nifc.blm.gov/fire_reporting/annual_dataset_archive/index.html)
Four agencies handle almost all of wildfires in the United States. Those four agencies also have an amazing amount of data for each fire and the data goes back at least 50 years. This is an amazing data set to dig into. I started the project by plotting the fires from one agency into a bar chart. This was my first time using D3 and I learned quite a bit. I would still consider myself to be a novice but I am a little more comfortable with the code D3 uses. I would love to spend more time plotting the vast amount of data to see what relationships we could uncover. The data set is so rich that we could compare any number of variables to see what relationships exist. Some that could be interesting are number of responders vs. structures threatened. This could give us an interesting look into how fires are fought and what types of fires get the most attention. We could also look at the cost of each fire vs. the acres burned. Different parts of our country have different fire seasons so it would be interesting to see the breakdown of new fires to time of year. We are at an interesting point in time where the amount of data is growing and our understanding of the impacts of how we fight fires is also growing. This will be a great data set to explore in the next few years.

[View the Project](media/2012/july/andrew)

### Data Plotter

[![Ali's Project](media/2012/july/ali/ali1.png)](media/2012/july/ali/ali1.png)
[![Ali's Project](media/2012/july/ali/ali1.png)](media/2012/july/ali/ali2.png)
[![Ali's Project](media/2012/july/ali/ali1.png)](media/2012/july/ali/ali3.png)

###### **Designer**: Ali Khawaja
###### **Coding Experience**: Intermediate
###### **Data Source**: User Input
My goal was to develop a tool that could be used repeatedly to analyze any given dataset. This led to creating a barebones utility that takes a table of data (from an Excel file) and lets you graphically compare its columns with a scatter plot. The script creates buttons out of each column header, and lets us plot the corresponding column on the x- or y-axis, or as a label that appears when hovering over the coordinate.

This lets us quickly compare various data points to determine trends and stories hidden in large datasets that don't express much as a table of numbers. The screenshots above reveal interesting trends from a table of 13 columns and 1000 rows!