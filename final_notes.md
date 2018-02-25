# Final notes

I hope everyone was able to get something out of the class and that it may help you in your future ventures.
Here is a summary of the topics covered highlighting the important material.

## HTML / CSS / JS

* HTML - Bones; Structure; Foundation; Holds Content;
* CSS - Skin/Makeup; Styles; (some) Animation;
* JS - Muscles/Brain; Makes things happen; Manipulate Content;

All of these together can be used to create webpages. Using them from scratch can be laborous, but can be added to easily.

#### Resources:

<a href="http://html-css-js.com/"> Nice </a>

CheatSheets:

<a href="http://htmlcheatsheet.com/">HTML</a>
<a href="http://htmlcheatsheet.com/css">CSS</a>
<a href="http://htmlcheatsheet.com/js">JS</a>

HTML:

<a href="https://www.w3schools.com/html/"> W3 Schools </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML"> Mozilla </a>

CSS:

<a href="https://www.w3schools.com/css/"> W3 Schools </a>
<a href="https://css-tricks.com/"> CSS Tricks </a>
<a href="https://codepen.io"> CodePen </a>
<a href="https://csszengarden.com"> CSS Zen Garden </a>

JS:

<a href="https://www.javascript.com/resources"> Javascript.com </a>
<a href="https://github.com/micromata/awesome-javascript-learning"> Extensive learning list </a>

& don't forget your friendly neighborhood Google!


## Bootstrap / jQuery

<a href="https://getbootstrap.com">Bootstrap HomePage </a>

Codecademy has a course on Bootstrap, most of it is learn-by-using

Bootstrap is a popular CSS Framework used to make stylish and "modern" webpages.
Bootstrap is used to reduce the time spent working on gritty CSS details. Things like nicer fonts, grid-based layouts, and some basic functionality are provided by default.
Bootstrap is just pre-written CSS (by Twitter) with a reputation for being easy to use and highly effective.
Benefits of using Bootstrap include but are not limited to:
* Less time writing CSS
* More time focusing on layout and design
* Standardization for teams
* Reliability
* Open Source (As stable as you can get\*)
* Employers like it

Use a CDN for Bootstrap when possible to reduce the load on the server you're using. Otherwise make sure to download all of the files needed and link them into your website.

<small> * many open source projects have a reputation to be unstable and buggy, hard to use, etc., <br/> Bootstrap also has its difficulties.</small>

<a href="https://jquery.com">jQuery HomePage </a>

jQuery is also on codecademy, but is also learn-by-use

jQuery is a Javascript library used to reduce time writing Javascript.
jQuery is just pre-written Javascript and is a completely open source project.
jQuery effectivly reduces how much code we have to write & also provides a standardization.
Many other libraries (both Javascript and CSS) rely on jQuery.

Example - Adding a Click Listener to Alert the user:

```javascript
// Plain Old Javascript
document.getElementById('myId').addEventListener('click', function(event) {
  alert('Clicked');
});
// jQuery
$('#myId').click(function(event) {
  alert('Clicked');
});
```

Benefits of using jQuery include but are not limited to:

* Less time writing Javascript
* More time actually making things happen
* Standardization for teams (although this can still go haywire quickly)
* Employers like it
* Less time writing HTML
* Code generation (your javascript can write your html for you\*\*)
* Great for small applications

Warnings:

* Probably not a good idea for large applications.

<small>\*\* Example: You're displaying a list of items. in HTML, this could take at least as many lines as number of items. 
<br/>
Using jQuery to generate it would only take writing it once. 

```javascript
var items = ['one', 'two', 'three'];

for (item in items) {
  $('#list').append('<li>' + item + '</li>');
}
```
</small>

We also want to use a CDN with jQuery, again when possible. 

## Project Structure

When setting up our project, it's good to have standard structure. How we set up our folders is important.

```
My_Super_Cool_Website
  ┕→ css/
  |   ┕→ style1.css
  |   ┕→ style2.css
  |   ┕→ style3.css
  ┕→ javascript/
  |   ┕→ script1.css
  |   ┕→ script2.css
  |   ┕→ script3.css
  ┕→ index.html⊙
  ┕→ vendor/△
  |   ┕→ bootstrap/
  |   |   ┕→ (bootstrap files)
  |   ┕→ jQuery/
  |   |   ┕→ (jQuery files)
  ┕→ other_page.html
  ┕→ about.html
  ┕→ journal.html
    
⊙ This is required to be at this location with this name
△ This is optional and mostly only if you'll be distributing your project
  ┕→ you'll also see this in templates
```

## Hosting

For personal projects, small businesses and other small websites "Shared Hosting" is the way to go.
This can be difficult however, because when we try to search for it, the same companies come up.
Spend some time researching prospective companies before signing up. Also look for trial periods, if you don't like the service you can always cancel it.

Some things to watch out for:

* Companies owned by conglomerates like EIG
* Companies with the word "host" in their name (they are usually the most full)
* Most popular companies if you can help it. There are a lot of solid options out there that provide the same if not better service.

here is an extensive list of <a href="https://www.reviewhell.com/blog/endurance-international-group-eig-hosting/"> EIG Horror Stories </a>

Some things to look for:

* Where they are located (in relation to your user base)
* How modern their stack is
* Good Customer Reviews, of course.

One suggestion is VeeroTech. I haven't used them personally for any amount of time, but they appear to be very good on paper.
I found them while searching for how to find companies on 
<a href="https://www.reddit.com/r/webhosting/comments/5z6a78/shared_hosting_providers_good_bad_and_ugly/">this reddit post</a> 
which has a lot of other really good information about how to find a good hosting service.

Do your research and find a hosting site that's reliable and has good customer service. Don't feed The Man by giving into the companies forcing their way
to the top... of your search results.

## Final Thoughts

There are plenty of resources online to learn more about all of this. Please contact me with any questions or concerns.

<pre>
                 /--------┒/¯¯¯¯¯¯¯¯¯\                                         
       ┍--------/         /\  ┍---┒   |                               
      /                   |  \|   |   |     
(ツ)₀                     |   (¯⊚¯)   |
Ϛ㈢/                      ¯¯¯¯¯\¯/ ¯¯¯¯
 ハ                             ▓                             
                                ▓
</pre>
