
```lithium
export class Map extends Collection

	# Maps use a two dimensional Array for storage. The first dimension has an 
	# unknown length, the second has a length of two.

	storage = new Array(unknown, 2);

	[Symbol.constructor](Iterable data = new Array())
		for (let pair of data)
			if (pair.length = 2)
				this.storage.push(pair)
			else
				throw new TypeError()


	# Map can be called as a function with two arguments ('key' and 'value') and 
	# will return a subclass of Map where keys will have to be instances of 
	# 'key' and values have to be instances of 'value'.

	[Symbol.call](Class key = Object, Class value = Object)

		return class extends Map
			get [Symbol.keyType]()
				return key

			get [Symbol.valueType]()
				return value

	set size()
		raise new Error("Can't set the size of a Map.")

	get size()

	clear()

	delete(key)

	* entries()

	forEach(Function callbackFn, Object thisArg)

	get(key)

	has(key)

	* keys()
		return this[keysStorage]()

	set(key, value)

	* values()
		return this[valuesStorage]()

	[Symbol.iterator]()
		return this.entries()
```