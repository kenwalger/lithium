# Object

The base class or top type in Lithium is the Object class. Every class inherits from it, either explicitly or implicitly (if you don't specify a class to extend, Object will be used automatically), and it defines a lot of useful default values for properties.

The Object constructor either takes another object as an argument, or no argument at all. If the argument is provided, the object is 

```lithium
export default class Object

	[constructor](any object)
		

	[destructor]()
```

Objects can be either immutable or mutable. Well written (!) classes will check to see that an instance is mutable before mutating data (such as a string or property). Once you set the `[mutable]` property to `false`, it will be impossible to change it back to `true`.
	
```lithium
	boolean [mutable]: true

```
In some cases, it is useful for a Lithium object to be coerced to a different value when needed - for example, Expressions and Aliases. In these cases, the `[value]` is used rather than the object itself - but to avoid problems, this values default to `this`.

```lithium
	[value]: this
```

These are the default getter and setter for all properties on an object.

```lithium
	[get](any property)
		return get(this, property)

	[set](any property, any value) returns any, throws Error
		if this[mutable]
			return set(this, property, value)
		else 
			throw new Error("This object is immutable.")

```

Comparison operators work as expected. By default, the `=` operator calls the `is` operator.

```lithium
	[equal](rhs) returns Boolean
		return this[is](rhs)
	[is](rhs) returns Boolean
		return same(this, rhs)
	[Symbol.isA](rhs)

	# No iterator for Objects at the moment.
	[Symbol.iterator]()
		raise new TypeError("You can't iterator over an Object.")
	[Symbol.observer]()
		raise new TypeError("You can't observe an Object.")

```

Mathematical operators are also defined on the Object prototype, which helps to give better error messages when you try to add two object. 

```lithium
	[Symbol.add](rhs) throws TypeError
		raise new TypeError("You can't add two objects.")
	[Symbol.subtract](rhs) throws TypeError
		raise new TypeError("You can't subtract two objects.")
	[Symbol.multiply](rhs) throws TypeError
		raise new TypeError("You can't multiply two objects.")
	[Symbol.divide](rhs) throws TypeError
		raise new TypeError("You can't divide two objects.")
```