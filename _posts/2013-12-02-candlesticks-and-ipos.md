---
layout: post
title: IPOs and Candlesticks
categories: 
- data
- charting
tags: 
- Data Handling
- Charting
- IPOs
- Financial Education
author: Michael Repsher &amp; Jason Meshnick
excerpt: The Twitter IPO provided us a good opportunity to have a hard look at our pages and see what we did well and what we could do better. This led our teams to explore the pros and cons of different charting techniques, specifically around the lack of candlesticks on intraday charts.
date: 2013-12-02
permalink: /articles/candlesticks
published: false
---

The Twitter IPO provided us a good opportunity to have a hard look at our pages and see what we did well and what we could do better. There are generally lots of IPOs throughout the year so we have plenty of opportunities to make adjustments and test them out before the next huge IPO comes along. Being an IPO we don't have a lot of data to work with so we need to make sure what shows is perfect. On the IPO date the main data will be centered on quotes, charts and news -- quotes and news typically work great, but charts always seem to have a lot of variation. Our study of charts around this event led the groups to a great discussion of using Candlesticks versus Mountains or Lines on charts, especially when part of the story you're trying to tell an investor is about the opening price of a security.

Key data points we know:

IPO Priced @ $26.00<br />
Opened @ $45.10<br />
Started trading @ 10:50am ET

And a typical chart at about mid-day on IPO day:

<img src="{{site.url}}/images/articles/candlestick_ipo/st.png" class="img-responsive img-thumbnail" alt="Typical Chart" />
<br />

This chart nailed it &mdash; it shows that Twitter was priced at $26 by displaying it as the previous day's close thus you see the big jump to $45.10 at the open. Plus the stock started trading after market open and that is clearly shown on this chart. This was perfect.

Now, a chart that didn't handle it so well:

<img src="{{site.url}}/images/articles/candlestick_ipo/goog.png" class="img-responsive img-thumbnail" alt="Not great Chart" />
<br />

This chart doesn't show the $26 open price, and the opening 'dialtone' on the chart misleads around when trading actually started.

In fact, showing the open price proved to be the hardest part of anyone in the world showing a good IPO day chart -- weird spikes, or overly flat charts that didn't show what had truly happened.  This led to a discussion mountain and candlestick charts.


###Let's start with a quick lesson in charting stocks:

Data Frequency and OHLC Data: Few charts show every trade. Instead, data is rolled up periodically, incorporating the opening price of that period, the closing price, the high, and the low. Taken together, this data is often called OHLC. The most popular frequency is daily data, where each data point plotted on the chart is based off the day's open, close, high, and low.

Other frequencies might be intra-day, weekly, monthly, etc. One frequency of intraday data is on 1-minute roll-ups. This takes the OHLC data from each 1-minute period throughout the day and plots it on the chart.

For our examples today, we'll be looking at a one-day chart of TWTR using 1-minute data frequency.

Still with me?

###Mountain Chart:

A mountain chart is the same as a line chart, except the area below the line is shaded in. Fancy.

####So, to build our mountain chart of TWTR, what data do we need?

That's right. We need an entire day's worth of 1-minute frequency OHLC data.

Since the market opens at 9:30 ET and closes at 4pm ET, that's 391 minutes of data.

Okay. Now, take your OHLC data and toss out the O,H, and L data. That's right, mountain charts only use closing data. But that shouldn't be a big deal. Should it?

Here's a mountain chart of TWTR's trading activity on its first day of trading in the secondary market (the NYSE). Note that the stock did not start trading until 10:49. That's because this was a &lsquo;hot IPO&rsquo; (that's a real term) and the NYSE needed to conduct an auction in order to find the opening price that would satisfy the greatest number of participants.


chart


Remember, this chart is made using the closing prices from each one-minute block of time. So, the first point on this chart is based off the closing price of the period between 10:49:00 and 10:49:59.

* Looking at the chart, what price did TWTR start trading on the NYSE at?
* Now, use any tool available to you and answer the same question.
The correct answer is $45.10. Did you have trouble answering that one using the mountain chart?

###Candlestick chart:

Candlesticks were invented by Japanese rice traders hundreds of years ago and are used most often by active traders and technical analysts because they provide significantly more information in a compact format than a line chart.

But, they require some up front education and some people think they look a lot like Christmas.



chart

The red and green boxes are the candlesticks and each one represents the OHLC data for that 1-minute period. They're hard to see on this particular chart. Ideally, a chart should have about 50-150 periods for the best combination of readability and granularity.

The picture below is a good representation of how a candlestick incorporates a full day's price activity. On the left, is a chart showing every single trade that occurred during the minute (a tick chart). The first trade for this period was above the prior minute's close. The stock initially moved higher before declining below the open to the point labeled &lsquo;1-minute low&rsquo;. The stock then rallied to the &lsquo;1-minute high&rsquo; and finally ended this period just below the high.

<img src="{{site.url}}/images/articles/candlestick_ipo/candlestick-explainer.png" class="img-responsive img-thumbnail" alt="Candlestick" />

On the right, we see the same data represented by a single candle. This is the data on the left, but rolled up into OHLC data. The open and closing prices are bounded by the thick box. The range of the minute is represented by the thinner lines, called shadows. The box is unfilled because the close was above the open and the entire candle is green because the closing price is above the prior closing price.

Here are the general rules for candlestick construction:

<img src="{{site.url}}/images/articles/candlestick_ipo/candlestick-red-and-green-bodies.png" class="img-responsive img-thumbnail" alt="Candlestick Diagram" />

Red or Green signify whether the current candle's close higher or lower than the prior candle's close.

The &lsquo;wick&rsquo; or &lsquo;shadows&rsquo; show the range between the high and low prices.

Open vs. Close is highlighted via the body.

* If the body is filled in, the close was below the open.
* If the body is empty, the close was above the open.

Therefore, candlestick charts provide 6 different pieces of information in a quick view:

* OHLC data (that's 4)
* Opening Price vs. Closing Price
	* A close above the open is bullish
	* A close below the open is bearish
* Trend &mdash; The green and red show the closing price trend vs. the prior close

####Now, back to TWTR.

When we looked at the mountain chart, we tried to figure out where the stock opened. Let's do the same thing with the candlestick chart (you'll have to scroll back to see it).

* Approximately what price did TWTR open for trading at?

Answer: Since the candle is unfilled, that means that TWTR's opening price is at the bottom of the box and the closing price is at the top of the box. The opening price was 45.10. The closing price was 45.97. The high was 48.15 and the low was 44.99.

###Should Candlestick charts become the new standard?

Candlestick charts are better. However, if you don't care about granularity and are looking at the overall trend of the data, then a mountain chart is fine. This is the case with most of the charts on our stock and market summary pages. Same with an ultra-long-term chart, like a 20-year price chart. Last, some data series, like economic data, don't have OHLC.

Both chart types have their place.

###To summarize:

* Charts are made using data that is periodically rolled up (except for tick charts).
* The rolled up data includes an opening price for the period, high price, low price, and closing price. Together, this is called OHLC.
* Mountain charts only use the closing price (which made finding the opening trade in TWTR difficult)
* Candlestick charts use OHLC data (and effectively showed the opening price of TWTR)
* Candlestick charts are a compact way of seeing 6 different facets of the data.
* Where you need granularity, Candlestick charts are the way to go. For a high level view of the trend, a mountain chart is adequate.






