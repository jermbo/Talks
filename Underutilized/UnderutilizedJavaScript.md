# Underutilized JavaScript Features

JavaScript is moving at a very rapid pace. Forget all the frameworks, node packages, and methodologies. The language itself had a big update a couple years back and new changes are coming every year.

I would like to talk about a couple of JavaScript features that previously needed a tool or library for that are now shipped in the browser, as well as some older tools that I feel are not used enough.

- jQuery APIs
- LowDash APIs
- Template LIterals
- Console API

## jQuery APIs

jQuery has a special place in the JavaScript ecosystem and history. It was born out of necessity to help cure the chaotic landscape that was 2000 web browser wars. jQuery created a consistent and simple api for working with the DOM, AJAX requests, simple animations, and much more. As the years have gone on, browsers have gotten better about standards and the landscape looks a lot less scarry than it used to. There are a lot of features you might be surprised to know are a part of the browser that was influenced directly by jQuery.

### Selecting the DOM

One of the places jQuery shined the brightest is the DOM. Before jQuery, selecting an element was different from browser to browser. This forced developer to create browser specific conditions, fallback rules, and essentially wrote the same thing 4 times to get it to work in all browsers.

Another benefit of jQuery was the ability to select with CSS 3 selectors. Only relying on an id or single class name caused real issues.

```JavaScript
// Old way - most common
document.getElementById("myID");
document.getElementsByClassName("myClass");

// jQuery
$("#myID");
$("myClass");

// Updated
document.querySelector(".mySelector p");
document.querySelectorAll(".mySelector p");
```

The beauty of `querySelector` and `querySelectorAll` is any valid CSS selector can be passed. If you can select it with CSS, you can select it with JavaScript.

A couple of things to point out about these methods.

1. Even though `querySelector` was passed a class, it will only return the first item that was found. The return type will be dependant on what you are selecting. In the example above, we are selecting a paragraph, the return type is `HTMLParagraphElement`. If we were selecting a div, the return type would be `HTMLDivElement`.
2. `querySelectorAll` will always return a `NodeList`. A `NodeList` is an array like object that can be iterated over. One quark of this method is it accepts an id, and other single selectors, and will return you all the items that match. The old saying of id's can only be on per page is now a best practice and not a limitation.

### Working with Classes

The simple act of adding and removing classes was a pain before jQuery.
