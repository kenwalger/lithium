# Parsing

### Parser Algorithm

*The following algorithm is run with one argument, `tokens`, which should be a list of tokens as parsed by the [Tokenizer Algorithm]()*

1. Assert `tokens` is a List of tokens.
2. Let `ast` be the result of performing the Initial Pass Algorithm below with `tokens`.
3. Let `changes` be True.
4. While `changes` is true, do
	1. Let `result` be the result of performing the Subsequent Passes Algorithm as outlined below with the argument `ast`.
	2. Let `ast` be `results`'s `value` property.
	3. Let `changes` be `results`'s `changes` property.
5. Let `ast` be the result of performing the Last Pass Algorithm as outlined below with the argument `ast`.
6. Return `ast`.

### Initial Pass Algorithm

*The following algorithm is run with one argument, `tokens`, which should be a list of tokens as parsed by the [Tokenizer Algorithm]()*

### Subsequent Passes Algorithm

*The following algorithm is run with one argument, `ast`, which should be a representation of a Lithium Abstract Syntax Tree.*

### Last Pass Algorithm

*The following algorithm is run with one argument, `ast`, which should be a representation of a Lithium Abstract Syntax Tree.*

