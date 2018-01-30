# Intro To Web Development

### Day One

Topics:
  Overview
  HTML / Semantic HTML
  CSS
  CSS Layouts
  Basic Webpage
  Javascript Intro

> Students will gain an understanding of basic web development from a programming perspective; How to connect files to each other; How to structure a project

### Day Two

Topics:
  Javascript
  Building an animated webpage
  Web Hosting

> Students will learn how to include javascript into their applications; How to structure and build a small application; How an application is different from a webpage; What is web hosting & how to use it.

(1)

## Decoding the Alphabet Soup: What is HTML, CSS, Javascript?

An analogy:

HTML is like the skeleton, just bones for basic structure.
each html *tag* is like a different bone, or set of bones. they can be reused for their specific purpose, but if you try to put a body where the head goes...
[http://www.netanimations.net/Animated-gif-creepy-picture-moving.gif]
html provides structure for the webpage, and needs to be set up accordingly.


CSS is the skin of the webpage, this is what makes it look nice.
Healthy skin takes some work -- the range of products out there for it is astonishing. However you can also stick to basics.
healthy css is the same way. there are endless capabilities with css, but you can have good css without overwhelming yourself with possibilities.

Javascript is the muscles. it's what makes things move, think, act, and even talk to other webpages.
animations, making things happen or change and getting information from other websites is all done with javascript.

## Markup vs Programming

HTML, A markup language is a system for annotating a document in a way that is syntactically distinguishable from the text.
  -- we can tell that we are giving structure with `<body>` and `<h1>`, etc. versus providing content `the quick brown fox`
CSS, A style sheet language, or style language, is a computer language that expresses the presentation of structured documents.
  -- how we describe the details of the layout to the computer.
Javascript, A programming language is something that can be used to solve a problem/perform an alogrithm. 
  -- 2 + 2 = 4 - 1 = 3 quick mafs

## Intro to HTML

HyperText Markup Language

Because HTML is used for structuring the webpage, it's good to provide a good foundation for this structure. We do this by practicing *semantic html*, which is just using each tag for what it's supposed to be used for.
This is development, seo, and ux concern.
In development, it makes the code easier to understand.
Search engines look for properly used html when parsing results.
Screen readers utilize the tags for order and importance.

### HTML Tags

html tags are surrounded in angle brackets `<>`
there are two main types of tags, normal tags and self closing. 
`<html></html>` - normal tags hold content (including other tags)
`<img/>` - self closing exist in a location

#### Common Tags

> full list: https://www.w3schools.com/TAgs/default.asp

- `<!--...-->`             -- Defines a comment
- `<!DOCTYPE>`             -- Defines the document type
- `<a></a>`                -- Defines a hyperlink, a link TO another webpage
- `<body></body>`          -- Defines the document's body
- `<br/>`                  -- Defines a single line break
- `<button></button>`      -- Defines a clickable button
- `<cite></cite>`          -- Defines the title of a work
- `<code></code>`          -- Defines a piece of computer code
- `<div></div>`            -- Defines a section in a document
- `<em></em>`              -- Defines emphasized text
- `<form></form>`          -- Defines an HTML form for user input
- `<h1></h1> to <h6></h6>` -- Defines HTML headings
- `<head></head>`          -- Defines information about the document
- `<hr/>`                  -- Defines a thematic change in the content (horizontal rule)
- `<html></html>`          -- Defines the root of an HTML document
- `<img/>`                 -- Defines an image
- `<input/>`               -- Defines an input control
- `<link/>`                -- Defines an external resource used on the page FROM another source (usually stylesheets)
`<p></p>`                  -- Defines a paragraph
- `<script></script>`      -- Defines a client-side script (javascript file)
- `<select></select>`      -- Defines a drop-down list
- `<span></span>`          -- Defines a section in a document
- `<strong></strong>`      -- Defines important text
- `<style></style>`        -- Defines style information for a document
- `<table></table>`        -- Defines a table
  - `<thead></thead>`        -- Groups the header content in a table
    - `<th></th>`              -- Defines a header cell in a table
  - `<tbody></tbody>`        -- Groups the body content in a table
    - `<tr></tr>`              -- Defines a row in a table
      - `<td></td>`              -- Defines a cell in a table
  - `<tfoot></tfoot>`        -- Groups the footer content in a table
- `<ul></ul>`              -- Defines an unordered list
- `<ol></ol>`              -- Defines an ordered list
  - `<li></li>`              -- Defines a list item
- `<video></video>`        -- Defines a video or movie

## Intro to CSS

Cascading Style Sheets

Used for adding styles to a webpage.

"cascading" because styles written further down the page will overwrite those written above.

Too many to provide a short list, but easy to find what you need.

Examples of what is possible:

http://www.csszengarden.com/

all of these use the same html, with different css.

### Inline styles

not good to use in production code, makes it very difficult to change in the future.

```html
<div style="background-color:blue; height: 100px; width: 100px;"></div>
```

### On-Page Styles

okay for small pages / projects, but will quickly become hefty.

```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <style>
      div {
        background-color: blue;
        height: 100px;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <div></div>
  </body>
</html>
```

### External Stylesheet

Best practice, how these are organized is up to the developer.

style.css
```css
div {
  background-color: blue;
  height: 100px;
  width: 100px;
}
```

index.html
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" src="./style.css"/>
</head>
<body>
  <div></div>
</body>
</html>
```

## Building a Basic Webpage

> build the `basic.html` file step by step explaining each piece, it's purpose, etc.

## Building an About Page

> build the `about.html` file and explain.

## The Box Model

consists of 4 pieces:

Margin: negative space around the object

Border: edges of the object

Padding: negative space within the object

Content: Actual content, not including negative space

## CSS Layouts

> designing a layout

## CSS property Exploration

## Building a Portfolio Site

> end of day exercise

(day two)

## Responsive Design & Media Queries

## Adding Javascript

show / hide div example

### On-Page

Javascript in a style tag on the webpage

### External script

Take the previous script and move it to a .js file to show best practice.

## Creating an application

> build a todo app

## Hosting / Publishing

> Web hosting, what it's for, and how to use it

> deciding on a hosting service.

> FTP / SSH
