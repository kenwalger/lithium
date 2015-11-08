# JSON

The JSON module almost exactly mirrors the JSON object found in ECMAScript and JavaScript. `JSON.parse` does what it would be expected to, and `JSON.stringify` works exactly as you'd expect it too.

### `JSON.parse(string text [, function reviver(string key, any value)])`

*Code: [../../lib/json/parse.li](json/parse.li)*

`JSON.parse` parses a string containing JSON data and returns the representation of the object encoded in the JSON string as a native Lithium value.

##### Parameters:

* `string` **`text`** - 
* `function` **`reviver(string key, any value)`** - The `reviver` function recieves two parameters - the 

##### Returns:

`JSON.parse()` can return any value. Usually it will return a plain `Object` or an `Array` with element type `Any`, but it can also return a `Number` or a `String`.

### `JSON.stringify(any object [, function replacer [, string|number space]])`

*Code: [../../lib/json/stringify.li](json/stringify.li)*

##### Parameters:

* `any` **`object`** - 
* `function` **`replacer`** - 
* `string|number` **`space`** - 

##### Returns:

`JSON.stringify` will always return a valid JSON string, or it will throw an error. 