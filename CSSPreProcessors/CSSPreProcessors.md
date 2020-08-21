# CSS and the PreProcessors

Historically, writing CSS was a pain. Building a system of any size or complexity, you would have CSS files that were hundreds or thousands of lines long. This made things hard to find, the potential for duplication and specificity clashes were higher, and working with a team meant overwrites and merge conflicts were a part of daily life. That doesn't even start to touch our pain with vendor prefixes.

CSS PreProcessors came to save the day. In a nutshell, they augmented your authoring experience, but came with a couple of initial drawbacks. For the first time, front end needed to have a build pipeline. Some early versions of PreProcessors took away semi-colons and curly brackets and were tab dependant. This was a difficult pill to swallow, especially without proper editor support. The introduction of partials and variables made us think a little differently about our CSS. Lastly, adding logic to your styles seemed weird. At first, not many people understood what these were for nor how these should even be used properly.

With the advancements of CSS over the years, there has been a lot of debate over the necessity of PreProcessors, things like Sass, Less, and Stylus. While the new features are amazing and should be utilized, I will demonstrate the top 5 features that make CSS PreProcessors a vital tool in your arsenal. At the end I will tie everything together and show a practical example on how to get the benefits of Modern CSS while utilizing a PreProcessor.

> Quick note; I will be using Sass for the examples, but the principles I will be demonstrating will apply to any PreProcess.

## The Top 5 PreProcessor Features

After some consideration, these are the top 5 features I cannot live without. The order listed represents their importance and how much I utilize them on any given project. 

1. Partials
2. Nesting
3. Maps
4. Loops
5. Functions

## Partials

Partials are the feature I use and love most. By a long shot. 

If you are working on a team, the chance of collision on a single CSS file is inevitable. Why deal with it? Separate into smaller, meaningful files and the chance of collision drops to almost zero. 

Mental overhead. Have you ever tried sifting through a CSS document that is hundreds, if not thousands, of lines long? It's a nightmare. Grouping things together keeps the file sizes smaller and easier to reason about.

Developer experience gains a little boost with map files. When in browser dev tools, knowing where a style came from, file and line, improves the process and helps make developers more productive. 

We know sending the smallest size through the wire is best for user experience, load times, and bandwidth consumptions. By utilizing a PreProcessor we get these options out of the box.


### Folder Structure Examples

Picking a folder structure boils down to your project needs and what your team agrees on. Good news! You cannot go wrong with Sass folder structure. There was a period of time where I did things differently on each project. Nothing broke or went catastrophically wrong with the projects. It just took me a minute to figure out where things were. Thanks to CSS Map files, this was an easy task. 

If you are looking for some guidance, here are a couple that I gravitate towards.

