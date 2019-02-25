# Architecting Your Front End

## The Situation

We all have started a project with the best intentions. With this project we are going to do things right. Things are going to be clean, maintainable, expandable, it’s supposed to be the work of art that other art is modeled after.

But, then you get into the project and things change. Client request’s push the boundary of was originally anticipated. Business requirements change and cause rework that wasn’t factored into the original design. And you are left with the question; “Should I write the section over from scratch or use an existing piece and add to it?”

In every project there comes a point when you start to become afraid of the CSS file. The CSS has turned into this unmaintainable heap that everyone is afraid to touch in fear of having the whole house of cards crumble.

In this talk I will provide you with some tactics I utilize to help keep things as pristine as possible.

## The Question

| How do I create a solid foundation for the HTML and CSS that is flexible, maintainable, and extensible?

## The Answers

**Short Answer**
It's tough. There is no magic bullet for every project, every time.

**Longer Answer**
Even though there is no magic bullet, there are things you can put into practice to help guide the project down a good path.

---

When starting a new project, here are some guidelines that I follow that I have had very good success with.

1. Take some time to look at the designs.
   - Define items that are reused.
   - Define what items are unique.
   - Start thinking about how to best represent the design system in code.
2. Understand Specificity and how it affects your outcomes.
3. Think about adopting a naming convention. ( I like BEM, but I have a twist )
4. Pick a CSS Preprocessor. ( I love Sass )
   - Variables help enforce consistency
   - Mixins are a great tool
   - Maps and Loops are extremely useful
5. Be aware of intentional vs. accidental similarities.

## Specificity in CSS

Specificity is the means by which browsers decide which CSS property values that are the most relevant to an element and, therefore, will be applied. -- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

There are a few tools out there to help you visualize specificity, but let's break down a couple of rules to better understand what is being applied and when. In order from least to most specific.

1. Type selectors and pseudo-elements
   - `div` | `h1` | `a` | etc...
   - `::before` | `::after`
2. Class selectors, attribute selectors, and pseudo-classes
   - `.card` | `.nav` | `.profile__img` | etc...
   - `[type='text']` | `[href*='https']` | etc...
   - `:hover` | `:focus` | etc...
3. ID Selectors
   - `#footer` | `#main-content`
4. Inline styles
   - `<p style="color: red">Text</p>`
5. !important
   - Pronounced "Bang Important"

There is a cool tool that helps you visualize what specificity is happening on a given line of selectors. Check out the [Specificity Calculator](https://specificity.keegan.st/) by Keegan.

## Specificity Rules

Here are some general rules that I enforce pretty aggressively in my code bases.

1. Never use overqualified selectors.
2. Never style ID's
3. Styles should be as flat as possible, never more than three selectors deep.
   - If you write something that is more than three selectors deep, rethink the necessity of that specificity and consider giving that element a class name.
4. Inline styles are for generated code only.
   - If you are animating something with JavaScript, they usually add inline styles.
   - If you are looping through a data set and a background image changes, inlining is ok for the image only.
5. Use !important sparingly.
   - Question the reason this needs to be utilized in the first place.

## Pick a CSS Preprocessor

I am a huge fan of CSS Preprocessor's, specifically Sass. Although, at this point they all are feature rich so it doesn’t really matter which one you choose.

There are a lot of great features, but here are a few that I use most often.

1. Nesting
2. Variables
3. Mixins
4. Includes
5. Lists
6. Loops
7. Interpolation

### Nesting
