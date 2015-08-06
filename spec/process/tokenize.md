# Tokenization

### Tokenization Algorithm

*The following algorithm is executed with the input `sourceCode`, which must be a UTF8-encoded string (or string equivalent).*

1. Let `tokens` be a new List.
2. For each UTF-8 code point `codePoint` in `sourceCode`, do
    1. If `codePoint` has the Unicode property "ID_START", then
    2. Otherwise, if `codePoint` is any of the set 0x0030 through 0x0039, then
	    1. let `codePoints` be a List with the sole element being `codePoint`
	    2. h.
