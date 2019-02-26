# Architecting Your Front End

## The Situation

We all have started a project with the best intentions. With this project we are going to do things right. Things are going to be clean, maintainable, expandable, it’s supposed to be the work of art that other art is modeled after.

But, then you get into the project and things change. Client request’s push the boundary of was originally anticipated. Business requirements change and cause rework that wasn’t factored into the original design. And you are left with the question; “Should I write the section over from scratch or use an existing piece and add to it?”

In every project there comes a point when you start to become afraid of the CSS file. The CSS has turned into this unmaintainable heap that everyone is afraid to touch in fear of having the whole house of cards crumble.

In this talk I will provide you with some tactics I utilize to help keep things as pristine as possible.

## The Question

> How do I create a solid foundation for the HTML and CSS that is flexible, maintainable, and extensible?

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

Nesting is a powerful tool but use it wisely, things can get out of hand if you are not paying attention to the output. The way I think about nesting is, I try to predict the outcome. If I can read the Sass and figure out what the output CSS will be, then that is probably ok to use. ( As long as it does not violate a rule in my specificity outline )

#### Proper Nesting in Scss

![Nesting Good Scss](images/Nesting-SCSS-Good.png)

#### Proper Nesting in CSS

![Nesting Good CSS](images/Nesting-CSS-Good.png)

#### Bad Nesting in Scss

![Nesting Bad Css](images/Nesting-SCSS-Bad.png)

#### Bad Nesting in CSS

![Nesting Bad Css](images/Nesting-CSS-Bad.png)

Remember to keep things as shallow as possible. If you cannot give something a class name, it can be wrapped in a parent, but be aware of the output that will be created. If that output is more than three selectors deep, this should be rethought.

### Preprocessor Variables

Preprocessor variables are a great tool to help enforce consistency in you site. By giving things a meaningful name an utilizing them throughout the site you help ensure the correct colors, fonts, spacing, and other design decisions are the same across the board.

With the introduction of CSS Custom Properties, aka CSS Variables, we get the more functionality with these by hooking in to JavaScript. How I choose which one to use is simple. Can all of my browsers support this, and will I utilize the JavaScript features? If yes to both of these questions, they why not utilize the latest and greatest. If not, then stick with Scss variables a little longer.

![Preprocessor Variables](images/variables.png)

![Preprocessor Variables](images/variables-output.png)

### Preprocessor Mixins and Includes

Much like variables, mixins allow me to have a single place of truth for broader design decisions. For example, I want to make sure my container elements have the same box shadow and transition on hover. In stead of writing that in every box, I write it in a mixin and include it where I what that to be applied.

![Preprocessor Mixins and Includes](images/mixing-include.png)

![Preprocessor Mixins and Includes](images/mixing-include-output.png)

### Preprocessor Loops, Lists, & Interpolation

When building a web app, often times I have some UI that is very close in the design, but there are subtle things that change. Maybe it's an icon, color, badge, something that doesn't require a new block of CSS but different enough for the users to notice. This is where Looping comes into play.

![Preprocessor List Loops and Interpolation](images/list-loops.png)

![Preprocessor List Loops and Interpolation](images/list-loops-output.png)

### Preprocessor Extends

@extends is one tool in a preprocessor that is available that I do not use. The main reason is unpredictability of what the output will be. I also do not like the grouping of some items that I may not have intended originally.

