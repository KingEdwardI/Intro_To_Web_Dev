# Setup

I'll need two screens, one for the lecture notes and one for the presentation.

# Introduction

(stand up and get classes attention)

Hello everyone, {{ comment on the weather or something }}.

I'm Eddie Vetter-Drake, Full-Stack Developer and total geek.
I started my development career right here at codecraft, I graduated top of my class in the Summer cohort of 2016. I had some background in programming prior to the class, so what this provided was all the missing pieces to turn me into a full fledged developer. Since the class I've worked on various projects for startups and individuals. From informational websites to full stack applications, and so far always on small teams. I've recently accepted a full-time job at Vertafore as a Front-End Developer building their user interfaces. However I'm here today because I was also a teaching assistant here, some time after graduating. I discovered a love and affinity for teaching, so let's dive in.

(probably have whiteboard available to continue)

# Overview

This two day class is going to cover a very high level view of web development, from a programming perspective. 
Day one is going to cover html, css, how to setup a project, building a basic webpage, and finally an inro duction to javascript.
Day two will build upon where we left off on day one, bring in more javascript, jquery, some animations, and finally "how to host this website", and we'll wrap up with a final q&a period at the end of the day

[] Whiteboard: 

|---------------------------------------|
| Day One           | Day Two           |
|---------------------------------------|
| * HTML            | * JS              |
| * CSS             | * JS with JQuery  |
| * Project Setup   | * Animations      |
| * Basic Webpage   | * Hosting         |
| * JS Intro        | * q & a           |
| * HW: Text Editor |                   |
|---------------------------------------|

Okay I like to start with an analogy to give a description of the languages. Compare web development to basic human anatomy. HTML would be the skeleton, providing structure to our application or document. It also holds all of the content in place.
CSS would be like the skin / appearance of the application, this is what makes it look how it does, gives boring 'ol documents some pizazz
Finally, Javascript is the muscles. it makes things move, change, and just happen in general. Keep in mind that the brain is a muscle, so to a point, javascript can also think for our application, from functionality to tracking. 

(on the whiteboard & out loud) HTML - HyperText Markup Language

You may have heard this before, but let's break it down a little bit.

HTML is a "markup language", which is a computer language that is used for annotating a document in a way that is syntactically distinguishable from the content text.
There are other markup languages, a common one being Markdown, which is useful for documentation and I'm even using it for the outline of this lecture.
Basically, it's a way that we can give structure to text, while being able to easily determine what is structure and what is content.
It's easy for us to tell that an html tag is not part of the content, and the computer can use this to display it in a structured format.

(query class) Any questions on what html is used for?

CSS - Cascading Style Sheets

This will likely be what you spend most of your time using and learing as UX developers.

CSS is a "style sheet language", which is a computer language used to express the presentation of a structured document.
It's generally pretty easy for us to describe how we want a page or layout to look. We can say things like "I want the image to be at the center of the page, cover it's container, and hove some text in the top left corner", however we need to be able to describe this to the computer. This is what CSS provides for us.

"Cascading", does anyone have any idea why this might be part of the language?
(query the class and see if anyone knows this)

"Cascading", in this case means that the code written further down the document will overwrite code written closer to the top.

We'll see what this looks like soon, but take note of it now.

Finally Javascript, which is a "programming language", which is specifically a computer language that can be used to solve a problem or perform an algorithm. two plus two is four minus one thats three, quick mafs. Whereas HTML/CSS is used for displaying content, Javascript can be used to manipulate that content.

Alright, that was a good bit, Any questions on _what_ each of our languages do and are used for?

# HTML

HTML provides the structure for our document or application, the way that we provide this structure do our project is by practicing _Semantic Html_. Semantic Html is a practice which basically just states to use tags for what they are meant to be used for. This is a concern for developers for a many reasons, some that I find most important: for the developer working on the project, it makes the code easier to understand; Search engines look for properly used html tags when parsing their results; Screen readers use the tags when parsing for order and importance; The list goes on.

So let's dive into how tags work.

HTML tags are surrounded by angle brackets `<>`
there are two main types of tags normal and self closing, some examples look like this:

`<html></html>` - normal tags hold content (including other tags)
`<img/>` - self closing exist in a location

I'm going to send out a list of common and most used html tags, with a descrption of what they are for. I pull these from the link that is on the page. It's a compiled list of the ones that I use most commonly.

(provide list of common and most used html tags)

So let's look at a quick example of some tags, how they are put together, and what they turn into when displayed in the browser.

here is the first page that was ever published on the internet, and is a perfect example of what html was originally used for: displaying information and linking to more information. 

http://info.cern.ch/hypertext/WWW/TheProject.html

(open up the `first.html` page, display on projector)
(check and see what browser everyone is using)

So we can open this up, right click on the page, and hit "inspect". This opens up the web inspector provided by our web browser. Depending on what you are working on, you can put it in different places, I like it on the right.

This has all sorts of nice features that help with development, which could be a class in itself, so I'll just be using the basics for this class.

For now I'll just open up the different tags and go over them quickly at the projector.

(check zoom levels)

So first (point out), we've got the opening html tag, this is used to hold all of the content of our html document. Then we have a `<head></head>` tag, which in their case is empty. However standards have changed, and it looks like theyve got the information that would usually go there in this header tag inside the body. The body tag is used to hold all of the contents of our webpage. The header is holding the Title, which gets displayed on our tab. The `<nextid>` is obsolete at this point.
From here, we get to the displayed content of the webpage, here is a header tag, and we can see that by using this tag, the text on the page is larger and bold. After that, the practice was to put quotes around content text, we don't do this anymore. 
On it's own line in the inspector, but inline when displayed, we have an `<a></a>` tag, which links to a definition of hypermedia. The tag gives the text a blue color and underlines the word. We also see that this has what is called an attribute, in this case an `href` which is used to link out to other pages or other places on this page.
Now here is a `<p></p>` tag, which is a paragraph block, and according to our reference sheet it defines a paragraph. It also contains some hyperlinks 
Further down the page, we have a data list, which isn't very commonly used anymore, but it's used as a container for the listed content.

