Syntax
======

Contents
--------

This page has information about comments and code blocks.

* [Structure](syntax/structure.md)
* [Variables](syntax/variables.md)
* [Statements](syntax/statements.md)
* [Expressions](syntax/expressions.md)
* [Units](syntax/units.md)

Code Blocks
-----------

Lithium's syntax is similar to that of languages like Python and Ruby, in that it follows the 'off-side rule'. Code blocks are delimited by tab indents, with lines ended with a newline character.

```lithium
var wow : "such doge"
fn sayDoge():
	var wow = "many doge"
	console.log(wow) # "many doge"
console.log(wow)     # "such doge"
sayDoge()            # "many doge"
```

Comments
--------

A `#` denotes a line comment. Any code to the right hand side of the comment won't be run. 

```lithium
thisWillRun()

# thisWont()
```

Lithium doesn't have any block commenting style, so you will have to comment each line out individually. 

```lithium
# This
# is as 
# close
# as you
# can get
# to a
# block
# comment.
```