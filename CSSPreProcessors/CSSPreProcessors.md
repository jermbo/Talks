# CSS PreProcessors

This talk I will show you what features of CSS PreProcessors I cannot live without, as well as some cool combinations that embrace the new features of CSS.

In this presentation I will demonstrate the 5 features that make CSS PreProcessors a vital tool in your arsenal. At the end I will tie everything together and show a practical example how to get the benefits of Modern CSS.

1. Partials
2. Nesting
3. Maps
4. Loops
5. Functions
6. CSS Custom Properties


## Partials

Partials are the feature I use and love most. By a long shot. 

If you are working on a team, the chance of collision on a single CSS file is inevitable. Why deal with it? Separate into smaller, meaningful files and the chance of collision drops to almost zero. 

Mental overhead. Have you ever tried sifting through a CSS document that is hundreds if not thousands of lines long? It's a nightmare. Grouping things together keeps the file sizes smaller and easier to reason about. 

### Folder Structure Examples

Picking a folder structure boils down to your project needs and what your team agrees on. Good news! You cannot go wrong with Sass folder structure. There was a period of time where I did things differently on each project. Nothing broke or went catastrophically wrong with the projects. It just took me a minute to figure out where things were. Thanks to CSS Map files, this was an easy task. 

If you are looking for some guidance, here are a couple that I gravitate towards.

* [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
* [Four Folder Organization](https://evernote.com/blog/how-evernote-handles-their-sass-architecture/)

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
```

```Scss
.button {
  // some styles
  span {
    // some styles
  }
  &:hover {
    // some styles
    span {
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
    <p class="post__text">Lorem <strong>ipsum dolor sit</strong> amet, consectetur adipisicing elit. Molestias, numquam!</p>

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
   1. Yes, you will have to write the parent name more. 
   2. The mental over head of knowing where you are at is reduced.
   3. As well as you will be able to search with more confidence.
3. Nest only three levels deep. If you need more than three levels, take a moment and reevaluate the structure.
   1. There are time nesting more is acceptable, but I take challenge the need initially to make sure it's the right move.


## Maps

Good file organization can go a long way to preserving your sanity. With Sass Maps we can further our sanity by organizing groups of relevant values. 

Simply put, Sass Maps are a set of key value pairs. The syntax is straight forward, you define a variable, create `key: value` pairs, and separate pairs with a comma. To access any value in the list, Sass has a function called `map-get()` that accepts the map variable and the key you want to target.

```Scss
$fontWeights: (
  light: 200,
  medium: 400,
  bold: 600,
  thick: 900
);

body {
  font-weight: map-get($fontWeights, bold);
}
```

## Loops

Maps are great for organizing our code, but outside of organization they don't offer much over standalone variables. Loops allow us to iterate over each item and output the desired item.

Sass's `@each` block has two variations. The first one deals with Sass Lists and the syntax is as follows `@each <variable> in <expression> {...}`. 

The other version deals with Sass Maps and the syntax is as follows `@each <keyVariable>, <valueVariable> in <expression> {...}`. ( Basically, this is a `for...in` loop in JavaScript. ) 

```Scss
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

  @each $name, $glyph in $icons {
    &--#{$name} {
      content: $glyph;
    }
  }
}
```

To see the full code sample, check out the [CodePen](https://codepen.io/jermbo/pen/ZEGWdpz). 

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

## CSS Custom Properties