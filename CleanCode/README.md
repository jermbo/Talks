# Clean Code Front End

Code is for humans. There are a few simple things we can do to write more robust and maintainable code.

## HTML / CSS

- [x] 1.  Proper Formatting
- [x] 2.  Meaningful / Purposeful Markup
- [x] 3.  Meaningful / Purposeful Comments
- [x] 4.  Consistent Naming Convention
- [x] 5.  Reduce Specificity
- [x] 6.  Avoid Inline Styles
- [x] 7.  External Style Sheets
- [x] 8.  External JavaScript
- [x] 9.  Code Smells in CSS / Sass
- [ ] 10. Meaningful Variables

### Proper Formatting

We work in a world of partials, this causes the output files to be rendered in unusual ways. However, that does not matter. What does matter is the formatting of the source files. This means, no trailing whitespace, proper indentation for parent / child elements, and meaningful white space around elements. Each file should be formatted properly for several reasons;

1. Readability
    - It is way easier to reason about and spot errors.
2. Committing Code
    - When committing code, the only things that should be included are the actual lines of changed code, not white space insertions or deletions.
3. Code Reviews
    - Code reviews are hard enough. Inconsistent formatting, such as trailing whitespace or misaligned parent / child elements, can make it more difficult to see the new code that needs attention versus the bloat that can be ignored.
4. Maintainability
    - Code changes over time. Why not leave a proper foundation for our future selves or future developers?

#### Bad

```HTML
<div class="container">
    <nav class="nav">
    <a href="#"><i class="fa fa-home"></i>
        <span>Home</span><a href="#"><i class="fa fa-about"></i>
            <span>About</span><a></a>
            <a href="#"><i class="fa fa-contact"></i>
                <span>Contact</a></span>
    <a href="#"><i class="fa fa-gallery"></i>
        <span>Gallery</span>
    </a>
</nav></div>
```

The above code is hard to read and reason about. There are a few errors in there, can you find them all?

#### Good

```HTML
<div class="container">
    <nav class="nav">
        <a href="#">
            <i class="fa fa-home"></i>
            <span>Home</span>
        </a>
        <a href="#">
            <i class="fa fa-about"></i>
            <span>About</span>
        </a>
        <a href="#">
            <i class="fa fa-contact"></i>
            <span>Contact</span>
        </a>
        <a href="#">
            <i class="fa fa-gallery"></i>
            <span>Gallery</span>
        </a>
    </nav>
</div>
```

### Meaningful / Purposeful Markup

Markup should have purpose. We should not be afraid of an extra `div` or `span` where necessary. But I would question if the extra markup is absolutely necessary.

It’s important to use the correct tag at the correct times. Meaning, if you have a block of text, use a paragraph tag. If you need to click something, use an anchor tag. Not only does this make your code easier to reason about, it reduces the need for extra JavaScript functionality, and lends itself to better accessibility.

#### Bad

```HTML
<div class="news-story">
    <div class="title">Story Title</div>
    <span class="pub-date">2018-01-01</span>
    <div class="content">This is a story all about how my life got flipped turned upside down...</div>
    <span class="read-more">Read More</span>
</div>
```

#### Good

```HTML
<article class="news-story">
    <h1 class="title">Story Title</h1>
    <h6 class="pub-date">2018-01-01</h6>
    <p class="content">This is a story all about how my life got flipped turned upside down...</p>
    <a href="/link/to/article.html" class="read-more">Read More</a>
</article>
```

### Meaning / Purposeful Comments

Code should be as self documenting as possible. However, there are reasons one would want to leave a comment. One could be to leave yourself a reminder or leaving a note to the next developer. _**These should not make it to production and so should be used sparingly.**_

A good habit I picked up early in my career was to open and then immediately close it, as well as note what has been closed. HTML has a tendency to get nested pretty deep, this can cause it to be difficult to be certain what is open and closed properly and where.

### Bad

