# Tweeter Project
###### version 1.0.0
---
###### A [Lighthouse Labs](https://www.lighthouselabs.ca/) project by [Brett Bilyk](https://github.com/bilykb)
###### <span style="color:red">**Beware:  This code was created while studying Web Development at Lighthouse Labs and is _not_ intended for use outside of a learning scenario. Use at your own risk.**</span>

---
## What is Tweeter?
---

Tweeter is a simple, single-page Twitter clone.

---
## Summary
---

This repository contains all the HTML, CSS, jQuery, AJAX and javascript code created over the course of the tweeter project while studying at [Lighthouse Labs](https://www.lighthouselabs.ca/). 

---
## Dependencies
---

| Libraries |  |
|--- | --- |
| node.js | Express |
| body-parser | chance |
| md5 | |

---
## Getting Started
---
1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

---
## Final Product
---

#### Main Page
<img width="1422" alt="tweeter" src="https://user-images.githubusercontent.com/18246168/134454807-dc3908d1-551c-4e25-a54d-d0cb6139c3cb.png">

#### Main Page with new tweet form
<img width="1424" alt="tweeter" src="https://user-images.githubusercontent.com/18246168/134454778-30631d3f-b351-4044-a1ad-ff4cb34c4d47.png">

---
## Table of Contents
---
| Functions | CSS Styles | HTML |
| --- | --- | --- |
| [renderTweets()](#render) | [header.css](#header) | [index.html](#index) |
| [fetchTweets()](#fetch) | [layout.css](#layout) | |
| [$(".write-new").on("click")](#write-new) | [nav.css](#nav) | |
| [$(window).scroll()](#scroll) | [new-tweet.css](#new-css) | |
| [$(".scroll-to-top").on("click")](#scroll-top-click) | [posted-tweet.css](#posted-tweet) | |
| [$(".new-tweet").submit()](#new-tweet) | |
| [$(".tweet-text").on("input")](#input) | |
| [escape()](#escape) | |
| [createTweetElement()](#create) | |
| [scrollToTop()](#scroll-top) | |


---
## Contents
---

### Functions

#### <a name="render">[renderTweets()](https://github.com/bilykb/tweeter/blob/master/public/scripts/apiTweet.js)</a>
> Function that prepends new tweets onto #tweet-container. Required by fetchTweets()

 
#### <a name="fetch">[fetchTweets()](https://github.com/bilykb/tweeter/blob/master/public/scripts/apiTweet.js)</a>
> jQuery function which toggles .new-tweet when .write-new is clicked


#### <a name="write-new">[$(".write-new").on("click")](https://github.com/bilykb/tweeter/blob/master/public/scripts/client.js)</a>
> jQuery function which toggles .new-tweet when .write-new is clicked



#### <a name="scroll">[$(window).scroll()](https://github.com/bilykb/tweeter/blob/master/public/scripts/client.js)</a>
 > jQuery function which watches for scroll events.  If .scrollTop() >= 100 .scrollToTop class is visible.  Else, hidden.


#### <a name="scroll-top-click">[$(".scroll-to-top").on("click")](https://github.com/bilykb/tweeter/blob/master/public/scripts/client.js)</a>
> jQuery function which watches for a click on .scroll-to-top button.  If clicked, scrollToTop() function fires


#### <a name="new-tweet">[$(".new-tweet").submit()](https://github.com/bilykb/tweeter/blob/master/public/scripts/client.js)</a>
> jQuery function which facilitates an AJAX post request to /tweets


#### <a name="input">[$(".tweet-text").on("input")](https://github.com/bilykb/tweeter/blob/master/public/scripts/composer-char-counter.js)</a>
> jQuery function that keeps track of the number of characters in .tweet-text, changes the color of counter text depending on num of remaining chars


#### <a name="escape">[escape()](https://github.com/bilykb/tweeter/blob/master/public/scripts/escape.js)</a>
> Function that prevents cross site scripting.  Used in htmlTemplates.js for createTweetElement() function


#### <a name="create">[createTweetElement()](https://github.com/bilykb/tweeter/blob/master/public/scripts/htmlTemplates.js)</a>
> Function that contains the html template for new tweets

 
#### <a name="scroll-top">[scrollToTop()](https://github.com/bilykb/tweeter/blob/master/public/scripts/scrollToTop.js)</a>
> Function used with .scrollToTop button which allows user to scroll to top of page


### CSS Styles

#### <a name="header">[header.css](https://github.com/bilykb/tweeter/blob/master/public/styles/header.css)</a>
> header CSS rules


#### <a name="layout">[layout.css](https://github.com/bilykb/tweeter/blob/master/public/styles/layout.css)</a>
> layout CSS rules


#### <a name="nav">[nav.css](https://github.com/bilykb/tweeter/blob/master/public/styles/nav.css)</a>
> nav CSS rules


#### <a name="new-css">[new-tweet.css](https://github.com/bilykb/tweeter/blob/master/public/styles/new-tweet.css)</a>
> new-tweet CSS rules


#### <a name="posted-tweet">[posted-tweet.css](https://github.com/bilykb/tweeter/blob/master/public/styles/posted-tweet.css)</a>
> posted-tweet CSS rules

### HTML

#### <a name="index">[index.html](https://github.com/bilykb/tweeter/blob/master/public/index.html)</a>
> index HTML file
