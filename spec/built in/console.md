`console`: Interacting with the Console
=======

`console.log(str message)`
----------

`console.log` is a fairly self-explanatory method that logs a message on the console. Unlike `io.stdout.write()`, `console.log` will work on the client side as well, as opposed to only working on the command line or on a server.

```lithium

console.log("Hello World")
```

`console.timer(str name, bool state)`
-------------------------------------

`console.timer()` is a timer for use in timing functions and other parts of an application. A timer can be given a name, which will then be used later to refer to it. Passing `true` as the state parameter will cause the timer to be started, while passing `false` will stop the timer, log the timer name and time in the console, and clear the timer.

```lithium

console.timer("dosomething", true)

doSomethingThatTakesALongTime(randomvariable, anotherrandomvariable)

console.timer("dosomething", false)
```

`console.error(str title, str message, int code)`
-------------------------------------------------

`console.error()` provides a way to display an error in the console. The title paramter is required, while message and code are optional. The code parameter is useful for displaying, for example, a HTTP status code. Generally, in the console this message will show up in red text if this is possible. 

```lithium

console.error("Page not found", "The page requested wasn't found on the server", 404)
```

`console.warn(str title, str message, int code)`
------------------------------------------------

This is an alternative to `console.error()` for when an error isn't really that important. As opposed to `console.error()`, `console.warn()` will show up in light orange or yellow text if possible.

```lithium

console.warn("Request redirected", "The page requested wasn't found on the server so you have been redirected", 301)
```


`console.info(obj object)`
----------

`console.info()` displays information about an object. This allows you to see the properties and methods of an object in the console.

```lithium

console.info(io)
```