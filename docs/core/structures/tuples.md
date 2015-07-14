# Tuples

Tuples are special arrays, often used for returning multiple values from a function. Tuples are immutable.

Tuples are probably best used for multiple return values, as in this example:
```lithium
function tupleReturner
	return (string "Hello", string " ", string "World!")

string (first, second, third) = tupleReturner() # first is now "Hello", second is " ", etc.
```

