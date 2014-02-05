Lithium
=======

Contents
--------

*   [What's Lithium?](#whats-lithium)
*   [Syntax and Design](#syntax-and-design)
*   [Features](#features)
*   [License](#license)
*   [Using Lithium](#using-lithium)
*   [Roadmap and TODOs](#roadmap-and-todos)
*   [FAQ](#faq)

What's Lithium?
---------------

Lithium (_yes, it's capitalised!_) is sort of like a four-way mash between JavaScript, Python, Ruby and the maths you learnt in high school. Most people should be able to understand it within an hour, assuming they have a bit of experience with using a computer (meaning that you've done more than open IE, check your emails and write a Word doc).

The name Lithium comes from, well, the element lithium. Lithium is the lightest metal, yet powers everything from your laptop to your phone to torches to cars. This is sort of the aim with Lithium - create something which is lightweight and can be used almost anywhere.

Syntax and Design
-----------------

Lithium's syntax has been crafted with a few ideas in mind, which are below:
* Code is written once but read many times.
* Simple programs should only require a simple understanding to read and write.
* Be feature rich, but not feature heavy.
* Follow standards where practical.
* Everyone's use will be different

While Lithium should be something you can quickly write and use, _we are_ prepared to sacrifice a little bit of speed of coding for speed of understanding later on. Whilst it might be a few seconds quicker to write code one way, it is probably better to sacrifice those few seconds now so that they don't turn into hours later on.

Simple Lithium programs, such as a "Hello World!" example, shouldn't be any longer than they need to be. A Hello World! program only outputs a line of text, so why should the program itself be longer than one line? Keeping Lithium lightweight ultimately makes Lithium code easier to learn, more readable and easier to work with.

Lithium should be feature rich, not feature heavy. This means that there should be lots of freatures to use, but these shouldn't impact someone who doesn't need to use them. They shouldn't make Lithium any slower by being there, nor should someone need to use more features than they should.

Lithium also follows widely accepted standards where possible. The Units feature, for example, only works with SI units. If Lithium works with standards in the worlds of Maths or Science, it should make Lithium much more useful.

Finally, everyone will use Lithium in a different way. Things should be done in a way that suits everyone's needs and requirements.

Features
--------

These are better explained in the docs but features include:
* Units.
* Varied data types such as `int`, `dec`, `str`, `bool`, etc.
* `for`, `while`, `until`, `if`, `else`, and all that stuff.
* Functions are first class objects.
* Classes and prototyping.

License
-------

Lithium is licensed under the MIT License. You can find a copy in the [LICENSE.md](LICENSE.md) file included in this directory.

Using Lithium
-------------

This repository simple includes documentation for Lithium. Actual implementations are coming soon.

Roadmap and TODOs
-----------------

Lithium is intended to be a continually evolving language. Anyone (developers using Lithium, contributors to a Lithium implementation or contributors to this spec) is invited to submit feature requests as an issue on Github with the label 'feature request'. Accepted feature requests will make it to the [ROADMAP.md](ROADMAP.md) file.

The [TODO.md](TODO.md) file has a list of features and bigfixes needed for the next release. If you want to contribute, that's a good place to start.

Versioning
----------

Lithium roughly follows the [Semantic Versioning](http://semver.org/) standard., but not perfectly. Releases are available at the [project's releases page](https://github.com/thomasjamesfoster96/lithium/releases). They follow the `major.minor.patch` scheme.

Major versions are for when backwards compatabilty with the previous version is broken, such as a major redesign or the removal of any features. Minor versions are releases when features are added or deprecated, and retain backwards compatability. Patches are releases to fix bugs or typos.

Contributing
------------

Anyone can help out! Check out CONTRIBUTING.md for more information.
