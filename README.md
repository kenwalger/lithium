Lithium
-------

***Note: Lithium is currently under heavy, unfinished development and isn't usable yet.***

### What's Lithium?

Lithium is a programming language that is designed to be easy to re-implement, reduce gotchas, be easy to read, *<insert buzz-word here>*.

It's got some pretty nice features that seem to be all the rage these days, such as a reference implementation that compiles to JavaScript and LISP-style macros. 

The language is based on a very small group of functions and objects, and the rest of the language is then built up using macros, subclassing and new function definitions.

### What does it look like?

This is some fairly basic Lithium code:

```lithium
process.stdout.write("Hello World!") 

# Oh look, a comment! 

unless (os.cpus.length = 1)
	process.fork()

int random = 28484923

obj test

str wot = JSON.stringify(obj)	
```

### How do I use it?

Lithium is currently distributed as a [npm](https://npm.org/) package, which includes the `lithium` command line tool. 

If you've installed the Lithium package, you can use Lithium int he following ways:

*   Run the Lithium REPL by typing the following at the command line:
    ```bash
	lithium
	```

*   Run or translate Lithium in your Node.js app by requiring it as so:

    ```js
	var lithium = require('lithium');
	```

*   Use Lithium in the browser by including the lithium.js build:

    ```html
	<script src="/path/to/lithium.js"></script> 
    <script type="text/lithium"> 
	doSomething() 
	</script>
	```