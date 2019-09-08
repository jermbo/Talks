# Underutilized CSS Features

Haven't we been on CSS3 for a while now? When is CSS4 coming? CSS hasn't gotten any major updates in a while.

Yes, CSS3 has been around for a while. I would bet there are a lot of things still to discover from the [spec](https://www.w3.org/Style/CSS/specs.en.html). CSS3 brought us a lot of goodness that you might be surprised to find out has been there for a while. 

No, we are not getting a CSS4. [Rachel Andrew](https://rachelandrew.co.uk/archives/2016/09/13/why-there-is-no-css4-explaining-css-levels/) goes into detail about the history of the CSS numbering system, and provides an explanation as to why we will not see a v4 of CSS. TL;DR, Numbering things is hard. Moving forward individual features are getting versioned to help promote browser adoption. For example, selectors level 4 is being finalized and starting to ship.

Things are constantly being added to CSS. Two of my most anticipated features have recently dropped, Grid and Variable Fonts!

In this talk I would like to discuss some features, both old and new, that do not get utilized enough. ( In my opinion and experience. )

The items I am going to cover are:

- `border-box: box-sizing;`
- specificity
- calc()
- Flexbox
- CSS Grids
- Custom Properties
- `:focus-within`
- `:not()`
- `:empty`
- position sticky

> These are opinions based on what I have seen doing code reviews, being involved in open source projects, and some things I should be utilizing more.

## Box Sizing

The Box Model is a combination of width, height, padding, margin, and border. The real issue being the padding. If I create a box that is 100 by 100 with a padding of 10, what is my overall box size? 120 x 120. No está bueno.

```CSS
*, *:after, *:before {
  box-sizing: border-box;
}
```

**Browser Support**
[CanIUse](https://caniuse.com/#search=box-sizing) Green across the board.

**Resources**

- [CSS-Tricks](https://css-tricks.com/box-sizing/)
- [CSS-Tricks](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [Paul Irish](https://www.paulirish.com/2012/box-sizing-border-box-ftw/)

## Specificity

In a nutshell, specificity is how the browsers determine the importance, relevance, and "seniority" of a CSS style. Understanding this is key to a clean code base. 

In order from weakest to strongest the browser breaks down the rules like so;
1. Type Selectors and Pseudo-Elements
   1. `div` | `h1` | `a`
   2. `::before` | `::after`
2. Class selectors, attribute selectors, and pseudo-classes
   1. `.card` | `.nav` | `.profile_img`
   2. `[type="text"]` | `[href*="https"]`
   3. `:hover` | `:focus`
3. ID selectors
   1. `#footer` | `#main-content`
4. Inline styles
   1. `<p style="color: red">text</p>`
5. !important
   1. Pronounced "Band Important"

**Resources**

- [Specificity Calculator](https://specificity.keegan.st/)
- [Alligator IO](https://alligator.io/css/understanding-specificity-in-css/)

## Calc

**Browser Support**
[CanIUse](https://caniuse.com/#search=calc) Green across the board, except for Opera mini and some bugs in IE.

**Resources**

## Flexbox

**Browser Support**
[CanIUse](https://caniuse.com/#search=flexbox%20layout) Green across the board, some issues to be aware of in IE.

**Resources**

## CSS Grids

We have been trying since the beginning of the web to get print style layouts on the web. Before CSS Grid we had to rely on float trickery, Flexbox magic, and other pure hacks to get something close to print. Now the line between web and print have never been more blurry.

CSS Grid is a true layout system on the web. It offers us a 2-dimensional control as well as powerful spacing abilities. You work with a Grid Layout by applying rules to both the parent ( which become Grid Container ) and the child ( which become Grid Items).

One thing to point out is, it's not Grid vs. Flexbox. It's Grid and Flexbox. These are complementary technologies, not competing ones.

Check out my [CSS Grid Test](https://codepen.io/jermbo/pen/KZZjmB) over on my CodePen.

```HTML
<div class="container">
  <header>Header</header>
  <nav>Menu</nav>
  <main>Content</main>
  <footer>Footer</footer>
</div>
```

```CSS
html,
body {
  background-color: #ffeead;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background: goldenrod;
}

.container {
  padding: 1.1rem;
  width: calc(100vw - 2.2rem);
  height: calc(100vh - 2.2rem);
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
  grid-column-gap: 1.1rem;
  grid-row-gap: 1.1rem;
}
.container > * {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  color: #F1F0EA;
}
.container header {
  background-color: #474448;
  grid-area: 1 / 3 / 3 / 13;
}
.container nav {
  grid-area: 1 / 1 / 11 / 3;
  background-color: #534b52;
}
.container main {
  grid-area: 3 / 3 / 11 / 13;
  background-color: #f1f0ea;
  color: #2d232e;
}
.container footer {
  grid-area: 11 / 1 / 13 / 13;
  background-color: #534B52;
}
```

**Browser Support**
[CanIUse](https://caniuse.com/#search=grid) This is green across the board with the exception of Opera Mini and Blackberry. IE has a couple of quirks but it's usable.

**Resources**

- [CSS-Tricks Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Grid by Wes Bos](https://cssgrid.io/)
- [Learn CSS Grid](https://learncssgrid.com/)
- [CSS Grid Generator](https://cssgrid-generator.netlify.com/)

## Custom Properties

## Focus Within

Simply put, `:focus-within` is a CSS pseudo-class that represents itself if matched by the `:focus` pseudo-class or has a descendant that is matched by a `:focus`.

A lot of articles have mentioned this in relation to a form and its inputs. When the input of a form is in focus the form is in focus and you can style against that to make it obvious to the user.

I watched a video a while back that gave another example. [Even More CSS Secrets by Lea Verou](https://youtu.be/vs34f9FiHps?t=1449) A keyboard accessible fly out menu. I have recreated her example in my [Nav Focus Within](https://codepen.io/jermbo/pen/aboEBBG) CodePen, to demonstrate her point.

```HTML
<nav>
  <ul>
    <li>
      <a href="#">Project</a>
      <ul>
        <li><a href="#">Project 1</a></li>
        <li><a href="#">Project 2</a></li>
        <li><a href="#">Project 3</a></li>
      </ul>
    </li>
    <li>
      <a href="#">Blog</a>
      <ul>
        <li><a href="#">Blog 1</a></li>
        <li><a href="#">Blog 2</a></li>
        <li><a href="#">Blog 3</a></li>
      </ul>
    </li>
    <li>
      <a href="#">About</a>
      <ul>
        <li><a href="#">About 1</a></li>
        <li><a href="#">About 2</a></li>
        <li><a href="#">About 3</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

```CSS
// -----------------------------------------------------
// Old way: Does not address any accessability concerns.
// -----------------------------------------------------
nav li ul {
  display: none;
}

nav li:hover ul {
  display: initial;
}

a:focus {
  background: black;
  color: white;
}

// -----------------------------------------------------
// Old way: Kind of addresses accessability concerns, but not really.
// -----------------------------------------------------
nav li ul {
  display: none;
}
nav li:hover ul,
a:hover + ul{
  display: initial;
}

a:focus {
  background: black;
  color: white;
}

// -----------------------------------------------------
// New Way - Addresses all accessability concerns
// -----------------------------------------------------
nav li ul {
  display: none;
}

nav li:hover ul,
li:focus-within ul {
  display: initial;
}

a:focus {
  background: black;
  color: white;
}
```

**Browser Support**
[CanIUse](https://caniuse.com/#search=focus-within)

**Resources**

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)
- [CSS-Tricks](https://css-tricks.com/almanac/selectors/f/focus-within/)

## Not

**Browser Support**
[CanIUse](https://caniuse.com/#search=%3Anot%20css3) Green across the board.

**Resources**

- [Codrops](https://tympanus.net/codrops/css_reference/not/)
- [CSS-Tricks](https://css-tricks.com/almanac/selectors/n/not/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)

## Empty

**Browser Support**
[CanIUse](https://caniuse.com/#search=%3Aempty) Green across the board.

**Resources**

- [CodePen](https://codepen.io/ricardozea/pen/rxqqaM/)
- [CSS-Tricks](https://css-tricks.com/almanac/selectors/e/empty/)
- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)

## Position Sticky

https://codepen.io/jermbo/pen/JgpxZR

**Browser Support**
[CanIUse](https://caniuse.com/#search=sticky) It's got decent support. There are a couple of gotchas with `thead` and `tr`. And needs vendor prefixes most of the time.

**Resources**

- [CSS-Tricks](https://css-tricks.com/position-sticky-2/)
- [Alligator IO](https://alligator.io/css/position-sticky/)