```HTML
<div class="container">
    <header>
        ...
        <nav>
            ...
        </nav>
    </header>
    <main>
        <section class="posts">
            <article class="post">
                ...
            </article>
            <article class="post">
                ...
            </article>
            <article class="post">
                ...
            </article>
        </section>
        <section class="recipes">
            <article class="recipe">
                ...
            </article>
            <article class="recipe">
                ...
            </article>
            <article class="recipe">
                ...
            </article>
        </section>
    </main>
</div>
```

### Good

```HTML
<div class="container">
    <header>
        ...
        <nav>
            ...
        </nav>
    </header>
    <main>
        <section class="posts">
            <article class="post">
                ...
            </article><!-- /post -->
            <article class="post">
                ...
            </article><!-- /post -->
            <article class="post">
                ...
            </article><!-- /post -->
        </section><!-- /posts -->
        <section class="recipes">
            <article class="recipe">
                ...
            </article><!-- /recipe -->
            <article class="recipe">
                ...
            </article><!-- /recipe -->
            <article class="recipe">
                ...
            </article><!-- /recipe -->
        </section><!-- /recipes -->
    </main>
</div><!-- /container -->
```

### Consistent Naming Convention

Every project you work on will be slightly different. If you are new to an existing project, take the time to see what the style is and keep your changes similar.

If you are starting a new project, decide what the naming convention is going to be, document it, and be _consistent_.

#### Bad

```HTML
<div class="container">
    <header class="main-header">
        <nav id="mainNav">
            <a href="#" class="main-nav__item">Home</a>
            <a href="#" class="main-nav__item">About</a>
            <a href="#" class="main-nav__item">Gallery</a>
        </nav>
    </header>
</div>
```

#### Good

```HTML
<div class="container">
    <header class="header">
        <nav class="nav">
            <a href="#" class="nav__item">Home</a>
            <a href="#" class="nav__item">About</a>
            <a href="#" class="nav__item">Gallery</a>
        </nav>
    </header>
</div>
```

### Reduce Specificity

First, let's define Specificity in CSS.

