# Functions and Friends

While many languages only support functions, Lithium also supports Generators and Coroutines for even more fun and games.

### [Functions](./functions.md) (aka Procedures or Subroutines)

Functions (which can also be called procedures) in Lithium are like functions in almost any other language - they take a list of arguments and return a value. Lithium supports writing overloaded and generic functions, as well an anonymous functions (lambdas). 

Lithium does not currently enforce pure functions.

[Read documentation for functions...](./functions.md)

### [Constructors](./constructors.md) (aka Classes)

Constructors are special functions that are either invoked inplicitly when objects are created or invoked explicity with the `new` operator. Constructors cannot be called as normal functions by default, but this behavior is easily changed for individual classes.

In this documentation, 'constructor' refers to the function used to intialise an object, while 'class' refers to the constructor as well as the prototype and static methods/properties. For many programmers, the two will be indistinguishable in practice.

[Read documentation for constructors...](./constructors.md)

### [Generators](./generators.md)

Generators are a superset of functions which additionally allow for multiple values to be returned, and not all at once. When called, generators do not return a value, rather they return an Iterator that returns multiple values.

[Read documentation for generators...](./generators.md)

### [Coroutines](./coroutines.md) (aka Async/Await)

Coroutines are a further generalisation of Generators which allow for 

[Read documentation for coroutines...](./coroutines.md)