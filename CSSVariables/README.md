# CSS Custom Properties

---

- History of CSS
  - CSS 3 evolution
  - Flexbox
  - Grid
  - Quick Side Note
- CSS Variables
  - Define
  - Scope
  - Cascade
  - Benefits
- But, Preprocessor's already do that
  - Sass Variables
  - Media Queries
- Start using them today
  - Silly Effects
  - Light / Dark Themes
  - Admin / Dashboard Customization
- Resources

---

## History of CSS

Users demand a lot more from their experiences on the web. Shorter load times, more immersive interactions, better interactivity, consumable on any device, anywhere, any time. Fortunately, the languages of the web have been evolving to address these demands. CSS is no exception.

### CSS 3

With the ever growing fraction of screen size, aspect ratios, and device capabilities we can no longer use static units or layout content in "traditional" ways. CSS 3 brought us a plethora of new measurement units, ways to respond to screens and devices, and ability to calculate dynamic values. We got things like;

- `@media()`
- `calc()`
- Viewport width and height `vw` / `vh`
- Estimated measurements `em` / `rem`
- Various color and alpha functions `rgba()` / `hsla()` / `hsl()`
- Animations, Transitions / Key Frames
- and more... Here is a list of most of them [CSS 3 Properties](https://www.tutorialrepublic.com/css-reference/css3-properties.php)

### Flexbox

Flexbox is a great tool for creating flexible layouts that solved a lot of common issues as well as introduced new ways of solving hard problems. ( I'm talking about making aligned boxes have the same height. ) This also gives you different ways to order your visuals without having to change the source order of your HTML.

### CSS Grid

While flexbox gave us a lot of control, it only gave us control over one dimension at a time. Either the x or the y. CSS Grid comes along and gives the ability to control our layout on both axes at the same time.

### Side note

It's important to take a small detour and mention the numbering of CSS. There will be no CSS 4 or 5 or 6. Instead of doing big releases and adding a bunch of new items, CSS will instead be focused on the feature versioning. For example, CSS Grid is getting an update and that is known as CSS Grid 2. This numbering will be happening for all features in and coming to CSS. This allows the browsers to adopt updates quicker and help ease the burden of learning all the new changes.

## CSS Variables

Just like any other programming language a variable is used to store and update values. Historically, CSS is a static declarative language. Now, with CSS Variables the language is dynamic.

As sites and applications grow, large amounts of your CSS will have repeated code. For example, the same color might be used in different places, requiring global search and replace if that color needs to change. Same issue for font sizes, or global spacing, or anything that is a pattern.

Custom properties allow a value to be stored in one place, then referenced in multiple other places. An additional benefit is semantic identifiers. For example, `--main-text-color` is easier to understand than #00ff00, especially if this same color is also used in other contexts.

---

## Why use CSS Variables

In CSS, you have the necessity of utilizing the same values in multiple places. For example;

```CSS
.title {
    color: #f08a00;
}

.quote {
    color: #f08a00;
}
```

This can start to get hard to manage as the project grows. How many of you have ever had multiple variations of grays, or slightly different font sizes for title fonts on different pages, or different values for box shadows, the list goes on and on.

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

## Advantages and differences over a preprocessor

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

## Defining a variable

```CSS
:root {
    --color-primary: #f3220a;
}

body {
    color: var(--color-primary)
}
```

## Scope

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

## Benefits

### Media queries

```Scss
:root {
  --font-size-body-large: 1rem;
  --font-size-h1-large: 3rem;
  --font-size-h2-large: 1.5rem;

  --font-size-body-small: .8rem;
  --font-size-h1-small: 2rem;
  --font-size-h2-small: 1.2rem;
}

h1 {
  font-size: var(--font-size-h1-small);
}

h2 {
  font-size: var(--font-size-h2-sm);
}

body {
  font-size: var(--font-size-body-small);
}

@media (min-width: 800px) {
  h1 {
    font-size: var(--font-size-h1-large);
  }

  h2 {
    font-size: var(--font-size-h2-large);
  }

  body {
    font-size: var(--font-size-body-large);
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

## Resources

This technology is widely supported and has [CanIUse](https://caniuse.com/#search=css%20variables)

--- https://www.youtube.com/watch?v=U9UU_fgpmO8
--- https://scrimba.com/g/gcssvariables
