# Scratch Your Own Itch

Why personal projects are useful tools for your success. Let’s learn how Sample APIs solved a problem I had. How it’s evolved over the years. And why I’m passionate about it. We will take a look under the hood and see how the system is built, what technologies are used, and learn how to contribute to open source.

* Industry moves at a rapid pace
  * Then vs Now
  * Now vs The Future
* How does one keep up
  * Techniques to keep up
    * Don't choose one, choose a couple
    * Read - Watch - Listen
    * Don't try to adopt everything
  * Feeling overwhelmed
* Personal Projects
  * Start simple
  * Grow over time
  * Battle Grounds
  * Personally Interesting
  * Project Ideas
* Does this lead to success
  * Preparation and Luck
* Sample APIs
  * The Problem
  * The history
  * The future


## Industry moves at a rapid pace

Technology has always gotten faster, smaller, cheaper, and more powerful. Ideas of best practices are always evolving. Languages are constantly being refined and perfected. The rate which change happens seems to be forever accelerating. That is true of the past and will be true into the far future. 

### Then vs Now

It's important to take a look back and see where we've come from.

* Browser wars of the 2000's
* Fight for Web Standards
* Flash Players ubiquity
* The early days of graphics on the web
* JavaScript is seen as a "toy language"

### Now vs The Future

It's hard to predict the future, but we can make some educated guesses.

* Low Code / No Code Revolution
* Machine Learning 
* Cloud Computing / Serverless
* New Fundamentals - JAMStack
* Progressive Web Apps ( PWAs )

## How does one keep up

There are a lot of different directions to go in. How do I choose the right one? How do I keep up with all there is? How do I prevent burn out? How will I know when I'm ready? 

### Techniques to keep up

Here is what I have learned over the years. 

#### Don't choose one, choose a couple. 

Betting the farm on one technology is risky. There is no guarantee what you choose will be the victor. Have a diversified tech stack.

#### Read - Watch - Listen

There are plenty of resources out there to help you paint a picture of what's going on. Subscribe to monthly news letters. Find some YouTube channels related to the topic your interested in. Checkout Tech related Podcasts. 

#### Don't try to adopt everything

One problem I had in my early days was, I tried to learn everything. Knowing everything is not possible. 

The strategy I've adopted is, Read - Watch - Listen. It takes very little effort for me to read an article, watch a YouTube video, or listen to an audio book. After I've heard about something from a few sources, I look into it a little more. I build a simple app to test how the new tech / idea / methodology works. ( I am not going for completed application. I'm going for understanding the concept. Once I feel I understand the point, I usually abandon the project. ) After completing the sample project and I have determined this is something I need in my life, I make it a priority to learn / build more.

### Feeling overwhelmed

This feeling will happen multiple times in your career. In retrospect, I have noticed these around the times I leveled up. Usually when I am learning a new concept and that concept starts to sink in. Then I realize how much I don't know and the unknown amount to learn is crippling. 

My advice is to embrace these times. They are a sign you are trying something new. Take a step back, focus on the goal at hand, and learn when you need to learn.

## Personal Projects

The most powerful tool you have to keeping up to date is personal projects. 

Personal projects should be something you are interested in. They should be something you can pickup and put down at any given time. They should be a safe place for you to test ideas. 

### Start simple

In the beginning, your projects don't need to be super original. They don't need to be the next best thing. They can even be recreations of existing applications.

### Grow over time

Starting small is crucial. What is the MVP ( Minimum Viable Product )? Start with that and grow over time.

### Battle Grounds

Don't be afraid to completely scrap everything and start over. Sometimes you code yourself into a corner. Or new information comes up that requires a fresh rewrite. 

### Project Ideas

* Personal Blog
* Personal Inventory System
* HoneyDo List
* Personal Budget Tracker
* Movie / Book / Game Suggestion List
* Workout Tracker

* [100 Web Project Ideas](https://efficientuser.com/2020/03/15/100-web-project-ideas/)
* [100+ JavaScript Project Ideas for Beginners](https://jsbeginners.com/javascript-projects-for-beginners/)
* [15 React JS Project Ideas: Beginner to Expert](https://blog.nerdjfpb.com/project-ideas-for-react-js-beginners-to-expert/)

#### Some of my Personal Projects

* Cosmic Typer
* Cosmic Checker
* Sample APIs
* Game Rack
* Generic Starter Files
* Talks
* Futurama Quizzes

## Does this lead to success

Some say, success is being in the right place at the right time. While I agree that luck is involved, I would like to add that being prepared is very crucial. If the right opportunity comes up and you are not prepared for it, that opportunity will pass you by.

### Preparation and Luck

I firmly believe the opportunities have presented themselves to me because of my preparation.

### Impostor Syndrome

"Impostor Syndrome is a psychological pattern in which an individual doubts their skills, talents or accomplishments and has a persistent internalized fear of being exposed as a "fraud". Despite external evidence of their competence, those experiencing this phenomenon remain convinced that they are frauds, and do not deserve all they have achieved." - [Wikipedia](https://en.wikipedia.org/wiki/Impostor_syndrome)

I believe a small dose of this is healthy. This means you are aware of what you don't know and strive to know more. Striving to be better is a good thing.

This is a very slippery slope. One can quickly slip into down and never try anything new or challenge themselves. 

I bring this up to so you can be aware of what's this is called, not to scare you. You will feel this way multiple times in your career. It's ok. Things will click and understanding will happen.

## Sample APIs

### The problem

While I was teaching at a boot camp, we had 2 days set aside for learning RESTful APIs. How to CRUD. What HTTP Verbs meant. The first time I taught this class, I thought it would be cool to let the students pick any API they wanted. ( From a curated list, of course. ) And even with that we spent an entire day, just getting authenticated. The second time this happened, I thought there had to be a better way.

Authentication is an important part of the process, but does not matter when learning the basics.

### The history

Sample APIs started off as FuturamaDB. This had multiple endpoints for characters, actors, quiz questions, and general info. From here, I was able to teach the students how to build a Futurama Quiz. There was no need for authentication so we could purely focus on the API and quiz functionality.

Once I got Futurama down, I started thinking about other popular shows or books that I could build to help offer variety. So I created, SimpsonsDB, Game Of Thrones DB, Harry Potter DB, and Bobs Burger DB.

After taking a step back, I questioned the expense of having a domain for each random database I wanted to create. Instead, I figured it would make more sense to have one spot for any number of databases one could utilize. 

Sample APIs was born.

### Where it's currently at

We are currently on version 3.0 of the application. The front end is built in React and TypeScript. The back end is built with Node, Express, JSON-Server, and various utility tools. This lives in a mono-repo in my [GitHub](https://github.com/jermbo/SampleAPIs).

### The future

The rest of version 3 is about documentation and examples. The heart of this tool is learning, playing, and having fun. We need to expand on explanations. Provide fun examples to help inspire usage.

Future versions of this will include playgrounds for anyone to quickly start a temporary API. User profiles and the ability to have more permanent playgrounds.

Also, open for ideas!

### How can you contribute

There are a couple of ways to contribute. 

First, create a data set that you find interesting. The more data sets the merrier.

Create example applications using the data from the endpoints. My goal is to have a CodePen for every endpoint on the system.

Add or modify documentation. Collaborating on a better way to explain something is how this tool succeeds. 

