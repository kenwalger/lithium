# Loops

This file defines the macros for a range of loops.

### For Loop

A for loop consists of the keyword `for`, a set of parentheses containing a variable declaration 

```lithium
export macro ForLoop extends Loop (Identifier('for'), Space*, '(', ExpressionStatement a, ExpressionStatement b, ExpressionStatement c, ')', Statement+ d)
	return DoStatement(a, WhileLoop(b, DoStatement(d, c)));