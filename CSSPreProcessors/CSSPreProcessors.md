# CSS PreProcessors

This talk I will show you what features of CSS PreProcessors I cannot live without, as well as some cool combinations that embrace the new features of CSS.

1. Partials
2. Nesting
3. Maps
4. Loops
5. Functions


## Partials

Partials are the feature I use and love most. By a long shot. 

If you are working on a team, the chance of collision on a single file is inevitable. Why deal with it? Separate into smaller, meaningful files and the chance of collision drops to almost zero. 

Mental overhead. Have you ever tried sifting through a CSS document that is hundreds if not thousands of lines long? It's a nightmare. Grouping things together keeps the file sizes smaller and easier to reason about. 

### Folder Structure Examples

---- There are a hundred and one ways to organize your files. Each way has their benefits as well as their cons. Ultimately, it doesn't matter. There was a period of time where I did things differently each project. Over time a pattern emerged, but each time the projects got done and jumping back into any of them is not hard. The partials were named something relevant and the css map usually pointed me to the correct location. So, a folder structure is like anything else we like to pointlessly debate about. The goal is to come up with something you and your team agree upon, set it, enforce it, and move on with the project.  ------

Picking a folder structure boils down to your project needs and what your team agrees on. Good news! You cannot go wrong with Sass folder structure. There was a period of time where I did things differently on each project. Nothing broke or went catastrophically wrong with the projects. It just took me a minute to figure out where things were. Thanks to CSS Map files, this was an easy task. 

If you are looking for some guidance, here are a couple that I gravitate towards.

* [The 7-1 Pattern](https://sass-guidelin.es/#the-7-1-pattern)
* [Four Folder Organization](https://evernote.com/blog/how-evernote-handles-their-sass-architecture/)

