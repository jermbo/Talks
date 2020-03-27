# Vue and TypeScript

This talk is to share my experiences utilizing TypeScript in a Vue app for the first time.

## Set up

Before we can go any further, we need to discuss set up. The setup I am about to present is one that I use most often, now with the addition of TypeScript.

The best way to set up a Vue app is to use the Vue CLI. Be sure to install the CLI globally, you are going to use it for every new project. `npm install -g @vue/cli`. Once that is installed you can start a new project by running `vue create some-app`.

Here are the options I have chosen when setting up my latest project. 

### Select Manual Option
We need to select Manual option to activate TypeScript

![Select Manual Option](images/01-Select-Manual.png)

### Choose Options

In any given project, I have Babel, Router, Vuex, CSS Pre-Processors, and Linters. TypeScript is a new option to my setup.

![Choose Options](images/02-Choose-Options.png)

### Class Base Component

I choose not to use Class Based Components because it seems to take away the spirit of the Vue object that I originally liked.

![Class Base Component](images/03-Class-Base-Components.png)

### Use Babel

Babel is always a good idea to have on.

![Use Babel](images/04-Use-Babel.png)

### Router Mode

I personally don't mind the hash to be in the URL, so I leave that on for now. 

![Router Mode](images/05-Router-Mode.png)

### Pre-processors

Gotta have my Sass. ( I should really try out Dart-Sass one day, but for now Node-Sass is good. )

![Pre-Processors](images/06-Preprocessors.png)

### Linter

It's a good idea to set these up at the beginning of a project. 

![Linter](images/07-Linter.png)

### Linter Timing

I prefer to lint on save

![Lint Timing](images/08-Lint-Timing.png)

### Rule Location

I prefer dedicated files for my configurations.

![Rule Location](images/09-Rule-Location.png)