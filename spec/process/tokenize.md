# Tokenization

### Tokenizer Algorithm

*The following algorithm is executed with the input `sourceCode`, which must be a UTF8-encoded string (or string equivalent).*

1. Let `tokens` be a new List.
2. Let `length` be the number of UTF-8 codePoints in `sourceCode`.
3. Let `i` be 0.
4. While `i` is less than `length`, do
	1. Let `codePoint` be the `i`th codePoint in `sourceCode`.
    2. If `codePoint` has the Unicode property "ID_START", then
    	1. Let `codePoints` be a new List with `codePoint` as the sole element.
    	2. Increment `i`.
    	3. Let `codePoint` be the `i`th code point in `sourceCode`.
    	4. While `codePoint` has the Unicode property "ID_CONTINUE", do
    		1. Append `codePoint` to `codePoints`.
    		2. Increment `i`.
    		3. Let `codePoint` be the `i`th code point in `sourceCode`.
    	5. Let `token` be a new Token.
    	6. Set the `name` slot of `token` to the string formed from the code points in `codePoints`.
    	7. Set the `type` slot of `token` to Identifier.
    	8. Append `token` to `tokens`.
    3. Otherwise, if `codePoint` is any of the set of code points form 0x0030 through 0x0039, then
	    1. Let `codePoints` be a List with the sole element being `codePoint`
	    2. Increment `i`.
	    3. Let `codePoint` be the `i`th code point in `sourceCode`.
	    4. While `codePoint` is any of the set of code points from 0x0030 through 0x0039, do
	    	1. Append `codePoint` to `codePoints`.
	    	2. Increment `i`.
	    	3. Let `codePoint` be the `i`th code point in `sourceCode`.
	    5. Let `token` be a new Token.
	    6. Set the `value` slot of `token` to the string formed from the code points in `codePoints`.
	    7. Set the `type` slot of `token` to Number.
	    8. Append `token` to `tokens`.
	4. Otherwise, do
		1. let `token` be a new Token.
		2. Set the `value` slot of `token` to the string formed from the code point `codePoint`.
		3. Set the `type` slot of `token` to Token.
		4. Append `token` to `tokens`.
5. Return `tokens`.
