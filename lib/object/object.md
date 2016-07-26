# Object

The base class or top type in Lithium is the Object class. Every class inherits from it, either explicitly or implicitly (if you don't specify a class to extend, Object will be used automatically), and it defines a lot of useful default values for properties.

The Object constructor either takes another object as an argument, or no argument at all. If the argument is provided, the object is 

```lithium
export default class Object

	[constructor](any object)
		

	[destructor]()
```

Objects can be either immutable or mutable. Well written classes will check to see that an instance is mutable before modifying values using methods.  

```lithium
	boolean [mutable]: true

```



```lithium
	# Core 
	[Symbol.get](any property)
		return get(this, property)
	[Symbol.set](any property, value)
		return 

	# Equality and identity operators.
	[Symbol.equal](rhs)
		return this[is](rhs)
	[Symbol.is](rhs)
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