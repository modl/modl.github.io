---
layout: post
title: Speech Recognition and NLP &mdash; Making a Siri / Watson for Personalized Finance
categories: 
- speech recognition
- nlp
- automated research
tags: 
- Siri
- Watson 
- SmartText&trade;
- Kensho
- Wit.ai
- webkitSpeechRecognition
- chrome.tts()
author: Tim Burcham
twitter_handle: tim_burcham
excerpt: We combined several different technologies and existing capabilities to make a voice-driven, human-friendly financial answer engine.
date: 2015-01-10
permalink: /articles/speech-recognition-and-nlp
published: true
---

Early in 2014, we got our hands on a Google Glass &mdash; and, like many, struggled with its awkwardness as a wearable device, it's tiny postage stamp screen size, and more.  We pushed on with it, though, making a small notification-based app that would deliver a small stock summary to the Glass.

It was while creating this that we stumbled on a great lateral feature of the Glass: Text-to-Speech (TTS). While struggling to view the tiny projected text, we found that there was a 'Read Aloud' option that performed as advertised, and a pleasant, non-robotic voice would read the stock update aloud to you.

This got us thinking about other uses for Text-to-Speech in a separate project we were working on, and we started researching Chrome support for TTS.  Soon, we had a working demo using our SmartText&trade; capability, to deliver spoken stock updates in the browser, making use of the operating system's native accessibility support and TTS voices.

While we were researching Chrome support for TTS, however, we discovered that Google had included native Speech Recognition support as well &mdash; and when thinking this through, we had an 'of course!' moment, given the microphone icons that show up in the Google search box these days.

And that is where things got interesting.

If we connected Speech Recognition to our symbol cross-reference (XRef) and SmartText&trade; engine, and hooked that up to Text-to-Speech, we would have a small system that could take simple questions about stocks, and respond with accurate, human-friendly answers.  However, there was one last challenge: the hard part of Speech Recognition is less about recognizing the voice and converting to text (though it's technically difficult, it's abstracted as a simple API call courtesy of Google now); the hard part is taking that text, and finding meaning in it, so that you know what someone's talking about.  That space is referred to as Natural Language Processing, or NLP, and while we had done some work in NLP in the past, we weren't looking forward to writing the code to manage NLP tokens and look for keywords.

Which is when we stumbled on [Wit.ai](http://wit.ai), which provides NLP-as-a-service.  We could train Wit.ai to understand our intents, like 'Tell me about', or 'Search for', and it would return JSON-formatted intent and subject &mdash; and we suddenly knew what investors were asking questions about.  Wit.ai's superb APIs made NLP a small evening project to connect the last pieces to our 'Siri for Finance', and we powered it up:

```
Video
```

Obviously, investors don't have plans to speak to their workstations, tablets or phones to get financial information (even developing and testing this got fun and confused looks in the office). However, we were able to identify some alternate applications for this technology:

- Car/Commute: Using only the TTS capability, a ppersonalized market update, or preparation for an advisor's client meetings could be delivered to your phone, to be consumed in a hands-occupied environment like the car or train.
- Personalized Podcast: Apps like [Umano](https://umano.me/) allow a user to construct a personalized, spoken podcast.  Interspersed in that podcast could be a personalized portfolio update, taking the traditional radio update of the big three indexes, and making it relevant to the individual investor.
- In a financial advisor/client context, either in person, or remotely, the full solution could be used as an assistant, pulling up relevant financial information on a screen:
    - "Let's take a look at Facebook's ad revenues", and a chart of FB's revenues displays
    - "We should review your asset allocation, and see if you have been meeting the goals we set out", and a current and target asset allocation report displays



