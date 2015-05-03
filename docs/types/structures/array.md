# Array

`AnyArray` and `ObjectArray` are references to `Array`. It is reccomended not to use `Array` (or its synonyms) unless the elements of your array are going to be of ***any** type. Arrays with a given type are much much faster.

Some common array types:

| Array type name | Element Type | Element Size (bytes) |
|:----------------|:-------------|---------------------:|
| `IntegerArray`  | `Integer`    | `undefined`          |
| `Integer32Array`| `Integer32`  | `4`                  |
| `FloatArray`    | `Float`      | `undefined`          |

### `new Array([buffer buffer | integer length | iterator iterator [, integer length]])`

##### Parameters

The `Array` constructor can only take one or two of three possible parameters:

* `buffer` **`buffer`** - A buffer which the new Array will be a view of. This is usually useless unless you are using an array that has elements of a fixed size in memory (e.g. `ByteArray`, `Int32Array` or `Float64Array`).
* `integer` **`length`** - The length of the array to be created. The `length` property will be constant if specified in the constructor. 
* `iterator` **`iterator`** - An iterator which will be iterated over to generate the elements of the array. If `length` is provided, the iterator will only be iterated over `length` times.

##### Returns

A new instance of `Array` will be returned.

### `Array#elementSize`

### `Array#elementType`

Returns the element type of the array. This is determined at 

### `Array#length`

`Array#length` returns the 

If the length of the array was set using the constructor length parameter, then trying to set the length will 

Setting the length of an array that doesn't have a constant length will either truncate the array or pad the array with `undefined` values.