This article does a decent job diving into the details as to why is potentially bad. [Don’t Over-@extend Yourself in Sass (or: There’s a class for That!)](https://pressupinc.com/blog/2014/11/dont-overextend-yourself-in-sass/)

I would 100% opt for the @include over @extends every time. Yes, this does make your CSS output a little heavier. Your site is not going slow because of CSS, and GZip favors repetition in its compression algorithm.

## Adopt a naming convention

There are plenty of naming conventions out in the wild. After utilizing them all in various projects, the one I have chosen to stick with is B.E.M..

The reason I like B.E.M. is for its straight forwardness, its low specificity, and its malleability. When using other systems, they tended to fall short for what I was needing or they were to complicated for the simplicity of the project.

> BEM — Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development” -- [BEM Website](http://getbem.com/)

1. Easy
   - To use BEM, you only need employ BEM's naming convention.
2. Modular
   - Independent blocks and CSS selectors make you code reusable and modular
3. Flexible
   - Using BEM methodologies and tools can be recomposed to configured the way you like.

### BEM Breakdown

#### Standard Implementation

![BEM Breakdown HTML](images/BEM-Standard-HTML.png)

![BEM Breakdown SCSS](images/BEM-Standard-SCSS.png)

![BEM Breakdown CSS](images/BEM-Standard-CSS.png)

#### Standard Modifier Implementation

![BEM Breakdown Modified HTML](images/BEM-Standard-Modifier-HTML.png)

![BEM Breakdown Modified SCSS](images/BEM-Standard-Modifier-SCSS.png)

![BEM Breakdown Modified CSS](images/BEM-Standard-Modifier-CSS.png)

#### Modified Implementation

BEM is a great tool, though I have two complaints.

1. As it stands now, the HTML can get bloated with class names.
2. Adding a modifier to the parent means I have to make a modifier to the children.

I have modified how BEM works with my projects. The general idea is that the children should know what parent it is in and update accordingly. The reason I do this is to help reduce the complexity for the HTML and give the back end developers a fighting chance to keep up with the front end structure.

Here are the rules that I have utilized in my projects.

1. The modifier that requires children to update lives on the parent element.
2. Don't include the parent name in the modifier.
3. Indicate it's a modifier with a single dash.

![Modified BEM HTML](images/BEM-Modified-HTML.png)

![Modified BEM SCSS](images/BEM-Modified-SCSS.png)

![Modified BEM CSS](images/BEM-Modified-CSS.png)

## Example Time

Taking time to look at the design and figuring out some high level structure is an often overlooked and underrated step in the process.
Let’s walk through how I go about starting a project. Some things I start off with are;

1. What are the major sections of the page?
2. What are the components that are being reused?
   - Things like buttons, forms, paragraph size / spacing, icons, etc.
3. What are components and their variations?
   - Things like “featured articles” vs “articles” or “callout” vs “callout inverted”
4. What variables can be created?
   - Things like “padding”, “title-size-xl”, “primary-color”
5. What is my file breakdown going to look like?

### Brochure Website

[App Landing Page Design](https://dribbble.com/shots/2643400-App-Landing-Page-Design) - by : Shekh Al Raihan

![App Landing Page ](images/brochure/brochureWebsite-01.jpg)
![App Landing Page ](images/brochure/brochureWebsite-02.jpg)
![App Landing Page ](images/brochure/brochureWebsite-03.jpg)

---

![App Landing Page ](images/brochure/brochureWebsite-01-sections.jpg)
![App Landing Page ](images/brochure/brochureWebsite-01-headings.jpg)
![App Landing Page ](images/brochure/brochureWebsite-01-content-block.jpg)

---

![App Landing Page ](images/brochure/brochureWebsite-02-sections.jpg)
![App Landing Page ](images/brochure/brochureWebsite-02-headings.jpg)
![App Landing Page ](images/brochure/brochureWebsite-02-infocards.jpg)

---

![App Landing Page ](images/brochure/brochureWebsite-03-sections.jpg)
![App Landing Page ](images/brochure/brochureWebsite-03-headings.jpg)
![App Landing Page ](images/brochure/brochureWebsite-03-icons.jpg)
![App Landing Page ](images/brochure/brochureWebsite-03-infocards.jpg)

#### CodePen Example

Check out my CodePen Project for live examples. Feel free to fork and play with the files to get a better understanding of what is going on.

[CodePen.io/jermbo/projects](https://CodePen.io/jermbo/projects)
[Architecting your Front End - Brochure Website](https://codepen.io/jermbo/project/editor/ArMmkn)

Let’s break down what we just saw into files.

- `styles.scss` ( This will import everything. We should have one entry point. )
- `_vars.scss`
- `_helpers.scss`
- `_base.scss`
- `_sections.scss`
- `_section-heading.scss`
- `_content-blocks.scss`
- `_info-blocks.scss`
- `_icons.scss`

![Brochure Base](images/brochure-code/00a-base.png)
![Brochure Vars](images/brochure-code/00-vars.png)
![Brochure Section](images/brochure-code/01-section.png)
![Brochure Section Muted](images/brochure-code/02-section-muted.png)
![Brochure Section Colored](images/brochure-code/03-section-colored.png)
![Brochure Section Scss](images/brochure-code/04-section-scss.png)
![Brochure Section CSS](images/brochure-code/05-section-css.png)
![Brochure Section Heading](images/brochure-code/06-section-heading.png)
![Brochure Section Heading Stacked](images/brochure-code/07-section-heading-stacked.png)
![Brochure Section Heading Stacked Large](images/brochure-code/08-section-heading-stacked-large.png)
![Brochure Section Heading Scss](images/brochure-code/09-section-heading-scss.png)
![Brochure Section Heading Scss](images/brochure-code/10-section-heading-scss.png)
![Brochure Content Block](images/brochure-code/11-content-block.png)
![Brochure Content Block Flip](images/brochure-code/12-content-block-flip.png)
![Brochure Content Block Scss](images/brochure-code/13-content-block-scss.png)
![Brochure Content Block Scss](images/brochure-code/14-content-block-scss.png)

## Example - Web App

Check out my CodePen Project for live examples. Feel free to fork and play with the files to get a better understanding of what is going on.
[CodePen.io/jermbo/projects](https://CodePen.io/jermbo/projects)
[Architecting your Front End - Web Apps](https://codepen.io/jermbo/project/editor/AwGdNo)

![Campaign Monitor](images/web-app/01-campaign_monitor.jpg)
![Campaign Monitor Sections](images/web-app/02-campaign_monitor-sections.jpg)
![Campaign Monitor Headings](images/web-app/03-campaign_monitor-headings.jpg)
![Campaign Monitor Content](images/web-app/04-campaign_monitor-content.jpg)
![Campaign Monitor Buttons](images/web-app/05-campaign_monitor-buttons.jpg)
![Campaign Monitor Stats](images/web-app/06-campaign_monitor-stats.jpg)
![Campaign Monitor Stats Stuff](images/web-app/07-campaign_monitor-stats-stuff.jpg)

The base file break down is similar to what we saw with the brochure website.

- `styles.scss`
- `_vars.scss`
- `_helpers.scss`
- `_base.scss`
- `_sections.scss`
- `_section-heading.scss`
- `_content-blocks.scss`
- `_info-blocks.scss`
- `_icons.scss`

![Web App Vars](images/web-app-code/00-vars.png)

![Web App Base](images/web-app-code/01-base.png)

![Web App Stats](images/web-app-code/02-stats.png)

![Web App Stats Mods](images/web-app-code/03-stats-mods.png)

![Web App Stats Scss](images/web-app-code/04-stats-scss.png)

![Web App Stats Scss Interpolation](images/web-app-code/05-stats-scss-interpolation.png)