This isn't an example of a page that you would normally see or build, but it uses the tags semantically to provide the information in a structured manner, that's what we want to focus on while writing html. HTML has evolved since then, but the ideas behind how to structure it are still very similar.

# Building a Basic Webpage

So now we've got all the tools we need to build a small website, it won't do very much, but it can look nice. 
I'll be using a modified version of the CSS Zen Garden example, they have a bunch of pretty nicely styled pages all using the same html. 
(step through css zen garden website shortly)
Whenever we start a new project it's best to create a folder to put everything relevant to the project in, and create a little project ecosystem within the folder.
(create new-project folder)
For sake of time i'll just be copying snippets of code over and explaining them as I go. 

(step through demo/index.html)

Now, take about 5 or 10 minutes to look through the rest of this document & i'll be wandering around to answer any questions you might have about them.

It can be a good idea to run our html through an online validator. By using this we can ensure that our html isn't bugged. Some of these are stricter than others, and we can sometimes configure them. It's a good idea to read through the warnings because they give us hints of things that could be improved. However we should always pay attention to any errors, these could point out large bugs that we have in our code
 
# CSS

While that page performs it's intended purpose in providing information, it's not what we see anymore, and won't be what we build. We want to be able to add some color, or even a different font to our webpage.

There are a few ways to use css with our html, inline, on-page, and external.

The quickest way that we can see CSS appear on our page is by putting it directly on the element.

(show example of changing background color)

However, when dealing with much larger projects, it becomes very hard to make a small update. It becomes hard to read, but more than anything many styles are repeated, so this isn't the best way to do things.

Next we can write styles directly on the page, providing them for all selected elements on the page.

(show example of how to create a style tag)

while HTML uses on tags to structure the information, css relys on selectors to determine what element on the page should be styled. We can use tags as selectors, and provide styles to all elements that are that tag.

CSS also has two other ways to select elements: Classes and Ids.
Class selectors are used for selecting multiple elements, we place classes on any tag by giving it a `class` attribute. We can give this any name that easily identifies the element or what the style does. i.e. `class="hidden"` or `class="line-items"`

Id selectors are used to select a single element and style only that one. Ids are assigned using the `id` attribute.
ex. `id="header-image"`

Now this is great for small projects, but what if you have multiple pages? That's when we want to use external stylesheets. We do this by creating a new file, giving it a `.css` extension and then bringing it into the html file that we want to use it in by using a `<link/>` tag. 
The syntax is exactly the same as within the style tag, so we can simply copy this style into our new file, link it in and then see that nothing has changed.

(lunch)

Now that we have a better idea of how to use html, let's apply some basic CSS to the page to see how these work together in practice.

When getting started with CSS, the most important part is what you all already learned in the UX class. My designs won't be the most complex, but anything that you can imagine is possible by using HTML5 & CSS3. I'll start with a pretty simple design, and this is a common way to think about css design strategy. By utilizing a straightforward strategy of rows and columns, we can make a pretty nice looking webpage without too much effort. let's look at how this works.

To be able to style anything, we have to have an idea of what our content looks like. In this case, we'll be using the content provided to us. In practical cases of designing webpages, you'll probably start with basic designs that will be modified to the clients needs.

I'm sure you all have learned many useful tools to build your designs, I still mostly stick to pen and paper to make my designs and then worry about the specifics once I'm coding. however I'm not a designer, so you'll probably spend much more of your time working on designs than coding them.

(draw up layout on whiteboard)

Now this might not look like much, but we'll watch it evolve into something pretty nice. Let's break it down a bit. We've got four content wrapping divs (not including the page wrapper itself). These are centered on the page with 15% margin on either side to make it centered. The color of the body will be a shade of blue, and the content on top of it a darker color. here, we can see how it creates a row / column display, this is a common way that css frameworks are usually built. 

(step through styling the webpage, only using the basics. focus on explaining various useful css selectors, attributes, how they work specifically)

When we get back, we'll be going through some better practices with css, and how to make it more extensible.

(lunch)

# Building a full webpage

Hopefully that was all able to sink in over the break, now we'll get into how to make this css more reusable and responsive to other screen sizes.

We'll be starting a new project folder for this, and this time we'll be building a blog page, which will be used for todays project and when we continue on day two.
Start with html with classes/ids, begin adding in styled classes / ids.

When creating our own CSS layouts, a common way to go about it is by utilizing 3 main layout pieces: containers, rows, and columns.

Containers are meant to be used as top level elements, generally giving some basic styles or themes.

Rows go horizontally across the page and are meant to hold columns.

Columns run vertically based on various styling efforts.

In the blog final example, there are 3 rows. The 2nd of these rows has two columns.
These columns have a split ratio of about 75% for the main content and 25% for the remaining.
The final row has a different background color and is separate from the rest of the page.
w3's original example is utilizing a built out css framework. We'll get into frameworks on day two, but for now we'll be applying many of the ideas that fromeworks do as far as their ideas in structure.

instead of creating a whole layout, we'll only create what we need while making it somewhat responsive with the help of flexbox.

( step through adding styles to demo two, showing what each style does, and how they work together. ) 

# Flexbox & Responsive design

TODO

# Exercise: Playing with the CSS

(students instructed to mess with the CSS, see what they can figure out on their own. 45mins)

# Adding in javascript

basic javascript to change around css, make things appear, reappear, count? 

TODO: Details

# Javascript with JQuery?

Q&A
