Lithium
-------

**Note: Lithium is currently under heavy, unfinished development and isn't usable yet. If you're interested in Lithium, send me an email: [thomasjamesfoster@bigpond.com](thomasjamesfoster@bigpond.com).**

*Don't know what this is all about? Skip to [#what-is-lithium]('What is Lithium?').*

This repo contains the Lithium standard library and the `lithium` command line tool, packaged as a module that works with a number of package managers (npm, cargo, etc.) and programming languages (this repo is an ES6 module, Python module, Rust crate, etc).

A compiler/interpreter/REPL for Lithium isn't included in this repo at the moment (a self-hosting compiler may be eventually, but that's not a priority), and so you can install modular compilers/interpreters instead. By default, **li.js** is the compiler/interpreter that's first available (mostly because that's the most complete one). A list of these compiler/interpreter modules is below:

* [li.js](http://github.com/thomasfoster96/li.js) - li.js transpiles/compiles Lithium code to ECMAScript 6/7 code. Babel, Browserify and Uglify are used by li.js to 
* [lillvm](http://github.com/thomasfoster96/lillvm) - lillvm compiles Lithium to LLVM IR code. li.js is probably much more stable than lillvm.

### What is Lithium?

Lithium is a programming language that is designed to be easy to re-implement, reduce gotchas, be easy to read, *<insert buzz-word here>*. It's got some pretty nice features that seem to be all the rage these days, such as an implementation that compiles to JavaScript and some things that LISP's had for 50+ years.

The language is based on a very small group of functions and objects, and the rest of the language is then built up using macros, subclassing and new function definitions. Indeed, syntax that's not a function call has been implemented using macros.

Lithium is very object-oriented, and every type has a corresponding class. 

### What does it look like?

This is some fairly basic Lithium code:

```lithium

```

### How do I use the command-line tools?

Open a REPL:
```bash
$ lithium
```

Run (interpret) a Lithium program:
```bash
$ lithium run myprogram.li
```

Compile a Lithium program to JavaScript:
```bash
$ lithium compile myprogram.li --target js --out myprogram.js
```