# Length

## SI (Metric) Units



```lithium
export class Metre<Integer magnitude: 1> extends Unit
	
export alias Meter: Metre
export alias m: Metre

```

## Imperial Units

Imperial units are also supported for lengths by Lithium.

```lithium
export class Inch extends Unit
	
	convert(number x, (Metre))
		return (x*0.0254) metres

	convert(number x, (Foot))
		return (x/12) feet

	convert(number x, (Yard))
		return (x/36) yards

export alias in: Inch
export alias inch: Inch
export alias Inches: Inch
export alias inches: Inch

```

```lithium
export class Foot extends Unit

	convert(number x, (Metre))
		return (x*0.3048) metres

	convert(number x, (Inch))
		return (x*12) inches

	convert(number x, (Yard))
		return (x/3) yards

export alias Feet: Foot
export alias feet: Foot
export alias foot: Foot
export alias ft: Foot

```

```lithium
export class Yard extends Unit

	convert(number x, (Metre))
		return (x*0.9144) metres

	convert(number x, (Inch))
		return (x*36) inches

	convert(number x, (Foot))
		return (x*3) feet

export alias Yards: Yard
export alias yards: Yard
export alias yard: Yard
export alias yd: Yard

```

```lithium
export class Chain extends Unit

	convert(number x, (Metre))
		return (x*20.1688) metres

	convert(number x, (Foot))
		return (x*66) feet

	convert(number x, (Yard))
		return (x*22) yards