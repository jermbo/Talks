# Underutilized JavaScript Features

JavaScript is moving at a very rapid pace. Forget all the frameworks, node packages, and methodologies. The language itself had a big update a couple years back and new changes are coming every year.

I would like to talk about a couple of JavaScript features that previously needed a tool or library for that are now shipped in the browser, as well as some older tools that I feel are not used enough.

- jQuery APIs
- Console API
- LowDash APIs
- Template Literals
- I18n (Internationalization)

## jQuery APIs

jQuery has a special place in the JavaScript ecosystem and history. It was born out of necessity to help cure the chaotic landscape that was 2000 web browser wars. jQuery created a consistent and simple api for working with the DOM, AJAX requests, simple animations, and much more. As the years have gone on, browsers have gotten better about standards and the landscape looks a lot less scarry than it used to. There are a lot of features you might be surprised to know are a part of the browser that was influenced directly by jQuery.

[You Might Not Need jQuery](http://youmightnotneedjquery.com/) is a great site that lists out all the jQuery APIs and their vanilla JavaScript equivalent.

### Selecting the DOM

One of the places jQuery shined the brightest is the DOM. Before jQuery, selecting an element was different from browser to browser. This forced developer to create browser specific conditions, fallback rules, and essentially wrote the same thing 4 times to get it to work in all browsers.

Another benefit of jQuery was the ability to select with CSS 3 selectors. Only relying on an id or single class name caused real issues.

```JavaScript
// Old way - most common
document.getElementById("myID");
document.getElementsByClassName("myClass");

// jQuery
$("#myID");
$(".myClass");

// Vanilla JavaScript
document.querySelector(".mySelector p");
document.querySelectorAll(".mySelector p");
```

The beauty of `querySelector` and `querySelectorAll` is any valid CSS selector can be passed. If you can select it with CSS, you can select it with JavaScript.

A couple of things to point out about these methods.

1. Even though `querySelector` was passed a class, it will only return the first item that was found. The return type will be dependant on what you are selecting. In the example above, we are selecting a paragraph, the return type is `HTMLParagraphElement`. If we were selecting a div, the return type would be `HTMLDivElement`.
2. `querySelectorAll` will always return a `NodeList`. A `NodeList` is an array like object that can be iterated over. One quark of this method is it accepts an id, and other single selectors, and will return you all the items that match. The old saying of id's can only be on per page is now a best practice and not a limitation.
3. You don't always need to start from the document to find an element. If you have a cached variable that contains a DOM Element, then you can start a new query from there.

### Document isn't the only place you can query

```JavaScript
const parentEl = document.querySelector("#header");

// some other code

function findLIs() {
    const childEl = parentEl.querySelectorAll("li");
    // do something LIs
}
```

DOM selection and manipulation is expensive. It's generally best practice to cache as much DOM as possible and use the cache to do you look ups. If you have to traverse the whole DOM tree every time you needed something, and you knew the parent element isn't changing, why not start from there?

### Working with Classes

Working with classes was a big pain before jQuery. With `classList` on the `Element` object, there is nothing the browser cannot do fairly easily.

### Add / Remove / Toggle Class

```JavaScript
// jQuery
$(".myElement").addClass("hideMe");
$(".myElement").removeClass("hideMe");
$(".myElement").toggleClass("hideMe");

// Vanilla JavaScript
document.querySelector('.myElement').classList.add("hideMe");
document.querySelector('.myElement').classList.remove("hideMe");
document.querySelector('.myElement').classList.toggle("hideMe");
```

There are a few more worth checking out at [MDN ClassList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Methods) documentation.

## Console APIs

Even though there are very powerful tools for debugging, stepping through code, and seeing the call stack, I am still a big fan of a simple `console.log()`. In this section, I want to show you a couple of APIs you might not know about that will change the way you look at your console.

### console.dir()

Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects. [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)

I use this mostly for looking at what properties and methods I have when working with the DOM.

```JavaScript
const el = document.querySelector("#myElement");
console.log(el); // <p id="myElement">What up</p>
console.dir(el); // >p.myElement
```

### console.group() and console.groupEnd()

Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd(). [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Console/group)

When looping through data sets and needing see specific items together, it's helpful to group them by something more powerful than logging `-------`. This is where `group` and `groupEnd` come into play. ( A cool thing about this is you can give it a name to add to readability )

```JavaScript
const data = [{...}, {...}]

data.forEach((d, i) => {
    console.group(`data ${i}`);
    console.log(d.name);
    console.log(d.userId);
    console.groupEnd();
});
```

### console.table()

I left the best for last. I cannot tell you how awesome the ability to see structured data in a structure is. This does have its limits, but overall it's very powerful and helpful for getting a sense of how your arrays or objects look.

```JavaScript
const arr = ['javascript', 'rocks', 'so', 'hard'];

console.table(arr);

// ------ [ OutPut ] -----------
// | index     | values        |
// ----------------------------
// | 0         | 'javascript'  |
// ----------------------------
// | 1         | 'rocks'       |
// ----------------------------
// | 2         | 'so'          |
// ----------------------------
// | 3         | 'hard'        |
// ----------------------------
```

## LowDash APIs

Much like jQuery, Lodash was born out of necessity. simply put, working with data can be tricky. Lodash offers a simple api that makes difficult tasks easy and performant.

From Lodash's website, Lodash is :

> A modern JavaScript utility library delivering modularity, performance & extras.

With the advancements of ES6+, there are some things we can do that do not require a utiliity library like Lodash.

### Array methods

Map, reduce, filter are easily the three most common use cases of Lodash. This now exist on the `Array` prototype.

```JavaScript
// Lodash
_.map([1,2,3], n => n * 2); // [2, 4, 6]
_.reduce([1,2,3], (acc, item) => acc + item, 0); // 6
_.filter([1,2,3], n => n <= 2); // [1, 2]

// ES6 +
[1,2,3].map(n => n * 2); // [2, 4, 6]
[1,2,3].reduce((acc, item) => acc + item, 0); // 6
[1,2,3].filter(n => n <= 2); // [1, 2]
```

One cool thing about the `reduce` method is it can work on objects as well as arrays. Checkout my [CodePen](https://codepen.io/jermbo/pen/zPVdpE) for a working example.

```JavaScript
let finalObj = {};

const keys = 'name.first'.split('.'); // ['name', 'first']
const lastKey = keys.pop(); // 'first'
const lastObj = keys.reduce((obj, key) => {
    return obj[key] = obj[key] || {}
}, finalObj); // {name: {first: '' }}

lastObj[lastKey] = input.value; // {name: {first: 'jermbo' }}
```

### Destructuring

This was a difficult concept for me to get, until I got it. Now, I don't know how I lived without it. Essentially, destructuring allows you to get specific items out of an object or an array in a more concise way.

```JavaScript
// Old Way
function getUserFullName(user) {
    const first = user.first;
    const last = user.last;
    return `${first} ${last}`;
}

// ES6 +
function getUserFullName(user) {
    const {first, last} = user;
    return `${first} ${last}`;
}
```

### Spread

The spread operator allows you to duplicate an array or object into another array or object.

```JavaScript
// Problem
const names = ['Fry', 'Bender', 'Leela'];
const names2 = ['Professor', 'Hermies', 'Amy'];
const allNames = [names, names2];
// [['Fry', 'Bender', 'Leela'], ['Professor', 'Hermies', 'Amy']]

// Correct
const names = ['Fry', 'Bender', 'Leela'];
const names2 = ['Professor', 'Hermies', 'Amy'];
const allNames = [...names, ...names2];
// ['Fry', 'Bender', 'Leela', 'Professor', 'Hermies', 'Amy']
```

```JavaScript
function mainApp(userOpts) {
    const defaults = {
        isDebug: true,
        showResults: false,
        parentElem: ''
    };
    const options = {
        ...defaults,
        ...userOpts
    }
    // {
    //   isDebug: false,
    //   showResults: false,
    //   parentElem: '#parent',
    //   random: 3.141
    // }
}

mainApp({
    parentElem: '#parent',
    isDebug: false,
    random: 3.141
});
```

### Rest operator

Rest works in a similar way, but has more to do with the number of options a function or method takes. If you function takes in an unknown number of arguments, the `args` is there but it's not as powerful as the rest operator.

```JavaScript
function addNumbers(one, two, ...more) {
    return one + two + more.reduce((acc, m) => acc + m, 0);
}

console.log(addNumbers(1,2,3,4,5,6,7,8,9,10)); // 55
console.log(addNumbers(1,2)); // 3
```