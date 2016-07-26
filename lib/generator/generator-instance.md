# Generator

Generator statements are rewritten by a macro into a class which is created when the generator function is called. The resulting class implements the 

```lithium

Symbol state: 'state'

export default class Generator implements Iterator 

	[constructor]()

	Map [state]: new Map<string, any>()

	next(value?) -> Pair<any, boolean>

		let result: 

```