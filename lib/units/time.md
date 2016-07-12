# Time Units

Five units of time are supported - seconds, minutes, hours, days and years. 

The first unit of time defined is the Second.
```lithium
export class Second extends Unit
	
	convert(number x, (Minute))
		return (x/60) minutes

	convert(number x, (Hour))
		return (x/3600) hours

	convert(number x, (Day))
		return (x/86400) days

	convert(number x, (Year))
		return (x/31577600) years
```
There are four aliases for the Second class, so programmers can use their preferred abbreviation for 'seconds'.

```lithium
export alias s: Second
export alias sec: Second
export alias second: Second
export alias seconds: Second
```
### Minutes

Next up is 
```lithium
export class Minute extends Unit

	convert(number x, (Second))
		return (60*x) seconds

	convert 