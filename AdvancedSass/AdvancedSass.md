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

