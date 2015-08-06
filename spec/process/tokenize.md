# Tokenization

### Tokenization Algorithm

*The following algorithm is executed with the input `sourceCode`, which must be a UTF8-encoded string (or string equivalent).*

1. Let `tokens` be a new List.
2. For each UTF-8 code point `codePoint` in `sourceCode`, do
	a. If `codePoint` has the Unicode property "ID_START", then
	b. Otherwise, if `codePoint` is any of the set 0x0030 through 0x0039, then
		i. let `codePoints` be a List with the sole element being `codePoint`
		ii. 