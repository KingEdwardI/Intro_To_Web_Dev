# Intro To Web Development - Day 2

## Overview

* Review of HTML/CSS
* Bootstrap
* Javascript
* JQuery
* Building a full webpage w/ Bootstrap & JQuery
* Publishing / Hosting

## Review

* HTML tags
* including CSS files
* CSS selectors

CSS -> Bootstrap

## Bootstrap basics

### What is Bootstrap?

Bootstrap is a "CSS Framework", now what does that mean? Basically, a CSS Framework is a prebuilt set of selectors, classes, ids, etc. all with css that can be useful for everything from layout to animation. For an extensive list of what's available check out "cssdb.co", a sortable list of the available CSS frameworks.

Bootstrap is known to be the most stable of these frameworks, and was built by Twitter. Using multiple CSS frameworks is possible, but you should be careful because they could conflict in weird ways that will be very hard to figure out.

Everything is pre-built, we need to bring it in and then attach the classes provided to us from the documentation. Much of using Bootstrap includes searching through the documentation to find what you want to accomplish.

We can modify these selectors the same way we edit our normal css. By writing our own css, we overwrite what Bootstrap has set up for us. This is because of the cascading nature of css. By loading our css after Bootstrap, we overwrite what they have implemented.

### How to use Bootstrap?

To use Bootstrap, we have to bring it into our application, just like we would a normal CSS file. Now there's a couple ways that we can do this, so I'll explain the reasoning behind the different setups.

The easiest way to bring Bootstrap into our application is by utilizing a CDN (Content Delivery Network). This is just a way that other resources can be provided to our application. By utilizing a CDN, we put the work of hosting those files on a different server.

Now, that is the way that I suggest you do it, it's most common in production. However, you may see projects set up that have all of the Bootstrap files included. You'll usually see this on sample projects or templates. This is simply to ensure that the code that they are using is available with the project provided for ease of debugging.

Once we have Bootstrap included in our application, we can immediately see it in use. It changes the font most noticeably, and also changes a bunch of other defaults. We can then utilize the rest of the functionality that it provides by applying classes to elements that they are for. This allows us to create beautiful applications with a lot less effort and less custom code.

Example - Adding Bootstrap & Dependencies

## Bootstrap

I won't step through every single feature that Bootstrap provides, but I've put together a list that merit a note.

### Layouts

