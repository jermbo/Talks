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
- `:not()`
- `:empty`
- `:place-holder-shown`
- position sticky

## CSS Grids

We have been trying since the beginning of the web to get print style layouts on the web. Before CSS Grid we had to rely on float trickery, Flex Box magic, and other pure hacks to get something close to print. Now the line between web and print have never been more blurry.

CSS Grid is a true layout system on the web. It offers us a 2-dimensional control as well as powerful spacing abilities. You work with a Grid Layout by applying rules to both the parent ( which become Grid Container ) and the child ( which become Grid Items).

One thing to point out is, it's not Grid vs. Flex Box. It's Grid and Flex Box. These are complementary technologies, not competing ones.

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
[CanIUse Grid](https://caniuse.com/#search=grid) This is green across the board with the exception of Opera Mini and Blackberry. IE has a couple of quirks but it's usable.

**Resources**

- [CSS-Tricks Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS Grid by Wes Bos](https://cssgrid.io/)
- [Learn CSS Grid](https://learncssgrid.com/)
- [CSS Grid Generator](https://cssgrid-generator.netlify.com/)
