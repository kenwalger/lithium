Sets
====

Strings are one of the main data types supported by Lithium. A string is denoted by the keyword `str` when declaring a variable. Strings are always sourrounded by double quotes.

A string is declared as follows:

```lithium
str myString : "Hello World!"
```

Strings also inhereit methods and properties from the `obj` type.

Properties
----------

### Set.prototype.size

Returns the number of values in the Set object.

Methods
-------

### Set.add(value)

Appends a new element with the given value to the Set.

### Set.clear()

Removes all elements from the Set. The value of the set will be null afterwards.

### Set.delete(value)

Removes the element associated to the value. Set.prototype.has(value) will return false afterwards.

### Set.has(value)

Returns a boolean asserting whether an element is present with the given value in the Set object or not.

Events
------