# Lithium

***Note: Lithium is unfinished and isn't usable yet. If you're interested in learning a bit more about this project, send me an email: [me@thomasfoster.co](me@thomasfoster.co).***

Hi there! Lithium is a programming langauge that was designed by a self-confessed amateur and subsequently combines too many ill-considered ideas into the one monolithic package. It is highly recommended for those who appreciate sarcasm in README files, those who don't like parentheses and braces but love verbosity and whitespace, those who are prepared to make some coffee while waiting for their program to run (not just compile), and those who think that Lisp, Haskell and Smalltalk aren't flawed enough to be used in production.

A simple "Hello, World!" program in Lithium looks pretty similar to every other "Hello, world!" program ever written:
```lithium
print("Hello, World!")
```

Perhaps you'd like to see a web server? Here's how you make one of those:
```lithium
import {Server} from 'http'

constant server: new Server()

async for [request, response] of server
	response.end("Hello, World!")

server.listen(80)
```
The above code imported the `Server` class from the `http` package, initialised a new server, created an asynchronous for loop that observed requests made to the server and responded with "Hello, World!", and then told the server to listen on port 80.

### Installation

Lithium currently lives on [npmjs.org](npm). You can install it like this:
```bash
npm install -g <package name>
```
The `lithium` command will now be available, and a JavaScript-based compiler/interpreter will be available. See below for more on compilers and interpreters.

Yes, npm is far from perfect. If you'd like Lithium to be available 

### Docs

There are several types of documentation in this repository, each serving a different need:
* The [*`docs` directory*](./docs/index.md) contains documentation for programmers, covering syntax, the standard library, authoring packages, using compilers and interpreters, as well as frequently asked questions and further resources. This should be your first port of call.
* The [source code of the standard library](./lib/README.md) is embedded in Markdown documents, with the code extracted from these annotated documents before being run. These annotations are more for browsing and procrastination than for reference.
* The [*`spec` directory*](./spec/index.md) contains documentation for people seeking to implement the Lithium language, i.e. compiler and interpreter authors.  

### Usage