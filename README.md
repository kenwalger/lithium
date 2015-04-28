Lithium
-------

**Note: Lithium is currently under heavy, unfinished development and isn't usable yet. If you're interested, my email address is on my profile page.**

This repo contains the Lithium standard library, a REPL and some command line tools to work with various implementations of Lithium. I ([Thomas Foster](http://thomasfoster.co/)) am personally working to an extent on two implementations of Lithium:

* [li.js](http://github.com/thomasfoster96/li.jsjs) - li.js transpiles/compiles Lithium code to ECMAScript 6/7 code. Babel, Browserify and Uglify are used by li.js to 
* [lillvm](http://github.com/thomasfoster96/lillvm) - lillvm compiles Lithium to LLVM IR code. li.js is probably much more stable than lillvm.

### What's Lithium?

Lithium is a programming language that is designed to be easy to re-implement, reduce gotchas, be easy to read, *<insert buzz-word here>*. It's got some pretty nice features that seem to be all the rage these days, such as a reference implementation that compiles to JavaScript and things that LISP has been doing for 50+ years.

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

If you've installed the Lithium package, you can use Lithium in the following ways:

* Run the Lithium REPL by typing the following at the command line:
  ```bash
  lithium
  ```
      