* [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
* [Four Folder Organization](https://evernote.com/blog/how-evernote-handles-their-sass-architecture/)
* [Component Structure](https://angular.io/guide/styleguide#file-structure-conventions)
* [The Config / Content Structure](https://medium.com/@elad/css-architecture-folders-files-structure-f92b40c78d0b)

## Nesting

When I stated, partials were the thing I loved most about Sass, I lied. It's really nesting. Nesting is the one thing I cannot live with out. 

You tell me what you would rather write. 

```Scss
.button {
  // some styles
}
.button:hover {
  // some styles
}
.button span {
  // some styles
}
.button:hover span { 
  // some styles
}
.button i {
  // some styles
}
.button:hover i { 
  // some styles
}
```

```Scss
.button {
  // some styles
  span {
    // some styles
  }
  i{
    // some styles
  }
  &:hover {
    // some styles
    span {
      // some styles
    }
    i {
      // some styles
    }
  }
}
```

### BEM 

Using the BEM methodology has been my preference for a while now. One of the biggest reasons for the adoption is how well it goes hand in hand with Sass. 

Let's consider the following markup.

```HTML
<article class="post">
  <header class="post__head">
    <h1 class="post__title">Post Title</h1>
  </header>
  <section class="post__body">
    <p class="post__text">Lorem <strong>ipsum dolor sit</strong> 
    amet, consectetur adipisicing elit. Molestias, numquam!</p>

    <div class="social-links">
      <a href="#" class="social-link social-link--fb">FB</a>
      <a href="#" class="social-link social-link--tw">TW</a>
      <a href="#" class="social-link social-link--yt">YT</a>
    </div>
  </section>
</article>
```

```SCSS
.post {
  box-shadow: 0 15px 15px rgba(black, 0.5);
  width: Min(25em, 50vw);
  display: grid;
  grid-template-areas:
    "head"
    "body"
    "body";

  &__head {
    grid-area: head;
    background: white;
    padding: 1rem;
  }

  &__title {
    margin: 0;
  }

  &__body {
    grid-area: body;
    background: #a3a3a3;
    padding: 1rem;
    height: 100%;
  }

  &__text {
    text-transform: lowercase;

    strong {
      text-transform: uppercase;
      letter-spacing: 5px;
    }
  }
}
```

Here is a way you could code the styles. But I am going to make an argument that there is a better way. 

There are a couple of things that could go wrong here. This example is small and the styles are simple, but we are already starting to see the parent `post` scroll off screen. It will become hard to keep track of what the parent is and where you are at the further away the two become. Yeah, you could argue; "I'm in the `_post.scss` file, so this should be all related to posts". This is assuming the title of the file reflects the parent selector. This argument falls apart the more nested the selectors become. The last problem I have is the "find" functionality goes away. Say you are debugging in the dev tools, and you need to get to "post__title", can you search for that? If you search for "__title", can you guarantee you are in the correct location?

 At a high level I have three simple rules to make this easier. Let's take a look at the approach I take and break down the rules I apply.

```SCSS
.post {
  box-shadow: 0 15px 15px rgba(black, 0.5);
  width: Min(25em, 50vw);
  display: grid;
  grid-template-areas:
    "head"
    "body"
    "body";

  &.-inverted {
    background: #2e2e2e;
  }
}
.post__head {
  grid-area: head;
  background: #e5e5e5;
  padding: 1rem;
}
.post__title {
  margin: 0;
}
.post__body {
  grid-area: body;
  padding: 1rem;
  height: 100%;
}
.post__text {
  text-transform: lowercase;

  .-inverted & {
    color: #e5e5e5;
  }

  strong {
    text-transform: uppercase;
    letter-spacing: 5px;
  }
}

.social-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.social-link {
  display: block;
  background: goldenrod;
  padding: 5px 25px;
  text-decoration: none;
  color: black;

  &--fb {
    background: blue;
    color: white;
  }

  &--tw {
    background: lightseagreen;
  }

  &--yt {
    background: red;
  }
}
```

Scss rules. 
1. Only use `&` for modifiers and parent selectors.
2. Children elements should get an independent line.
   * Yes, you will have to write the parent name more. 
   * The mental over head of knowing where you are at is reduced.
   * As well as you will be able to search with more confidence.
3. Nest only three levels deep. 
   * There are times where nesting more is acceptable, but take a moment to reevaluate and make sure it’s the correct move to make.


## Lists and Maps

Good file organization can go a long way to preserving your sanity. With Lists and Maps, we can go further and organize groups of relevant values. 

### Lists

Sass Lists are essentially arrays, they hold a list of values. The individual elements are encased in parenthesis and separated by commas. 

```Scss
$fontWeights: (200, 400, 600, 900);
$spacings: (.25rem, .5rem, .75rem, 1rem);
$color: (#ff0000, #00ff00, #0000ff);
$sizes: 40px, 50px, 80px;
```

### Maps

Simply put, Sass Maps are a set of key value pairs. The syntax is straight forward, you define a variable, create `key: value` pairs, and separate pairs with a comma. 

```Scss
$fontWeights: (
  light: 200,
  medium: 400,
  bold: 600,
  thick: 900
);
$spacings: (
  xs: .25rem,
  sm: .5rem,
  md: .75rem,
  lg: 1rem
);
$color: (
  primary: #ff0000, 
  secondary: #00ff00,
  accent: #0000ff
);
$sizes: (
  sm: 40px, 
  md: 50px, 
  lg: 80px
);
```

### Accessing Values

To access any value in a list, you can utilize `list.nth()` that accepts the list variable and the index you want to target.

To access any value in a map, you can utilize `map-get()` that accepts the map variable and the key you want to target.

```Scss
body {
  font-weight: map-get($fontWeights, bold);
  color: map-get($colors, primary);
  margin: map-get($spacings, md);
}
.icon-sm {
  width: list.nth($sizes, 1);
  height: list.nth($sizes, 1);
}
```

## Loops

Lists and Maps are great for organizing your code, but outside of organization they don't offer much over standalone variables. Loops allow us to iterate over each item and output the desired value.

Sass's `@each` block has two variations. The first one deals with Sass Lists and the syntax is as follows `@each <variable> in <expression> {...}`. 

The other version deals with Sass Maps and the syntax is as follows `@each <keyVariable>, <valueVariable> in <expression> {...}`. ( Basically, this is a `for...in` loop in JavaScript. ) 

```Scss
$sizes: (
  sm: 40px, 
  md: 50px, 
  lg: 80px
);
$icons: (
  html: "\f13b",
  css: "\f38b",
  sass: "\f41e",
  javascript: "\f3b9",
  gulp: "\f3ae",
  vue: "\f41f",
  angular: "\f420",
  react: "\f41b"
);

.icon {
  // default icon styles
  @each $size in $sizes {
    &--#{$size} {
      width: $size;
      height: $size;
    }
  }

  @each $name, $glyph in $icons {
    &--#{$name} {
      content: $glyph;
    }
  }
}
```

To see the full code sample, check out this [CodePen](https://codepen.io/jermbo/pen/ZEGWdpz). 

## Functions

Functions have been in Sass for a while, but was not something I fully utilized until recently. Essentially, functions in Sass are just like functions any where else. They are bits of reusable code, that can take in arguments, and optionally return a value. ( I cannot think of a use case where you would not want to return something. Use a mixin if you need reusable code that doesn't return a value. )

Let's look at a couple examples.

```Scss
@function makeLongShadow($color) {
  $val: 0px 0px $color;
  @for $i from 1 through 40 {
    $val: #{$val}, #{$i}px #{$i}px #{$color};
  }
  @return $val;
}
@function invert($color, $amount: 100%) {
  $inverse: change-color($color, $hue: hue($color) + 180);
  @return mix($inverse, $color, $amount);
}

$primary-color: #00e8fe;
h1 {
  padding: 1rem;
  background-color: invert($primary-color, 75%);
  text-shadow: makeLongShadow(invert($primary-color, 50%));
  color: $primary-color;
}
```

### Sass vs CSS functions

As CSS evolves, there are new functions being added that conflict with existing Sass functions. The issue is Sass is a PreProcessor, meaning it takes some syntax and converts it to normal CSS. With the additions or enhancements of CSS functions, Sass has kept up with making sure the Sass version matches as closely as possible to the spec. But there are cases where that is not possible. If you are trying to utilize the CSS functions in Sass, you will run into some problems. 

There is a brilliant article by Ana Tudor on CSS-Tricks that tackles this topic in detail. [When Sass and New CSS Features Collide](https://css-tricks.com/when-sass-and-new-css-features-collide/). Below is an excerpt from this article. 

#### Min and Max

In Sass, the `min()` and `max()` functions can only accept numbers with the same units.

```Scss
div {
  width: min(20em, 50vh);
  // Incompatible units: 'vh' and 'em'
  height: min(calc(20em + 7px), 50vh); 
  // "calc(20em + 7px) is not a number for 'min'
}
```

#### Color functions and CSS Vars

Since Sass is meant to output to CSS, it does not quite understand what CSS Variables are and causes errors when used in functions.

```Scss
div {
  background: hsl(9, var(--sl, 95%, 65%));
  // wrong number of arguments (2 for 3) for 'hsl'
  color: rgba(var(--rgb, 128, 64,64), .7); 
  // $color: "var(--rgb, 128, 64,64)" is not a color of 'rgba'
}
```

#### Simple Solution

The Ana Tudor article continues to show majority, if not all, the issues with Sass and CSS functions. She also explains a pretty elegant solution to the problem. Since Sass is case sensitive and CSS isn't, just uppercase the function you want to use and Sass will not try to use their version of the functions. 

What?!

```Scss
div {
  background: HSL(9, var(--sl, 95%, 65%));
  color: RGBa(var(--rgb, 128, 64,64), .7);
  width: MIN(20em, 50vh);
  height: Min(calc(20em + 7px), 50vh);
}
```

That's it. If you want to utilize the latest CSS functions that exist but don't quite work in Sass, just capitalize the function name. 

## Sass and Modern CSS Features

With the feature previously talked about, I cannot give up Sass, but I do want to utilize the newer features of CSS. Here is what I do to get the best of both worlds. 

### CSS Custom Properties

Quick recap of CSS Custom Properties. a.k.a. CSS Variables. They are custom defined properties that can be referenced later in CSS, utilized in CSS functions, follow the same rules of specificity, and can be manipulated by JavaScript.

CSS Variables must be defined on an object and can be accessed via the `var()` function.

```CSS
:root {
  --primaryColor: #bada55;
  --text-color: #3d3d30;
}

body {
  background: var(--primaryColor);
  color: var(--text-color);
}
```

### Sass-ification

After a couple iterations, I have settled on a workflow that has been flexible and structurally sound. Typically things are broken into four broad areas.

   1. Sass variable
   2. Sass maps
   3. Functions
   4. Creations Loops

#### Sass Variables

These variable names are meant to describe the value it's holding, not where it's going to be used. The typical example is:

```Scss
// This name is specific to the color it represents
// It is not to be used in the code base, as soon as this value changes 
// the variable name loses meaning
$brickRed: #a31233;

// A more generic name that represents where it's going to be utilized.
// If the value changes, the meaning of `brandPrimary` does not.
$brandPrimary: $brickRed;
```

#### Sass Maps

Before harnessing the power of Sass Maps, I used to have a long list of variables that described where they would be used. 

```Scss
$font-size-base: 1rem;
$title-xl: $font-size-base + 2;
$title-lg: $font-size-base + 1;
$title-md: $font-size-base + .5;
$title-sm: $font-size-base + .25;
$title-xs: $font-size-base;
// Body Text Sizes...
// Font Weights...
// Colors...
// Break Points...
// etc...
// etc...
```

Keeping things organized was a series of small Sass files or one large file with a bunch of comments separating everything. The two major issues with this approach is the variable names loosely tie related items together and there is no way to programmatically access or manipulate variables. 

Sass Maps solves both of those issues in one package.

```Scss
$font-size-base: 1rem;

$font-sizes: (
  text: (
    xs: $font-size-base - 0.2,
    sm: $font-size-base - 0.1,
    md: $font-size-base,
    lg: $font-size-base + 0.1,
    xl: $font-size-base + 0.2,
    xxl: $font-size-base + 0.3
  ),
  title:(
    xs: $font-size-base,
    sm: $font-size-base + 0.2,
    md: $font-size-base + 0.4,
    lg: $font-size-base + 0.6,
    xl: $font-size-base + 0.8,
    xxl: $font-size-base + 1
  )
);

h1 {
  font-size: map-get(map-get($font-sizes, title), xxl);
}
```

So, we have leveled up with organization, but have taken a huge step backwards in readability and developer experience. 

#### Functions

Functions come to the rescue. Let's use the font map in the previous example and make this more usable.

```Scss
@function font($category: text, $font-size: md) {
  @return var(--font-#{$category}-#{$font-size});
}

h1 {
  font-size: font(title, xl); // var(--font-title-xl)
}
```

Wait! I haven't defined a CSS Variable yet. How is this going to work?

#### Creation Loops

The last thing that needs to happen is to convert the Sass Maps into CSS Variables. With the `@each` loop, this is a straight forward process. 

```Scss
// Sass Item
:root {
  @each $name, $size in $font-sizes {
    /*** #{capitalize($name)} - Sizes ***/
    @each $n, $s in $size {
      --font-#{$name}-#{$n}: #{$s};
    }
  }
}

// Outputs ( comments and all )
:root {
  /*** Text - Sizes ***/
  --font-text-xs: 0.8rem;
  --font-text-sm: 0.9rem;
  --font-text-md: 1rem;
  --font-text-lg: 1.1rem;
  --font-text-xl: 1.2rem;
  --font-text-xxl: 1.3rem;
  /*** Title - Sizes ***/
  --font-title-xs: 1rem;
  --font-title-sm: 1.2rem;
  --font-title-md: 1.4rem;
  --font-title-lg: 1.6rem;
  --font-title-xl: 1.8rem;
  --font-title-xxl: 2rem;
}
```

## Wrapping up

CSS has come a long way had has very interesting plans for the future. I hope I have demonstrated why I think PreProcessors still have a place and should be utilized to augment your developer experience.
