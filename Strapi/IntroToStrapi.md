# Intro to Strapi

* First some definitions
* Let's meet Strapi
* WordPress replacement?
* Thinking outside a blog.
* Reasons I am excited about it.
* Let's Demo Strapi

## First some definitions

### JAM stack

> "Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers" - [jamstack.org](https://jamstack.org/)

### Severless

> "Serverless computing is a cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources." - [WikiPedia](https://en.wikipedia.org/wiki/Serverless_computing)

Essentially, you off load logic for specific tasks to a third party service and they take care of the rest. This allows you to focus on the features and your business logic. While the third party takes care of the server maintenance, security, and service enhancements. This is typically more cost effective as you are only paying for processing time when your code is actually run.

A great resource for learning more about what this is all about is [serverless.css-tricks.com](https://serverless.css-tricks.com/about/). 

Chris Coyer gave a couple of really useful talks, you should absolutely checkout. [The All Powerful Front End Developer](https://www.youtube.com/watch?v=grSxHfGoaeg), [What the heck is serverless?](https://www.youtube.com/watch?v=2N_sUmpjzZk), and [Ooooops I guess we’re full-stack developers now.](https://www.youtube.com/watch?v=YiBau30kIjI)

### CMS

A CMS is a software tool that allows you to create, edit, and publish content. While early CMS software was used to manage documents and local computer files, most CMS systems are now designed exclusively to manage content on the Web. - [Tech Terms](https://techterms.com/definition/cms)

Pick any language and there is a CMS created in it. One little CMS you might have heard of is WordPress. Here a [list of content management systems](https://en.wikipedia.org/wiki/List_of_content_management_systems).  

### Headless

Without a "Head" or Front End.

In WordPress, it's hard to use anything outside of the themes folder. ( At least historically speaking. ) Utilizing a Front End framework and it's particular scaffolding is not desireable. Sure, it can be done in the themes folder, you can even use the WordPress REST API. If that works for you, have fun.

### Headless CMS

"A headless CMS is a back-end only content management system (CMS) built from the ground up as a content repository that makes content accessible via a RESTful API for display on any device." - [story blok](https://www.storyblok.com/tp/headless-cms-explained)

The Headless CMS only responsibilities are to store, secure, and deliver structured content. This opens up the possibility to present your content with any technology you would like to consume the data and does not limit you to the web. You are building an API that can be consumed by anything. 

### Headless Options

[HeadlessCMS.org](https://headlesscms.org/) has an exhaustive list of what options are out there.

## Let's meet Strapi

Strapi is an open source Headless CMS built in Node.js. 

They boast "The open source Headless CMS Front-End Developers love." - [Strapi](https://strapi.io/)

The aim for Strapi is to accelerate the delivery of modern digital experiences. They enable content-rich experiences to be created, managed and exposed to any digital product, channel or device. 

Strapi aims to provide a rich experience for not only developers, but content managers, product managers, and business leaders. [Why Strapi](https://strapi.io/why-strapi)

### Strapi Features 

* Open Source
* RESTful or GraphQL
* Customizable
* Self-hosted
* Authentication & Permissions
* Multi-database support
* Auto-generated documentation
* Built in Emailing

## WordPress replacement?

WordPress is the worlds most popular CMS, as it powers [35% of the web](https://hostingtribunal.com/blog/wordpress-statistics/). Anything coming for the throne has a very steep hill to climb in order to over throw the king. That doesn't mean there can't be challengers. Strapi is one competitor that I think has a good shot at coming out on top. It's going to take a while, but it could happen.

If you need an eco-system like WordPress offers, Strapi might not be a good choice. 

If you are looking for a straight forward CMS with customizable content types and an admin to suit, the I will attempt to convince you that Strapi is a tool worth investing some time in.

## Thinking outside a blog

I would like to challenge the notion that Headless CMS are only for traditional blogs or brochure websites. I would instead like to think of these as starting places for custom APIs. Not only do you get the benefit of an admin area where you can have non-technical contributors participate. You also have a visual interface to build your you API interface with a matching endpoint, all of the CRUD you would need, and full control over the access. 

## Reasons I am excited about Strapi

It's a common occurrence for new technology to come out and get a lot of hype, then fade away. Especially in JavaScript land. Being an individual who puts a lot of effort into keeping up with trends, new technologies, and best practices, it's easy for me to be intrigued by the new and shiny but it's hard for me to be excited about it. By excited I mean, I feel compelled to dive deeper than an intro tutorial / video. I can envision how I can use this in my day to day, or things I can build with it and how I would go about doing that. Basically, this is something I need to adopt in my tech stack right away. 

* Flash ( 2003 - 2008 )
  * Starting off as an artist, Flash help my creations come to life through animation and functionality. 
* jQuery ( 2007 - yesterday )
  * Got me using JavaScript when moving from Flash / ActionScript. 
* WordPress ( 2007 - 2017 )
  * Opened the door for dynamic websites and learning PHP.
* Less / Scss ( 2013 - today )
  * Taking something I already enjoyed doing and making it magical.
* Vue ( 2018 - today )
  * This made SPA pages accessible to me.
* Svelte ( 2019 - today )
  * Made single file components and interactivity fun to work with.

### Is Strapi going to make this list

Here is why I am going to say, YES! I honestly think this will make the list of "I need this in my life right now".

#### Content Types

My very first experience with Strapi was, getting the files loaded and installed, loading the admin, and creating my first content type. After I picked my jaw off the floor, I explored and easily discovered that I could customize everything about it. Anything I needed was there. Making fields required and or unique. Organizing the admin view for better flow. Making relationships from one content type to the other. REPEATER FIELDS. 

In WordPress, the two plugins I used on every project was Advanced Custom Fields and Custom Post Types. Most of the sites I've built need some level of post customization, and doing that before these plugins was awful. With Strapi, these concepts are baked in and have been a joy to work with.

#### REST or GraphQL

Initially your content is available a REST api endpoint. Any content type you create, Strapi will scaffold out the files necessary to give you full CRUD APIs in seconds. Adding GraphQL is a matter of clicking an install button.

#### Roles and Permissions

Strapi is secure by default. This means, any content type your create will not be accessible unless you give it explicit permission to be so. 

#### Authentication

One concept I have struggled with for a long time is Authentication. I have always been able to separate Admins from Viewers, and log people in or out. But I have always struggled with effectively making different user roles and making sure they have access only to what they are supposed to. 

I was able to implement this in Strapi with in minutes of opening up the admin and testing out the REST APIs. Next talk, I will show you in more detail how I have been able to incorporate this into a project I have been working on. 

## Let's Demo Strapi

I will now show you in under 5 minutes how to get started with Strapi locally.

Steps:

1. `npx create-strapi-app my-project --quickstart`
2. Create an admin user
   1. Navigate to `http://localhost:1337/admin`
3. Create a content type
4. Update permissions
5. View API in browser or Postman
6. ...Profit

### Part 2

The next talk will be about how I have taken Strapi and expanded my Student Typer tool. I was able to create an admin area of the tool with authentication. Created a content editor that allows my admins to CRUD any lesson. And this is opening up the possibilities for individualized user experiences, taking what is currently good and making it amazing!