# Buffer

A buffer (is a 'buffer' really the best name for this?) represents a contigous block of memory/storage. While a buffer is inherently immutable, you can use another type to 'look' at a buffer and write to or read from it. For example, you can get the buffer for an array using the `storage` property of the array, and then create a second array with the buffer of the previous array. Both arrays will be referencing the same memory.

### `new Buffer(integer length)`

##### Parameters

* `integer` **`length`** - The `length` parameter specifies the length of the buffer in bytes. This is a required parameter, mostly because there is no point in having a buffer with a length of 0.

##### Returns

`new Buffer()` returns a new `Buffer` instance of length `length`. 

### `Buffer#copy()`

`Buffer#copy` returns a new `Buffer` which copies the memory from the buffer on which it is called. `Buffer#copy` is equivalent to calling `Buffer#slice` without any parameters.

##### Parameters

`Buffer#copy` doesn't take any parameters.

##### Returns

`Buffer#copy` returns a new `Buffer` instance which references a a copy of the original buffer.

### `Buffer#slice([integer startIndex = 0[, integer endIndex = this.length]])`

##### Parameters

* `integer` **`startIndex`** - `startIndex` optionally specifies the 

### `Buffer#transfer()`