(https://getbootstrap.com/docs/4.0/layout/overview/)

First off is the CSS Layouts, now this is sort of a big topic that I'll go more in depth once we get to the example. From a high level, Bootstrap provides us with a predefined layout system. This layout system relys on a 12 column grid system. The general rule is to structure the HTML like this:

```
"container" -> "row" -> "col" (column)
```

We'll see how that works in the code soon.

### Responsiveness w/ Bootstrap

(https://getbootstrap.com/docs/4.0/utilities/display/)
(https://getbootstrap.com/docs/4.0/utilities/visibility/)

Following the layouts, what about when the screen size changes? When viewing on a phone or a tablet as compared to a computer. I wasn't able to get into it very much on the first day, but luckily Bootstrap solves this for us quite easily. By utilizing the Display utility, we can easily tell the browser to hide and show elements at various screen sizes.

### Responsiveness Cont.

(https://getbootstrap.com/docs/4.0/utilities/position/)
(https://getbootstrap.com/docs/4.0/utilities/sizing/)
(https://getbootstrap.com/docs/4.0/utilities/spacing/)

Now What if we just need to nudge a div to the left or right, or position it in a certain way? There's a few utilities that we can use to move things around, adjust the spacing, or position them differently.

### Components

Now there is a long list of available components for Bootstrap, all of which can be used with ease. These components can do everything from change a style to animate an image gallery and more. Things like the Carousel, Modal, Navs, Scrollspy, Badges, and Alerts can all give a website a lot more pizzazz.

Exercise - Bootstrap Component Exploration - 20 mins

### Templates

Luckily for us, Bootstrap is incredibly popular and entirely open source. This creates a great environment for people to share the source code of websites they have created. There are a few good websites that provide Bootstrap templates that we can download and use. As tempting as this is, be warned -- these templates will generally contain a large amount of extra code that can be difficult to dig through. This "extra" code, with quotes because the code fully serves a purpose, but for many of our purposes is not fully required. I've been able to code full responsive (basic) websites using mostly just the provided classes & very little custom code. When we download these templates, they come with all of the files that are required for that webpage to run anywhere as-is, with or without internet.

Example - Template Download & Folder Structure

This will likely become your preferred method of creating webpages, find one that is similar to your needs and modify the pieces that you need to create your website.

However, this is not what I'm here to teach you today. What we'll be doing is taking one of these templates and building it from "scratch" with the help of Bootstrap.

# Javascript Intro

* Where to write (similar to css)
* Keywords:
    - function
    - variable
    - operator
    - event / listener
* Basics
* Nah, jQuery, Less Typing
* With Bootstrap

# Custom Javascript / JQuery

We remember at the beginning when we brought Bootstrap into our application, we also had to bring in some other dependencies. One of those was conveniently jQuery, a javascript library. A javascript library is much like a CSS Framework because it is just a bunch of pre-written code, provided to us for various purposes. jQuery accomplishes a similar task as Bootstrap -- we don't have to type as much code. By including jQuery it becomes immediately avalable to us throughout our webpage. You may have noticed while going through the Bootstrap documentation that many of the Components had some javascript code for them. This is because we can manipulate the Components through the javascript.

( Example - Custom JS )

# Exercise: Building Your Portfolio

# Web hosting - shared hosting

Now that we have our wonderful website, how do we get it onto the internet for our friends, family, employers, etc to see? Through Hosting. Hosting is simply a service that we pay for so we don't have to use our own resources to put our site online. (We totally could, but it would be difficult & unreliable).

So the next step is deciding which hosting company we want to use to deploy our website. This is a bit tricky. You know how everyone always complains about their web hosting service and how slow it is and how bad the customer service is and this and that. My favorite of those is when they say that it seems like there's one person (if any) working at the hosting company. Well, that's my favorite because it's mostly true. There's a long story behind this, which I urge you to look up on your own, but basically a large conglomerate company that owns many of the popular hosting companies, buys them & fires most of the staff. I'll leave you to look up the horror stories.
(https://en.wikipedia.org/wiki/Endurance_International_Group)

ProTip #1: Avoid any hosting company owned by EIG
ProTip #2: Do research on any prospective hosting companies, checking for who owns them, where they are located, and of course user reviews.

The company I've come to like so far based on their stellar reviews, amazing prices, and potential for growth, is VeeroTech. I haven't used them much, I usually use DigitalOcean but that's much more technical. Most everything that they provide is standard and enough for you to host a simple application very easily. There are a lot of steps, but they are relatively easy to follow.

It took me about 10 minutes to spin up an instance and get a website online. Even with having done this before, it was an extremely painless experience. Their interface is great as far as I'm concerned. Let's look at how it works.

(If you want to follow along, make an account, etc let me know & I can wait while you get things set up)

After signing up and confirming email address, we are prompted to create an instance and brought through some steps to do so. After the instance is created, we are brought to a dashboard. From this dashboard, we can get to our newly created instance by clicking on it under "Your Active Products/Services", which brings us to another dashboard.

A couple things to note here:
* We can get back to the home menu by clicking on "Portal Home"
* On the left side of the screen there is a menu that will bring us to various other dashboards, which we will get to soon.
* We can see the "Package / Domain" section contains our nameserver information. This will be important for connecting our domain name to this instance
* "Usage Statistics" will be useful about a month from now.
* The "Quick Shortcuts" menu will be where you spend most of your time. There's a lot going on here, but I'm going to focus on the "File Manager"
* Right after I point out what I think is a super cool feature of quick-creating an email account.

Okay so when we get to the File Manager, we see a bunch of directories, and some of you may already be familiar with this setup from other hosting sites. If not, we simply navigate into the "www/" folder by double clicking. This is where your project goes. Just click the upload button at the top, and either drag & drop (super awesome) or navigate and select your files. be sure to take the files *within* the folder, not the folder itself.

Boom-Tada there's your website online. but how do we get to it? Because we're on a shared server, we can't just type in an IP, we will actually have to attach a domain name to the instance.

To do this, first we need a domain name. I have two suggestions for where to get one:

* name.com
* iwantmyname.com

both of these are hassle-free & very easy to use. I personally use name, but they gave me a t-shirt so I'm biased.

After getting your domain name, you'll have to attach the nameservers of your instance to the domain that you have bought. This will then do all the magic needed to access your website.

Finally there is the issue of HTTPS. This is becoming a requirement now, partially because of how easy it is has become. To install https, we just go to the cPanel of VeeroTech, scroll down to the Security well, and select the "LetsEncrypt SSL", step through the settings and viola, now we're secure and trusted.

#### When Do I Need a Dedicated IP Address?
(https://www.whoishostingthis.com/blog/2013/08/26/do-i-need-a-dedicated-ip-address/)

As far as hosting goes, you’ll encounter as many as four major reasons why a dedicated IP will either be helpful or necessary to the success of your site.

You need to maintain a secure site via SSL certificate.
Your site is high traffic and needs dedicated resources to maintain performance.
You need to access your website via file transfer protocol (FTP) on a regular basis
You need to view your website via IP address

# Final Thoughts / Q & A
