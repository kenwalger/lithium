# Binary Functions

Lithium includes a variety of binary functions. These operate on Buffers.

### `NOT(byte)`

##### Steps:
1. Assert that `byte` is a **Buffer**.
2. Return the one's complement of `byte`.

### `AND(firstByte, secondByte)`

##### Steps:
1. Assert that `firstByte` is a **Buffer**.
2. Assert that `secondByte` is a **Buffer**.
3. Return the result of performing the bitwise AND of `firstByte` and `secondByte`.

### `OR(firstByte, secondByte)`

##### Steps:
1. Assert that `firstByte` is a **Buffer**.
2. Assert that `secondByte` is a **Buffer**.
3. Return the result of performing the bitwise inclusive OR of `firstByte` and `secondByte`.

### `XOR(firstByte, secondByte)`

##### Steps:
1. Assert that `firstByte` is a **Buffer**.
2. Assert that `secondByte` is a **Buffer**.
3. Return the result of performing the bitwise exclusive OR of `firstByte` and `secondByte`.

### `left_circular_shift(byte)`

##### Steps:
1. Assert that `byte` is a **Buffer**.
1. Return the left circular shift of the bits in `byte`.

###