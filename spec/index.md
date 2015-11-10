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
		1. [The `import_all` Function](./builtins/import_all.md)
		2. [The `import_name` Function](./builtins/import_name.md)
		3. [The `export_name` Function](./builtins/export_name.md)
	6. Binary Operators
		1. 
6. [Macro Expansion and Semantics](./macros.md)
7. [Module Semantics](./modules.md)
8. [Abstract Syntax Tree](./ast/index.md)
	1. [Format](./ast/format.md)
	2. [Serialization](./ast/serialize.md)