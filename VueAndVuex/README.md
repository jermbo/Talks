# Vue: Managing Global State with Vuex

Managing state in a front end frame work can be difficult and brittle if you utilize only the base features out of the box. We will explore how Vue handles state and how Vuex can help solve some common problems.

## Vue Components

Before we can get into state management, we need to cover a couple basic topics that will help expose the issue.

Components are reusable Vue instances with a name. Since components are Vue instances, they accept the same options as a `new Vue` instance. Such as `data`, `computed`, `watch`, `methods`, and the life cycle hooks. The only exception are a couple root-specific options like `el`.

```JavaScript
Vue.component('button-counter', {
  template: '<button @click="addOne">You clicked me {{ count }} times.</button>',
  data: function () {
    return {
      count: 0
    }
  },
  methods: {
    addOne(){
      this.count++;
    }
  }
})
```

## How does child component get data? Pass it a prop.

I mentioned that Components are just Vue instances and have the same options. There are a couple of Component specific options that make a Component special, `props`.

In the example of button, it has a `data` property which returns an object of this components data. This means, every time a button is created and utilized it will have its own `count` and handle its own click events.

Lets look at another example, maybe a blog post.

```JavaScript
Vue.component('blog-post', {
  template: '<h3>Hello World</h3>'
})
```

After registering the component we can utilize it in our site like so.

```HTML
<blog-post></blog-post>
<blog-post></blog-post>
<blog-post></blog-post>
```

If we were to utilize it like as is, all you would git is an `h3` with the same text.

```HTML
<h3>Hello World</h3>
<h3>Hello World</h3>
<h3>Hello World</h3>
```

That's not very useful. So let's pass some data to the component. We can achieve this via the props.

```JavaScript
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{title}}</h3>'
})
```

When utilizing the component you add an attribute to the instance and pass in the data desired.

```HTML
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Vue is so much fun!!"></blog-post>
```

The output will display the data passed in, instead of same text in the example before.

```HTML
<h3>My journey with Vue</h3>
<h3>Blogging with Vue</h3>
<h3>Vue is so much fun!!</h3>
```

## How does a parent know something changed? Emit an event.

Now that we have data flowing to a child, we probably need to interact with that data. If the component is self contained, how can we change it and let the parent know about that change?

Through emitters, that's how.

Let's take a look at that button example, but get the data from the parent instead.

```JavaScript
Vue.component('button-counter', {
  props: ['count'],
  template: '<button @click="addOne">You clicked me {{ count }} times.</button>',
  methods: {
    addOne(){
      this.count++;
    }
  }
})
```

You could implement it like this.

```HTML
<div id="app">
  <button-counter :count="globalCount"></button-counter>
  <p>Global Counter: {{globalCounter}}</p>
</div>
```

```JavaScript
new Vue({
  el: "#app",
  data() {
    return {
        globalCount: 0
    }
  },
  components: [
    'button-counter',
  ]
})
```

The end result will be [ INSERT PICTURE HERE ]

The problem we are presented with is, the parent doesn't know the child changed. The paragraph outside the `button-counter` does not update as we expect it to. We need to update the child component to emit and event.

```JavaScript
Vue.component('button-counter', {
  props: ['count'],
  template: `<button @click="$emit('incrementGlobal')">You clicked me {{ count }} times.</button>`
})
```

Adjust our html a little bit.

```HTML
<div id="app">
  <button-counter :count="globalCount" @:incrementGlobal="onIncrement"></button-counter>
  <p>Global Counter: {{globalCounter}}</p>
</div>
```

Finally, create a method that listens to the change.

```JavaScript
new Vue({
  el: "#app",
  data() {
    return {
      globalCount: 0
    }
  },
  components: [
    'button-counter',
  ],
  methods: {
    onIncrement(){
      this.globalCount++;
    }
  }
})
```

## Example architecture

So far the examples have been one level deep and not very complex. What about deeply nested components or unrelated components that need information. Let's take an example of a shopping cart as an example. Without any code we can picture some a simple cart that needs a lot of information.

[ INSERT CHART OF CART ]

