# Advanced Sass Techniques

If you want to take your Sass skills to the next level, this talk is for you. This talk is jam packed of useful tips and tricks, do’s and don’ts of nesting and other rules to live by, advanced usage of maps and loops, Sass Variables and CSS Custom Properties at the same time, and much more. Bring your note pad and be prepared to scribble furiously as the knowledge will come at you like water from a fire hose!

## Topics

1. Intro to BEM
2. Proper Nesting Techniques
3. BEM Modifier Tweak
4. Sass Variables
5. Sass Maps
6. Mixins
7. Functions
8. The Problem with @extends
9. Differences between Mixins, Functions, and Placeholders

### Intro to BEM

Block. Element. Modifier.

BEM (Block, Element, Modifier) is a component-based approach to web development. The idea behind it is to divide the user interface into independent blocks. This makes interface development easy and fast even with a complex UI, and it allows reuse of existing code without copying and pasting. [-- Source](https://en.bem.info/methodology/quick-start/)

#### Block

A functionally independent page component that can be reused. In HTML, blocks are represented by the class attribute. [-- Source](https://en.bem.info/methodology/quick-start/#block)

```HTML
<!-- Correct. The `error` block is semantically meaningful -->
<div class="error"></div>

<!-- Incorrect. It describes the appearance -->
<div class="red-text"></div>
```

#### Element

A composite part of a block that can't be used separately from it. [-- Source](https://en.bem.info/methodology/quick-start/#element)

```HTML
<!-- `search-form` block -->
<form class="search-form">
  <!-- `input` element in the `search-form` block -->
  <input class="search-form__input">

  <!-- `button` element in the `search-form` block -->
  <button class="search-form__button">Search</button>
</form>
```

#### Modifier

An entity that defines the appearance, state, or behavior of a block or element. [-- Source](https://en.bem.info/methodology/quick-start/#modifier)

The modifier name describes its appearance ("What size?" or "Which theme?" and so on — `size_s` or `theme_islands`), its state ("How is it different from the others?" — `disabled`, `focused`, etc.) and its behavior ("How does it behave?" or "How does it respond to the user?" — such as `directions_left-top`).

The modifier name is separated from the block or element name by a single underscore (\_). \*_This is subject to interpretation. I will show you how and why I don't follow this strictly_.

### Proper Nesting Techniques

CSS Specificity is our friend. Generally speaking, we should keep specificity as low as possible. When done properly, your CSS will be expandable when necessary and not bleed into other areas unexpectedly.

#### Example of bad nesting

Here is an example of bad nesting.

```Scss
html {
  // some stuff
  body {
    // some stuff
    header.header {
      // some stuff
      div.header {
        // some stuff
        &_mod {
          // some stuff
        }
        &__profile {
          // some stuff
          &_mod {
            // some stuff
          }
        }
        a.link {
          // some stuff
          &:hover {
            // some stuff
            span {
              // some stuff
            }
          }
          span {
            // some stuff
          }
        }
      }
    }
  }
}
```

The above Sass outputs.

```SCSS
html {
  // some stuff
}
html body {
  // some stuff
}
html body header.header {
  // some stuff
}
html body header.header div.header {
  // some stuff
}
html body header.header div.header_mod {
  // some stuff
}
html body header.header div.header__profile {
  // some stuff
}
html body header.header div.header__profile_mod {
  // some stuff
}
html body header.header div.header a.link {
  // some stuff
}
html body header.header div.header a.link:hover {
  // some stuff
}
html body header.header div.header a.link:hover span {
  // some stuff
}
html body header.header div.header a.link span {
  // some stuff
}
```

There are a ton of issues with this approach. The first question I would ask would be, does this end result seem like something you would had write?

Let's also talk about the other issues like specificity. Is it important to have the HTML element included with the class selector? What happens if that HTML element changes? Should you have to change the CSS to match?

The nesting of the selectors increase the specificity as well. Is it important to have everything wrapped in HTML selector? I think we can safely assume everything is going onto an html page. Same question / statement as the body element.

#### Example of good nesting

Here is an example of good nesting.

```Scss
.product {
  // some stuff
  &--featured {
    // some stuff
  }
}
.product__title {
  // some stuff
}
.product__image {
  // some stuff
}
.button {
  // some stuff
  &:hover {
    // some stuff
  }
  &--secondary {
    // some stuff
    &:hover {
      // some stuff
    }
  }
}
```

The above Sass outputs.

```SCSS
.product {
  // some stuff
}
.product--featured {
  // some stuff
}
.product__title {
  // some stuff
}
.product__image {
  // some stuff
}
.button {
  // some stuff
}
.button:hover {
  // some stuff
}
.button--secondary {
  // some stuff
}
.button--secondary:hover {
  // some stuff
}

```

#### Rules

The rules you should take away from this are:

1. Keep nests to 3 or less.
2. Do not nest elements in their parent blocks.
3. Modifiers can be nested in the required block or element.
4. Do not over qualify selectors.

#### Pros and Cons

Pros:

1. Very low specificity
2. Easily modifiable
3. Expandable
4. Clear names
5. Code maintainability

Cons:

1. Long names
2. Have to think of names ( some times thats really hard )

### BEM Rule Tweaks

After working with BEM for several years now, I have tweaked some of the rules defined above. These are strictly optional and my opinion. I will explain why I chose this style over the original. If you don't agree with my tweaks, stick to the rules defined on their site.

#### Modifiers

This is the biggest tweak I have made. I like to not include the name of the parent or element as a part of the modifier name. I name my modifier with a leading single dash. For example, `-featured` || `-active`.

There are couple major reasons I do this, less writing, reusability, programmatic ease, and single responsibility. I also encourage this idea that the child is responsible for knowing what parent it's in and act accordingly.

Let's look at the product example again.

```Scss
.product {
  // some stuff
  &.-featured {
    // some stuff
  }
}
.product__title {
  // some stuff
  .-featured & {
    // some stuff
  }
}
.product__image {
  // some stuff
  .-featured & {
    // some stuff
  }
}
```

The Sass above outputs.

```SCSS
.product {
 // some stuff
}
.product.-featured {
 // some stuff
}
.product__title {
 // some stuff
}
.-featured .product__title {
 // some stuff
}
.product__image {
 // some stuff
}
.-featured .product__image {
 // some stuff
}
```

### Sass Variables

Variables are a thing of beauty. My two rules are, make them as complex as your project needs and names should describe what they do not what they are.

For example, if your app has a bunch of colors that represent different states you should have two sets of variables. One that defines the colors and another that defines what they are used for.

```Scss
// Colors
$rose: #f00;
$gold: #f0aa33;
$teal: #20f0a0;
$black: #212121;
$white: #f9f9f9;

// Usable Vars
$danger: $rose;
$warning: $gold;
$success: $teal;

$text-color-light: $white;
$text-color-dark: $black;
$bg-light: $white;
$bg-dark: $black;
$border-light: $white;
$border-dark: $black;

$padding: 1.15rem;

.alert {
  background: $bg-light;
  color: $text-color-light;
  border: 1px solid $border-dark;
  padding: $padding;

  &.-danger {
    background: $danger;
    color: darken($danger, 50%);
    border-color: darken($danger, 50%);
  }

  &.-warning {
    background: $warning;
    color: darken($warning, 50%);
    border-color: darken($warning, 50%);
  }

  &.-success {
    background: $success;
    color: darken($success, 50%);
    border-color: darken($success, 50%);
  }
}
```

The reason you want to use more meaningful names is due to the nature of change. The color `$rose` at the beginning is a rose color, the fact that happens to be the color of `danger` is irrelevant. If danger needs to change to purple for some reason, should you change the value of rose? If you do the variable name loses meaning. Danger could be what ever color your project needs.

This will take a little more effort in the beginning, but the payoff will be huge in the long run. Again, make the decision based on your need and only go as complicated as necessary. Checkout my GitHub [ADD LINK HERE] for examples of starter projects.

### Sass Maps

#### Simple Example

Maps are a good way to group information together. In Sass, maps are like associative arrays, they are a set of key / value pairs. To access any value, Sass provides a function called `map-get()`. You pass in the map variable name and the key you need. Let's look at an example.

```Scss
$colors: (red: #f00, green: #0f0, blue: #00F);

body {
  background: map-get($colors, red);
}
```

Like an array, you can loop through it to get its contents. Let's loop through the colors and get it's contents.

```Scss
$colors: (red: #f00, green: #0f0, blue: #00F);

@each $key, $value in $colors {
  .#{$key} {
    background: $value;
  }
}
```

```CSS
.red {
  background: #f00;
}

.green {
  background: #0f0;
}

.blue {
  background: #00f;
}
```

In that slide you saw a lot. First is the `@each` loop. The `$key` is a made up variable for the name on the left hand side of the colon. The `$value` is a made up variable for the right hand side of the colon. Lastly, the `$colors` is the variable that contains the map you are wanting to loop through.

One other item to point out is interpolation. This is very useful throughout Sass. The syntax is pretty straight forward: `#{}`. ( If you are familiar with JavaScript, this is pretty much the same concept. `${}` ) The variable you want to render goes inside the curly brackets.

Enough with theory, let's look at a practical example. [CodePen](https://codepen.io/jermbo/pen/ZEGWdpz)

#### Advanced Example

As mentioned in my rules for variables, make variables only as complicated as necessary for your project. There are practical use cases for multidimensional maps. If it makes sense to group additional items together a multidimensional map is the perfect tool. For example;

```Scss
$brands: (
  facebook: (
    icon: "\f082",
    color: "#00f"
  ),
  twitter: (
    icon: "\f081",
    color: "#0f0"
  ),
  ...
);

@each $brand, $map in $brands {
  .#{$brand} {
    background: map-get($map, color);
    &:before {
      content: map-get($map, icon);
      width: 10px;
      height: 10px;
    }
  }
}
```

```CSS
.facebook {
  background: #00f;
}
.facebook:before {
  content: "\f082";
  width: 10px;
  height: 10px;
}
.twitter {
  background: #0f0;
}
.twitter:before {
  content: "\f081";
  width: 10px;
  height: 10px;
}
...
```

I have put together a [CodePen](https://codepen.io/jermbo/pen/RwPazeJ) to demonstrate an example from projects I have used in production apps.

### Mixins

Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like `.float-left`, and to distribute collections of styles in libraries. The two key syntax items you need to know are `@mixin` and `@include`.

#### @mixin & @include

You can think of a mixin as function in JavaScript, these can take arguments or not. If you choose to utilize parameters, you simply provide parenthesis and any number of variable names as you need. Yes, they can have defaults if needed.

`@mixin someMixin { ... }`

`@mixin someMixin($var) { ... }`

Let's look at some examples

```Scss
@mixin box($width, $height=$width) {
  width: $width;
  height: $height;
}

.square {
  @include box(50px);
}

.rectangle {
  @include box(100px, 50px);
}
```

```CSS
.square {
  width: 50px;
  height: 50px;
}

.rectangle {
  width: 100px;
  height: 50px;
}
```

#### Break Points

A very common issue I see any in project are well defined break points. I utilize the "Adaptive Responsive Design" and the "desktop first" approach. The technique I am about to show you works with the "mobile first" approach as well. Either way, I define a set of container max widths, and break points at which I expect my screen to change.

```Scss
$container-max-widths: (
  xs: 90%,
  sm: 400px,
  md: 688px,
  lg: 944px,
  xl: 1194px,
  xxl: 1468px
);
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px,
  xl: 1274px,
  xxl: 1548px
);
```

```Scss
@mixin min-screen($size) {
  $break: map-get($grid-breakpoints, $size);
  @if ($break) {
    @media (min-width: #{$break}) {
      @content;
    }
  } @else {
    @error "#{$break} is not defined";
  }
}

@mixin max-screen($size) {
  $break: map-get($grid-breakpoints, $size);
  @if ($break) {
    @media (max-width: #{$break}) {
      @content;
    }
  } @else {
    @error "#{$break} is not defined";
  }
}
```

#### Useful Mixins

There are a bunch of uses for mixins. To figure out what might be useful to you, take a look at what others are using. Take them, make a couple of your own, and or start a list of things you think are useful. Here is a small list to get you started.

1. <https://w3bits.com/sass-mixins/>
2. <https://www.psd2html.com/blog/5-useful-sass-mixins.html>
3. <https://engageinteractive.co.uk/blog/top-10-scss-mixins>

### Sass and CSS Variables

CSS Custom properties take the variable thing to the next level. Even though CSS is getting more and more powerful, I am not ready to give up some of the goodness that Sass provides. Things like, nesting, file partials, mixins, loops, etc.

Just because I am sticking with Sass does not mean I have to miss out on the goodness of CSS Custom Properties.

Let's look at an example and see what we can learn. What you are about to look at is a combination of all we have talked about already. My [CodePen](https://codepen.io/jermbo/pen/QWWMEea) is an example of code that I have utilized in production websites and apps.

### Functions

Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.

### The Problem with @extends

Extends seemed like a good idea when it was created. It tried to address the code reuse issue and to DRY things up a bit. But there were a couple of unforeseen issues that came up after use in projects. What exactly are the issues with extends?

> Extending is invisible. Extending doesn’t necessarily help file weight, contrary to the saying. Extending doesn’t work across media queries. Extending is not flexible. --[Source](https://www.sitepoint.com/avoid-sass-extend/)

Extending is invisible? What? This is a pretty big deal when considering the cascade. If you were to create a helper sass file with a bunch of tidbits and you extend the mixin, where does that selector go? It's dependant on the order in which the files are imported and hard to predict.

Extending doesn't necessarily help with file weight? If we are not repeating code, doesn't that help file size? The answer is yes and no. Let's look at an example.

```Scss
@mixin alertBox($color) {
  padding: 10px 15px;
  margin-bottom: 15px;
  transition: all .24s ease;

  &:hover {
    padding: 15px 20px;
    margin-bottom: 10px;
  }
}

.danger {
  @extend alertBox();
  background: #f00;
}

.warning {
  @extend alertBox();
  background: #ff0;
}
```

The output would be:

```CSS
.danger, .warning {
  padding: 10px 15px;
  margin-bottom: 15px;
  transition: all .24s ease;
}

.danger:hover, .warning:hover{
  padding: 15px 20px;
  margin-bottom: 10px;
}

.danger {
  background: #f00;
}

.warning {
  background: #ff0;
}
```

If we use `@inlude` instead?

```Scss
@mixin alertBox($color) {
  padding: 10px 15px;
  margin-bottom: 15px;
  transition: all .24s ease;

  &:hover {
    padding: 15px 20px;
    margin-bottom: 10px;
  }
}

.danger {
  @include alertBox();
  background: #f00;
}

.warning {
  @include alertBox();
  background: #ff0;
}
```

The output would be:

```CSS
.danger {
  padding: 10px 15px;
  margin-bottom: 15px;
  transition: all .24s ease;
  background: #f00;
}

.danger:hover {
  padding: 15px 20px;
  margin-bottom: 10px;
}

.warning {
  padding: 10px 15px;
  margin-bottom: 15px;
  transition: all .24s ease;
  background: #ff0;
}

.warning:hover {
  padding: 15px 20px;
  margin-bottom: 10px;
}
```

Extends yields 15 lines, where as the Includes yield 20 lines.

### Differences between Mixins, Functions, and Placeholders
