# Immutable Map

The Immutable Map class is a variant of the Map class that is always immutable. Normal Maps can opt-in to being immutable, but ImmutableMap ensures that the Map is immutable.

```lithium
export default class ImmutableMap extends Map

	[constructor](...args)
		super(...args)
		this[mutable]: false

```
Any Map that is immutable will be recognised as an instance of this class.
```lithium
	static [isA](lhs) returns boolean
		return (lhs is a Map) and lhs[mutable] = false
```