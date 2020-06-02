# Strapi Use Case

Last talk I introduced you to Strapi. A Headless CMS built in Node. During the talk, I challenged you to "think outside the blog" when dealing with a Headless CMS.

Today, I want to discuss how I am utilizing the power and building a full fledged JAMStack application, complete with views, authentication, CRUD, and highly interactive user functionality.

The application I am referring to is called Typer. 

## A brief history of Typer

Before we can talk about how Typer and Strapi are a match made in heaven, I think it's important to know where this system has come from and why I felt the need to create it.

## Typer v1

![Typer Version 1][typer-v1]

Typer is a tool to help kids learn to type. This started off with a simple screen that presented some HTML or CSS and an explanation of what was shown. The blinking cursor indicated to the user they could start typing. As the user typed they got feedback on their typing correctness, either a green highlight or a red flash. Once they finished the line, that line was rendered below with a visual of what they typed.

This got me thinking. Can this teach someone HTML and CSS, while learning to type?

## Typer v1.5

There were a couple of things that needed to be addressed in order to take this to the next level. Items like multi-line lesson support, mini-maps of the html and css created, progress tracking, and more.

After playing around with styles and rethinking architecture, I landed on version 1.5.

![Typer Version 1.5][typer-v1.5]

Under the hood, it's using Svelte. At the time, Svelte was something brand new to me. I decided utilizing Svelte was the right choice as it allowed me to keep most of my lesson logic in place, while providing me the ability to componentize and separate the spaghetti code into proper files / locations.

## Typer v2

The first version was great. It showed me that this was a useful tool. The kids liked it because the feedback was instant and they felt they were accomplishing something. While the kids moved onto that days curriculum, I noticed the parents try the tool on the computer next to them.

![Typer Version 2][typer-v2]

Taking v1.5 to its full potential, things were finalized in v2. Typer got a fresh coat of paint and a solid component based architecture using Svelte. 

Some of features of v2 include:

1. Pulling data from live API
2. Offline support by storing data in local storage
3. Tracking progress via local storage
4. General Typing section

## Typer v2.5

Things are working great in v2, but my mind keeps racing with all the possibilities of what it could be. This app would be great if it had an admin section to create new lessons. It would be awesome to have anonymous tracking user progress. Expanded user tracking. Things like typing speed, scoring, correct typing combos, or difficulty setting. User preferences would be a super addition as well. This could be as simple as light or dark mode preference. 

This is where Strapi comes into play, and another re-architecture. This time, the router was the blocker. 

![Typer 2.5][typer-v2.5]

## Routify

I decided to go with [Routify](https://routify.dev/) as it gave me folder base routing as well as route guards. Now there is an admin area that a user needs to authenticate before they can get access. 

## What does Strapi offer

### RESTful API

Out of the box Strapi offers me the ability to quickly create a RESTful API for all the current features of typer. I can also iterate possible new features. The cycle to idea, test, and product is a tight loop. 

Another beautify thing about the visual API builder, is the ability to easily create filed validation. You can do the most common use cases: 

1. Required
2. Unique
3. Default Value
4. Min / Max Characters

### Roles, Permissions, and Authentication

My personal area of interest are the User Roles, Permissions, and Authentication. Historically, this is something that has been difficult for me to complete. With Strapi, it's a matter of defining a role and giving them access via an admin interface.

## Show me the CODE

Enough with the slides, let's take a look at the code. 

## Typer v3 and Beyond

The road to version 3 is currently in progress. Strapi has opened up a lot of possibilities and helped make some features achievable with little friction. 

With the help of other community members, we have come up with a Road to v3 Map. Issues have been created in GitHub as well as a `dev` branch to branch from and merge into. 

If you are interested in contributing, please take a look a the issues and submit a pull request.

To help facilitate contribution, if there is enough interest, I can host a Svelte Crash Course to help get people up to speed in the technology used in the application.

-----
[typer-v1]: ./images/typer-v1.png
[typer-v1.5]: ./images/typer-v1.5.png
[typer-v2]: ./images/typer-v2.png
[typer-v2.5]: ./images/typer-v2.5.png