> **Specificity** is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of [CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#Selectors)
> -- Source [Specificity MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

There is a cool tool you can use to determine how _specific_ a selector rule is. [Specificity Calculator](https://specificity.keegan.st/)

Specificity is broken down into 4 categories:

- Inline +1 ( Most specific )
- IDs +1 ( Very specific )
- Classes +1 ( Generally specific )
  - Attributes
  - pseudo-classes [^1]
- Element +1 ( Least specific )
  - pseudo-elements [^1]

> Basically a pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example `:hover`.
> A pseudo-element however allows us to create items that do not normally exist in the document tree, for example `::after`.
>
> -- source [Growing with the Web](http://www.growingwiththeweb.com/2012/08/pseudo-classes-vs-pseudo-elements.html)

The way you calculate the specificity of a rule is to simply add one to each category that rule has. Your outcome will always be a 4 digit number. Let's take a look and some examples :

```HTML
<div class="item">
    <p id="dark">This is text</p>
</div>
```

```CSS
// 0 1 0 1
p#dark {
    background: red;
}

// 0 0 1 1
.item p {
    background: yellow;
}

// 0 1 1 1
body .item #dark {
    background: cyan;
}

// 0 1 1 0
[class="item"] #dark {
    background: pink;
}

// 0 1 0 3
body div p#dark {
    background: blue;
}

// 0 1 0 0
#dark {
    background: green;
}
```

Now that we understand what specificity is, let's look at a couple of examples that are bad and how we can correct them.

#### Bad

```CSS
nav#nav ul li a {}
.userProfile .social-links a {}
article h2.title {}
section.products div.product {}
```

#### Good

```CSS
#nav a {}
.social-links a {}
.title {}
.product {}
```

### Better

```CSS
.nav__item {}
.social-link {}
.title {}
.product {}
```

By utilizing classes with unique meaningful names you gain the ability to easily over write and avoid clashes with the _cascade_ portion of CSS.

### Avoid Inline Styles

As we learned about specificity in the previous section, it should go without saying that inline styles should be avoided. At least the hand created inline styles. If you are manipulating things with JavaScript, such as animations, the inline styles that creates is acceptable.

There are some examples where one might be better suited for adding and removing classes in stead of adding an inline style. For example; hiding and showing something. You should opt for manipulating classes. This gives your more control of the adverse side effects caused by specificity.

### External JavaScript

It is best practice to keep all JavaScript functionality in an external file. Preferably with a good naming convention and structure, and included only on the pages it's needed.

If you absolutely need to write inline JavaScript, it should be done for a clear and arguable reason. Otherwise, put it in an external file.

### Code Smells in CSS / Sass

Code smells in CSS and Sass take on many different forms. The rules presented below are best practice guidelines you should follow as closely as possible. There are exception you need to break a rule, or rules, be prepared to articulate that decision and possibly leave a comment or two explaining why.

#### Undoing Styles

The nature of CSS is to cascade. The general rule of thumb is, if you need to remove CSS then those styles have been applied to early. For example:

##### Bad

```CSS
h2 {
    font-size: 2rem;
    margin: 0 0 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #888;
}

.no-border {
    border-bottom: none;
    padding-bottom: 0;
}
```

##### Good

```CSS
h2 {
    font-size: 2rem;
    margin: 0 0 0.5rem;
}

.headline {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #888;
}
```

#### Qualified Selectors

This derives a lot from the Specificity section. Qualified selectors always present problems in very subtle ways. Anything that has the HTML element attached to a class or id is an extra qualification that is not necessary.

##### Bad

With the code below, you are unable to reuse any of the classes unless they happen to have the same HTML qualifier in the markup. What happens in the situation where you want the `main-nav` to be the `nav` element? Or the `post` to be more semantic and be an `article` tag instead? The list goes on with this topic. Basically, never create a CSS rule with an attached HTML qualifier.

```CSS
ul.main-nav {}
a.button {}
div.header {}
div.header a.logo img {}
div.post {}
```

##### Good

With these examples, you still get the same effect, but with a lot less specificity

```CSS
.main-nav {}
.button {}
.header {}
.logo img {}
.post {}
```

#### Nesting

A general rule of thumb is, no more than three nested elements. This also plays into the Specificity section, but deserves to be called out for additional reasons. Specifically with pre-processors we have to conscious of the output. Things can get out of hand quickly. Let's look at a couple of examples.

##### Bad

```Scss
.blog-page {
  .post {
    ...
    &__title {
      ...
    }

    &__links {
      a {
        ...
        span {
          ...
        }
        &:hover {
          ...
          span {
          }
        }
      }
    }

    &__hero {
      ...
      img {
        ...
      }
    }
  }
}
```

The output looks like;

```CSS
.blog-page .post {
  ...
}
.blog-page .post__title {
  ...
}
.blog-page .post__links {
  ...
}
.blog-page .post__links a {
  ...
}
.blog-page .post__links a span {
  ...
}
.blog-page .post__links a:hover {
  ...
}
.blog-page .post__links a:hover span {
  ...
}
.blog-page .post__hero {
  ...
}
.blog-page .post__hero img {
  ...
}
```

##### Good

```Scss
.post {
  ..
}

.post__title {
  ...
}

.post__links {
    ...
}

.post__links a,
.post__link {
  ...
  span {
    ...
  }

  &:hover {
    ...
    span {
      ...
    }
  }
}

.post__hero {
  ...
  img {
    ...
  }
}
```

```CSS
.post {
  ...
}

.post__title {
  ...
}

.post__links {
  ...
}

.post__links a,
.post__link {
  ...
}
.post__links a span,
.post__link span {
  ...
}
.post__links a:hover,
.post__link:hover {
  ...
}
.post__links a:hover span,
.post__link:hover span {
  ...
}

.post__hero {
  ...
}
.post__hero img {
  ...
}
```

#### IDs

Just don't style with ID's. The reasons are straight forward.

- IDs are meant to be unique per page, and that defeats the whole reusability idea.
- IDs can often have most of, if not all of, their traits abstracted into smaller, reusable classes.
- An ID is infinitely more specific than a class.
- There was a bug that allowed you to chain 256 classes to overwrite an ID. This has now been corrected.

#### @extend vs @mixin

The main issue with `@extends` is the slippery slope it creates. Sass's `@extend` is a greedy tool, it will extend every instance of a class that it finds and will generate crazy long selector chains. Check out this [example](https://twitter.com/gaelmetais/status/564109775995437057) that demonstrates an extreme example, and is surprisingly easy to create.

Another issue presented with this is the grouping of unrelated class names. This is a topic in it of itself. Generally speaking we should try to group like things and keep unrelated things separate. We need to be careful of causing undesired effects, intending to change one thing but changing a lot of other things.

##### Bad

```SCSS
%specialFont {
  font-weight: 700;
  font-style: italic;
}
...
.special-quote {
  @extend %specialFont;
  color: #e5e5e5;
  font-size: 3rem;
}
...
.btn {
  @extend %specialFont;
  color: #a3b3da;
}
...
.bio__title {
  @extend %specialFont;
  color: cyan;
  border-bottom: 1px solid cyan;
}
```

Let's imagine the `...` represents a bunch of code or the breaking up into smaller files. The code above translates into the compiled CSS below.

```CSS
.special-quote, .btn, .bio__title {
  font-weight: 700;
  font-style: italic;
}
...
.special-quote {
  color: #e5e5e5;
  font-size: 3rem;
}
...
.btn {
  color: #a3b3da;
}
...
.bio__title {
  color: cyan;
  border-bottom: 1px solid cyan;
}
```

The major problem is the grouping on classes that dont have anything to do with each other. Change the placeholder class and you effect all of the other places that extend it. Which leads to changes that have a wide effect on your site and is very difficult test and QA for.

The other way to solve this problem and not cause unforeseen ripple effect is to overwrite the attributes being added. That should be properly considered and used if absolutely necessary.

##### Good

Let's rework this a little bit and utilize the `@mixin` to our advantage.

```SCSS
@mixin specialFont {
  font-weight: 700;
  font-style: italic;
}
...
.title {
  @include specialFont;
  color: #e5e5e5;
  font-size: 3rem;
}
...
.btn {
  @include specialFont;
  color: #a3b3da;
}
...
.bio__title {
  @include specialFont;
  color: cyan;
  border-bottom: 1px solid cyan;
}
```

The output code does have elements that repeat, but that is not an issue. Keeping things "DRY" is an argument for the source files, not an output generated file. This is a little confusing as the generated output using `@mixin` is larger, but the GZip compression works wonders on the files using `@mixin`. GZip favors repetition, so this output will yield a better compression ratio. Read more about this topic at [CSS Wizardry](https://csswizardry.com/2016/02/mixins-better-for-performance/).

```CSS
.title {
  font-weight: 700;
  font-style: italic;
  color: #e5e5e5;
  font-size: 3rem;
}
...
.btn {
  font-weight: 700;
  font-style: italic;
  color: #a3b3da;
}
...
.bio__title {
  font-weight: 700;
  font-style: italic;
  color: cyan;
  border-bottom: 1px solid cyan;
}
```

## JavaScript

1. Proper Formatting
2. Meaningful Variables
3. Meaningful Function Names
4. Minimize Global Scope

### Proper Formatting

Your source files should have proper formatting. The final output render is not important, but the source files should be as clean as possible. This means, no trailing white space, proper indentation for parent / child elements, and meaningful white space around elements.

#### Bad

```JavaScript
var baseURL="http://someapi.com",items=20,user_activity=false;
function posts(string){ return baseURL+string+'?query=123'}
```

#### Good

```JavaScript
var baseURL = "http://someapi.com";
var items = 20;
var user_activity = false;

function posts(string){
    return baseURL + string + "?query=123";
}
```

### Meaningful Variables
