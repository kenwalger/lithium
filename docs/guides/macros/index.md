# Macro Guide

Macros in Lithium are pretty complicated, and many developers might only use them once or twice. 

Essentially, a Lithium macro consists of a pattern (which looks and functions like [EBNF](https://en.wikipedia.org/wiki/EBNF)) and a function which takes the tokens matched by the pattern and returns a branch of an abstract syntax tree. 

Because Lithium's syntax is more ALGOL than Lisp, Macros can get quite verbose and complicated. The fact that whitespace can be significant further complicates things.

