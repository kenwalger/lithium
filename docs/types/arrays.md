Sets
====

Strings are one of the main data types supported by Lithium. A string is denoted by the keyword `str` when declaring a variable. Strings are always sourrounded by double quotes.

A string is declared as follows:

```lithium
array myArray : [1,2,3,4,5]
```

Strings also inhereit methods and properties from the `obj` type.

Properties
----------

### Array.length

Returns the number of elements in an array.

Methods
-------

Array.prototype.forEach()
Calls a function for each element in the array.
Array.prototype.entries() 
Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
Array.prototype.every()
Returns true if every element in this array satisfies the provided testing function.
Array.prototype.some()
Returns true if at least one element in this array satisfies the provided testing function.
Array.prototype.filter()
Creates a new array with all of the elements of this array for which the provided filtering function returns true.
Array.prototype.find() 
Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
Array.prototype.findIndex() 
Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
Array.prototype.keys() 
Returns a new Array Iterator that contains the keys for each index in the array.
Array.prototype.map()
Creates a new array with the results of calling a provided function on every element in this array.
Array.prototype.reduce()
Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
Array.prototype.reduceRight()
Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
Array.prototype.concat()
Returns a new array comprised of this array joined with other array(s) and/or value(s).
Array.prototype.join()
Joins all elements of an array into a string.
Array.prototype.slice()
Extracts a section of an array and returns a new array.
Array.prototype.toSource() 
Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method.
Array.prototype.toString()
Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.
Array.prototype.toLocaleString()
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.
Array.prototype.indexOf()
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.lastIndexOf()
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.
Array.prototype.pop()
Removes the last element from an array and returns that element.
Array.prototype.push()
Adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.reverse()
Reverses the order of the elements of an array -- the first becomes the last, and the last becomes the first.
Array.prototype.shift()
Removes the first element from an array and returns that element.
Array.prototype.sort()
Sorts the elements of an array in place and returns the array.
Array.prototype.splice()
Adds and/or removes elements from an array.
Array.prototype.unshift()
Adds one or more elements to the front of an array and returns the new length of the array.

Events
------