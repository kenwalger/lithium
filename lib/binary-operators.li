

export function equal(lhs, rhs)
	try
		return lhs[Symbol.equal](lhs, rhs)
	catch
		return rhs[Symbol.equal](lhs, rhs)

export function lessThan(lhs, rhs)
	try
		return lhs[Symbol.lessThan](lhs, rhs)
	catch
		return rhs[Symbol.greaterThan](rhs, lhs)

export function greaterThan(lhs, rhs)
	try
		return lhs[Symbol.greaterThan](lhs, rhs)
	catch
		return rhs[Symbol.greaterThan](lhs, rhs)