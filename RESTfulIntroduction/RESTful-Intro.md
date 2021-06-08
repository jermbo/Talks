# REST Introduction

## Outline

	- Terms to know
	- Project Time
	- Key take-a-ways

## Terms to know

To make sure we are on the same page, let's discuss some basic terms everyone should be aware of.

### API

Application Programming Interface, **API**, is a set of routines, protocols, and tools for building software application. 

The API specifies what kinds of **calls** or **requests** that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.

### REST

REpresentational State Transfer, **REST**, is a software architectural style that developers apply to web APIs. 

REST APIs are the **most common** APIs used across the web due to the **simple**, **uniform interfaces**, and **extensive documentation**.

### CRUD

**CRUD** is an acronym for `Create` - `Read` - `Update` - `Delete`. These are the **basic functions** of any system interacting with databases.

### HTTP Verbs

The **HTTP** protocol has **verbs** we interact with when trying to **communicate** with the database. 

#### GET

The `GET` method requests a representation of the specified resource. Requests using `GET` should **only retrieve data**.

#### POST

The `POST` method is used to submit an entity to the specified resource, often **causing a change** in state or side effects on the server.

#### PUT
The `PUT` method **replaces all** current representations of the target resource with the request payload. 

*Be careful with this one, it will overwrite everything and replace it with exactly what you send it.*

#### PATCH

The `PATCH` method is used to apply **partial modifications** to a resource.

#### DELETE

The `DELETE` method **removes** the specified resource.

### Fetch

Fetch is JavaScript interface for **accessing** and **manipulating** parts of the HTTP pipeline.

`fetch(url, options)` 

- `url` is the endpoint the request is going to
- `options` is an optional object that modifies or sends more information to the endpoint
- a `promise` is returned from this function

### Endpoints

An **endpoint** is a location that an API can access the resources necessary to complete the action. When an API requests information from an web server a response will be returned. Usually with a **status code** and or a **payload**.

### Options

This object can define the HTTP verb, body data ( aka the payload ), headers, authorization tokens, and much more.  [Example](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)

```JavaScript
// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
```

### Status Codes

Depending on the result of the action, the server will respond with a **status code**.

There are a variety of things that can happen and codes are grouped into number ranges. [Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- 100 - 199 Informational Responses
- 200 - 299 Successful Responses
- 300 - 399 Redirects
- 400 - 499 Client Errors
- 500 - 599 Server Errors

Common status codes are:
- 200 and 201 are good to have. They represent `ok` and `created`.
- 400 is a bad request
- 401 user is unauthorized
- 404 not found
- 500 Internal server error. 

### Payload

Simply put, this is the **data that comes back** from an endpoint. 

### Promise

The `Promise` object represents the eventual completion (or failure) of an **asynchronous** operation and its **resulting value**.

```JavaScript
fetch(URL)
	.then(resp => resp.json())
	.then(data => console.log(data))
	.catch(error => console.log(error));
```

### Async / Await

The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a synchronous style.

```JavaScript
async function getData() {
	try {
		const resp = await fetch(URL);
		const data = await resp.json();
		console.log(data);
	} catch(error) {
		console.log(error);
	}
}
```

### Objects

At their simplest form, objects are a set of **Key** / **Value** pairs. 

The most common way to declare an object is via the object literal. 

```JavaScript
const person = {
	name: {
		first: "Jermbo",
		last: "Law"
	},
	occupations: ["Developer", "Instructor", "Mentor"],
	yearsExperience: 17,
	likesCoffee: true,
	favoriteLanguage: "JavaScript"
}
```

### JSON

JSON is a syntax for **serializing** objects, arrays, numbers, strings, booleans, and `null`. It is based upon JavaScript syntax but is distinct from it: some JavaScript is _not_ JSON.

```JavaScript
{
  "name": {
    "first": "Jermbo",
    "last": "Law"
  },
  "occupations": [
    "Developer",
    "Instructor",
    "Mentor"
  ],
  "yearsExperience": 17,
  "likesCoffee": true,
  "favoriteLanguage": "JavaScript"
}
```

## Project Time

The project we are going to build will be a simple app that touches the four HTTP verbs associated with a CRUD app. 

Here is the end result. [RESTful Intro](https://codepen.io/jermbo/pen/zYZWNjb)

## Key Take-a-ways

- RESTful APIs are very common.
- HTTP verbs are how you interact with.
- Endpoints are URLs you target to perform CRUD actions against.
- Status Codes tell you what is going on.