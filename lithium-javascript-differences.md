# Lithium - JavaScript Differences

### `typeof` and `instanceof`  aren't used at all.

### `==` and `===` work differently.

The equality tests in Lithium are much stricter than those in JavaScript. 

JavaScript's two main comparison operators (`==` an `===`) 

Generally, each type in Lithium implements its own handler for equality tests - so the operator can be overloaded. By default, nothing is equal to anything unless you are comparing two references to the same object. The `Number` and `String` classes, for example, then override this behaviour to return true if two `Number` or `String` objects have the same value.
