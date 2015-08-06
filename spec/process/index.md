# Code Processing Flow

The code processing flow refers to the process of tokenizing, parsing and executing Lithium source code. 

### [Tokenization](./tokenize.md)

Tokenization refers to the generation of tokens from am initial input stream of characters (UTF-8 encoded).

### [Parsing](./parse.md)

Parsing is the process of validating and expanding macros.

### [Execution](./execute/index.md)

Execution covers the running of Lithium code, be it in an interpreter or as a compiled binary.

##### [Runtime Environment](./execuation/runtime.md)

This section covers the specifics of the Litihum runtime environment.

##### [Optimizations](./execution/optimize.md)

This section covers the limitations of optional optimizations that a Lithium compiler or interpreter may perform.