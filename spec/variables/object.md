Object
======

Object is a generic data type for an object. Every object in Lithium is descended from this object.

Methods
-------

Properties
----------

### `Object.prototype`

The `Object.prototype` 

Example:

```lithium
# Create two differnt object
obj foo : {name: "foo", one: 1, two: 2}
obj bar : {two: "two", three: 3}
 
# foo is now the prototype of bar
bar.prototype : foo
 
# If we try to access foo's properties from bar from now on, we'll succeed. 
bar.one
# >> 1
 
# bar also keeps its original properties.
bar.three
# >> 3
```
