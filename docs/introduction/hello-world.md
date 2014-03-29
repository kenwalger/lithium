Hello World!
============

It's pretty much standard to write a "Hello World!" program when you're learning a programming language, so here's a couple for Lithium.

### Example 1

```lithium
console.log("Hello World!")
```

This example is about as simple as it gets - one line of code for one line of output. This will print `Hello World!` to the console.

### Example 2

```lithium
str message : "Hello World!"
ui.alert(message)
```

A bit more complicated this time. A variable of type `str` called `message` holds the value `"Hello World!"`. The function `ui.alert()` then takes the variable as a parameter and displays it as an alert message to a user.

Next up: [Notable Features](notable-features.md)