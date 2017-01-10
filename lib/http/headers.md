# Headers

```lithium
export class Headers extends Map<string, any>
```
`RequestHeaders` is the class for header on a `Request` object.

```lithium
export class RequestHeaders extends Headers

	set("Accept")

	set("Accept-Charset")

	set("Accept-Encoding")

	set("Accept-Language")

	set("Accept-Datetime")

	set("Authorization")

	set("Cache-Control")

	set("Connection")

	get("Cookie")

	set("Cookie", any value)
```

```lithium
export class ResponseHeaders extends Headers
```