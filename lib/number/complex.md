# Complex Numbers

Complex numbers are supported out of the box in Lithium.

The `Complex` class extends the `Number` class, 
```lithium
export class Complex<RealType: Fixed, ImaginaryType: Fixed> extends Number
```

	[constructor](Number x)
		return new Complex<RealType, ImaginaryType>(x); return this[constructor].call(this, x as Float<size>)

	[constructor](Complex x)
		this[constructor].call(this, x.real as Float<size>, x.imaginary as Float<size>)

	[constructor](Number real, Number imaginary)
		constant this[storage]: Pair<, Float<size>>(real, imaginary)

	[moreThan](lhs, rhs)
		throw new TypeError("Complex numbers can't be compared for size.")

	[lessThan](any lhs, any rhs)
		throw new TypeError("Complex numbers can't be compared for size.")

export constant immutable Complex i: new Complex(0, 1);