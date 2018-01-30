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
  Bootstrap
  Javascript
  Building an animated webpage
  Web Hosting & Publishing

> Students will learn how to include javascript into their applications; How to structure and build a small application; How an application is different from a webpage; What is web hosting & how to use it.

Day 1
-----

# Introduction & Overview
[9:00 - 9:15]

# Decoding the Alphabet Soup: What is HTML, CSS, Javascript?
[9:15 - 9:45]

* analogy

* HTML, A markup language is a system for annotating a document in a way that is syntactically distinguishable from the text.
  -- we can tell that we are giving structure with `<body>` and `<h1>`, etc. versus providing content `the quick brown fox`
* CSS, A style sheet language, or style language, is a computer language that expresses the presentation of structured documents.
  -- how we describe the details of the layout to the computer.
* Javascript, A programming language is something that can be used to solve a problem/perform an alogrithm. 
  -- 2 + 2 = 4 - 1 = 3 quick mafs

# Intro to HTML
[9:45 - 10:00]

* HyperText Markup Language

* Semantic HTML

* UX Concerns

# HTML Tags & attributes
[10:00 - 10:30]

### Common Tags

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

# Break
[10:30 - 10:40]

# Intro to CSS
[10:40 - 11:10]

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

### The Box Model

consists of 4 pieces:

Margin: negative space around the object

Border: edges of the object

Padding: negative space within the object

Content: Actual content, not including negative space

# Building a Basic Webpage
[11:10 - 12:00]

# Lunch
[12:00 - 1:00]

# Building a full webpage
[1:00 - 2:00]

# Flexbox & Responsive Design
[2:00 - 2:15]

# Exercise: Playing with CSS
[2:15 - 3:00]

# Break
[3:00 - 3:15]

# Basic Javascript
[3:15 - 3:45]

# Putting It All Together
[3:45 - 4:15]

# Wrap up
[4:15 - 5:00]

Day Two - IN PROGRESS
--------

# Review
[9:00 - 9:30]

# Responsive Design & Media Queries
[9:30 - 10:00]

# Bootstrap Basics
[10:00 - 10:30]

# Bootstrap Layouts
[10:30 - 10:50]

# Bootstrap Responsiveness
[10:50 - 11:10]

# Bootstrap Utilities
[11:10 - 11:20]

# Bootstrap Components
[11:20 - 12:00]

## Hosting / Publishing

> Web hosting, what it's for, and how to use it

> deciding on a hosting service.

> FTP / SSH
