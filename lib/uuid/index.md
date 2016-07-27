# UUID

This class defines 

```lithium
export default class UUID

	[constructor]
```

UUIDs can be compared not only for equality but also for less than or greater than comparisons. 

Why? [Python is your guide.](https://hg.python.org/cpython/file/3.5/Lib/uuid.py#l191)

```lithium
	[equals]()

	[lessThan]()

	[Symbol.greaterThan]()
```

```lithium
	get [hash]()
		return this[Symbol.storage][Symbol.hash]

	to<String>() returns string

		string hex: this.to<Int>().to<String>(16)

		return '{{hex[...8]}}-{{hex[8...12]}}-{{hex[12...16]}}-${hex[16...20]}-${hex[20...]}'
```