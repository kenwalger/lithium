# Lithium Language Specification

### Contents

1. [Scope](./scope.md)
2. [Definitions](./definitions.md)
3. [Specification Data Types](./data-types/index.md)
	1. [The `Reference` Type](./data-types/reference.md)
	2. [The `Byte` Type](./data-types/buffer.md)
	3. [The `Function` Type](./data-types/function.md)
	4. [The `List` Type](./data-types/list.md)
4. [Code Processing Flow](./process/index.md)
	1. [Tokenization](./process/tokenize.md)
	2. [Parsing](./process/parse.md)
	3. [Execution](./process/execute/index.md)
		1. [Runtime Environment](./process/execute/runtime.md)
		2. [Optimizations](./process/execute/optimize.md)
5. [Builtin Functions](./builtins/index.md)
	1. Macros and Tokens
		1. [The `create_macro` Function](./builtins/create_macro.md)
	2. Bytes
		1. [The `create_byte` Function](./builtins/create_byte.md)
		2. [The `get_byte` Function](./builtins/get_byte.md)
		3. [The `set_byte` Function](./builtins/set_byte.md)
		4. [The `destroy_byte` Function](./builtins/destroy_byte.md)
	3. Functions
		1. [The `create_function` Function](./builtins/create_function.md)
		2. [The `call_function` Function](./builtins/call_function.md)
		3. [The `get_function_ast` Function](./builtins/get_function_ast.md)
	4. Objects and References
		1. [The `create_object` Function](./builtins/create_object.md)
		2. [The `create_reference` Function](./builtins/create_reference.md)
	5. Lists
		1. [The `create_list` Function](./builtins/create_list.md)
		2. [The `get_list_item` Function](./builtins/create_list.md)
	6. Modules
		1. [The `import` Function](./builtins/import.md)
		2. [The `export` Function](./builtins/export.md)
	7. Binary Operators
		1. [The `bitwise_not` Function](./builtins/bitwise_not.md)
		2. [The `bitwise_and` Function](./builtins/bitwise_and.md)
		3. [The `bitwise_or` Function](./builtins/bitwise_or.md)
		4. [The `bitwise_xor` Function](./builtins/bitwise_xor.md)
6. [Macro Expansion and Semantics](./macros.md)
7. [Module Semantics](./modules.md)
8. [Abstract Syntax Tree](./ast/index.md)
	1. [Format](./ast/format.md)
	2. [Serialization](./ast/serialize.md)