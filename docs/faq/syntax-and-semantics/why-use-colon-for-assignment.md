# Why use `:` for assignment over `=`?

Trying to deal with the fact that both assignment and equality naturally use the `:` operator is a problem that many langauge designers have encountered. 

The colon was chosen because it is:
1. Already used in many languages for some form of assignment, e.g. `:` within object literals in JavaScript, etc.; together with the equal sign as `:=` or `=:` in languages such as...
2. Isn't needed or used by any other operator where there would be confusion or ambiguity. It is used in the bind operator (`object::method(args)`), but the distinction between bind and assignment is pretty clear - bind cannot have space around the operator while assign can, etc.

