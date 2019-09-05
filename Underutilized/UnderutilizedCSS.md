# Underutilized CSS Features

Haven't we been on CSS3 for a while now? When is CSS4 coming? CSS hasn't gotten any major updates in a while.

Yes, CSS3 has been around for a while. I bet there are a lot of things still to discover from that spec.

No, we are not getting a CSS4. [Rachel Andrew](https://rachelandrew.co.uk/archives/2016/09/13/why-there-is-no-css4-explaining-css-levels/) goes into detail about the history of the CSS numbering system, and provides an explanation as to why we will not see a v4 of CSS. TL;DR, Numbering things is hard. Moving forward individual features are getting versioned to help promote browser adoption. For example, selectors level 4 is being finalized and starting to ship.

Things are constantly being added to CSS. Two of my most anticipated features have recently dropped, Grid and Variable Fonts!

In this talk I would like to discuss so features, both old and new, that do not get utilized enough. ( In my opinion and experience. )

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

## Box Sizing

**Broswer Support**
[CanIUse]()

**Resources**

## Specificity

**Broswer Support**
[CanIUse]()

**Resources**

## Calc

**Broswer Support**
[CanIUse]()

**Resources**

## Flexbox

**Broswer Support**
[CanIUse]()

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

**Broswer Support**
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

**Broswer Support**
[CanIUse](https://caniuse.com/#search=focus-within)

**Resources**

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)
- [CSS-Tricks](https://css-tricks.com/almanac/selectors/f/focus-within/)

## Not

**Broswer Support**
[CanIUse]()

**Resources**

## Empty

**Broswer Support**
[CanIUse]()

**Resources**

## Position Sticky

**Broswer Support**
[CanIUse]()

**Resources**
