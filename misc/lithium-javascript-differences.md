# Lithium - JavaScript Differences

### `typeof` and `instanceof` are the same in Lithium, but different in JavaScript.

JavaScript has a unary `typeof` operator, which returns the name of a variable's primitive type as a string, as well as a binary `instanceof` operator which tests to see whether an object (left hand side) is an instance of a constructor (right hand side).

Every object prototype in Lithium has a `Symbol.constructor` property, which returns the functon used to create an object. 

### Comparisons work differently.

The equality tests in Lithium are much stricter than those in JavaScript. JavaScript's `===` operator, which returns false if the type of operands is different, 

Generally, each type in Lithium implements its own handler for equality tests - so the operator can be overloaded. By default, nothing is equal to anything unless you are comparing two references to the same object. The `Number` and `String` classes, for example, then override this behaviour to return true if two `Number` or `String` objects have the same value.
