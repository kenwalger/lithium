# Async Map

Async Map is a variant of the Map class designed for use when a Map experiences a delay in retrieving values (e.g. the values are in a key/value store). It supports the normal Map API, but returns Promises.

```lithium
export default class AsyncMap extends Map
```