# Vectors

Vectors are a structured data type for use with SIMD instructions. While vectors are available for all datatypes, there is pretty much no reason why you'd use them for anything other than Integers and Floats (and sometimes Fixeds). Vectors can also be of arbitrary length, although unless a Vector is of a length supported by a CPU's SIMD instruction set, your Lithium program probably 

Vector types are usually named as the vector's element type and the size of the vector, joined with an 'x'. For example, a vector of 4 32-bit integers would be called `int32x4`.