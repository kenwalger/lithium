export class Integer<UnsignedInteger length> extends Number

	[Symbol.constructor](value)

	[Symbol.add](lhs, rhs)
		
export alias Int: Integer
export alias int: Integer
export alias integer: Integer

export alias Int8: Integer<8>
export alias int8: Integer<8>
export alias Int16: Integer<16>
export alias int16: Integer<16>
export alias Int32: Integer<32>
export alias int32: Integer<32>
export alias Int64: Integer<64>
export alias int64: Integer<64>

export class UnsignedInteger<UnsignedInteger length> extends Integer

	[constructor](List<Byte> bytes)

	[constructor](List<Bit> bits)