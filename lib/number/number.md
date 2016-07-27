# Number

The number class isn't the 

```lithium
export default class Number

	[constructor](number x)
		return new Decimal64(x)

```
Numbers are immutable by default.

```lithium
	[mutable]: false
```

Alright, this next bit's pretty cool.

Because the `[call]` method can be overwritten (replacing the default behavior of throwing an error), the `[call]` method on numbers is takes a single argument that must be another `number`. This allows for implicit multiplication, like this:
```
(expression(returning(theNumber(5))))(10) # Evaluates to 50
5(2*5) # Evaluates to 50
```
I think that's pretty cool. The implementation is below:
```lithium
	[call](number arg) returns number
		return this[multiply](arg)
```