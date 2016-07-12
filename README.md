Lithium
-------

**Note: Lithium is unfinished and isn't usable yet. If you're interested in learning a bit more about this project, send me an email: [me@thomasfoster.co](me@thomasfoster.co).**

This project contains the Lithium standard library, Lithium docs, a node.js API, a language specification and the `lithium` command line tool (prototype package manager included), released as a [node.js](https://nodejs.org/) package to be published on [npm](https://npmjs.com/).

Note that this project *does not* include a compiler or interpreter for Lithium - this is being developed in a separate repository (see below). It is intended that the `lithium` command line tool will become a sort of build/run tool, with a modular compiler system. At the moment, the only compiler/interpreter is the following:

* [li.js](http://github.com/thomasfoster96/li.js) - li.js transpiles/compiles Lithium code to ECMAScript code. Using Babel, Browserify and Uglify it can output code for a variety of platforms, ECMAScript versions and requirements.
