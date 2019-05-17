# CSS Custom Properties | What, How, and why

---

- Brief History of CSS
  - CSS Evolution
  - Flexbox
  - Grid
  - Quick Side Note
- CSS Custom Properties
  - Syntax
  - Scope and Cascade
- But, Preprocessor's though
  - Advantages
  - Sass Variables
  - Media Queries
- Start using them today
  - Silly Effects
  - Light / Dark Themes
  - Admin / Dashboard Customization
- Resources

---

## Brief History of CSS

Users demand a lot more from their experiences on the web. Shorter load times, more immersive interactions, better interactivity, consumable on any device, anywhere, any time. Fortunately, the languages of the web have been evolving to address these demands. CSS is no exception.

### CSS Evolution

With the ever growing fraction of screen size, aspect ratios, and device capabilities we can no longer use static units or layout content in "traditional" ways. CSS 3 has brought us a plethora of new measurement units, ways to respond to screens and devices, and ability to calculate dynamic values. We got things like;

- `@media()`
- `calc()`
- Viewport width and height `vw` / `vh`
- Estimated measurements `em` / `rem`
- Various color and alpha functions `rgba()` / `hsla()` / `hsl()`
- Animations, Transitions / Key Frames
- and more... Here is a list of most of them [CSS 3 Properties](https://www.tutorialrepublic.com/css-reference/css3-properties.php)

### Flexbox

Flexbox is a great tool for creating flexible layouts that solved a lot of common issues as well as introduced new ways of solving hard problems. ( I'm talking about making aligned boxes have the same height. ) This also gives you different ways to order your visuals without having to change the source order of your HTML. [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### CSS Grid

While flexbox gave us a lot of control, it only gave us control over one dimension at a time. Either the x or the y. CSS Grid comes along and gives the ability to control our layout on both axes at the same time. [A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

### Side note

It's important to take a small detour and mention the numbering of CSS. There will be no CSS 4 or 5 or 6. Instead of doing big releases and adding a bunch of new items, CSS will instead be focused on the feature versioning. For example, CSS Grid is getting an update and that is known as CSS Grid 2. This numbering will be happening for all features is CSS from now on. This allows the browsers to adopt updates quicker and help ease the burden of learning all the new changes.
[CSS Wiki](https://en.wikipedia.org/wiki/Cascading_Style_Sheets#CSS_4) | [Why there is no CSS4](https://rachelandrew.co.uk/archives/2016/09/13/why-there-is-no-css4-explaining-css-levels/)

## CSS Custom Properties

Historically, CSS is a static declarative language. Now, with Custom properties the language is dynamic. Just like any other programming language a variable is used to store and update values.

Custom properties allow a value to be stored in one place, then referenced in multiple other places. An additional benefit is semantic identifiers. For example, `--main-text-color` is easier to understand than #12da4a, especially if this same color is also used in other contexts.

### Syntax

In CSS, you have the necessity of utilizing the same values in multiple places. For example;

```CSS
.title {
    color: #f08a00;
}

.quote {
    color: #f08a00;
}
```

Over time as your project grows, keeping track of all the colors and its variations can be difficult. How many of you have ever had multiple variations of grays, or slightly different font sizes for title fonts on different pages, or different values for box shadows, the list goes on and on.

We can utilize variables to help manage that mess. Let's look at the previous example, but with a variable declared.

```CSS
:root {
    --orange: #f08a00;
}

.title {
    color: var(--orange);
}

.quote {
    color: var(--orange);
}
```

### Scope and Cascade

Being these are valid CSS properties, the scoping and cascade work as they do with any other property.

```CSS
:root {
    --color-primary: #f3220a;
}

body {
    color: var(--color-primary)
}

.box {
    --color-bg: #f0af0a;
    background: var(--color-bg);
}
```

## But, Preprocessors though

We've had these features in Preprocessors for a while now, why should I care?

### Advantages

In the past we have used a preprocessor like Sass, Less, or Stylus to have variable functionality. But, those are compiled to a single static value and don't offer any flexibility after compilation.

So, what are some advantages?

1. No Compiling. This works directly in the browser.
2. Has access to the DOM.
   1. Change with JavaScript
   2. Responsiveness benefits with media queries
3. Ability to access with JavaScript
   1. Great for personalization
   2. Useful for themes

### Differences

Aside from the syntax, the preprocessors ultimately output a file with the variables converted to their values. With CSS Variables, these values are maintained and changeable live in the browser.

```CSS
/* Sass */
$color-primary: #f3220a;

body {
  background: $color-primary;
}
```

```CSS
/* Less */
@color-primary: #f3220a;

body {
  background: @color-primary;
}
```

Both result in this output.

```CSS
body {
  background: #f3220a;
}
```

---

```CSS
:root {
    --color-primary: #f3220a;
}

body {
    color: var(--color-primary)
}

.box {
    --color-bg: #f0af0a;
    background: var(--color-bg);
}
```

## Examples

Let's see some examples already!

### Media queries

```Scss
$font-size-body-large: 1rem;
$font-size-h1-large: 3rem;
$font-size-h2-large: 1.5rem;

$font-size-body-small: .8rem;
$font-size-h1-small: 2rem;
$font-size-h2-small: 1.2rem;

h1 {
  font-size: $font-size-h1-small;
}

h2 {
  font-size: $font-size-h2-sm;
}

body {
  font-size: $font-size-body-small;
}

@media (min-width: 800px) {
  h1 {
    font-size: $font-size-h1-large;
  }

  h2 {
    font-size: $font-size-h2-large;
  }

  body {
    font-size: $font-size-body-large;
  }
}
```

```CSS
:root {
  --fs-b: .8rem;
  --fs-h1: 2rem;
  --fs-h2: 1.2rem;
}

@media(min-width: 800px) {
  :root {
    --fs-b: 1rem;
    --fs-h1: 3rem;
    --fs-h2: 1.5rem;
  }
}

h1 {
  font-size: var(--fs-h1);
}

h2 {
  font-size: var(--fs-h2);
}

h3 {
  font-size: var(--fs-h3);
}
```

### Alert System

```HTML
<div class="alerts">
  <div class="alert -info">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laudantium?</p>
  </div><!-- -info -->

  <div class="alert -success">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laudantium?</p>
  </div><!-- -success -->

  <div class="alert -error">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laudantium?</p>
  </div><!-- -error -->

  <div class="alert -warning">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, laudantium?</p>
  </div><!-- -warning -->
</div>
```

```CSS
.alerts {
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.alert {
  --theme: #eee;
  --darkTheme: #aaa;
  background: var(--theme);
  color: var(--darkTheme);
  padding: 1.15rem;
  border: 2px solid var(--darkTheme);
}
.alert.-info {
  --theme: #58A4B0;
  --darkTheme: #2B5056;
}
.alert.-success {
  --theme: #1FAF6A;
  --darkTheme: #004926;
}
.alert.-error {
  --theme: #B23A48;
  --darkTheme: #5E1F26;
}
.alert.-warning {
  --theme: #DDC508;
  --darkTheme: #706304;
}
```

[CSS Variables - Alert System Test](https://codepen.io/jermbo/pen/PvmmpO)

Please read the original article on CSS Tricks, as that goes into more detail about the differences between Sass Loops and CSS Custom Properties. [CSS Tricks](https://css-tricks.com/do-css-custom-properties-beat-sass-loops/)

### CodePen Examples

- [Using CSS Vars for Themes](https://codepen.io/emoreno911/pen/gxwGwN)
- [Update CSS Variables with JS](https://codepen.io/wesbos/pen/adQjoY)
- [Stripe like menu - CSS Vars & VueJS](https://codepen.io/nkCreation/pen/oqopjY)
- [Vars in CSS & Filters](https://codepen.io/Volosnikov/pen/NjrxWq)

## Resources

This technology is widely supported [CanIUse](https://caniuse.com/#search=css%20variables)

- [The Strategy Guide to CSS Custom Properties](https://www.youtube.com/watch?v=U9UU_fgpmO8)
- [Learn CSS Variables for free - Scrimba](https://scrimba.com/g/gcssvariables)
- [CSS Custom Properties Sample](https://googlechrome.github.io/samples/css-custom-properties/index.html)
- [Custom Props - MicroSoft example](https://developer.microsoft.com/en-us/microsoft-edge/testdrive/demos/custom-props/)
