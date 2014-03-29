Object
======

Object is a generic data type for an variable. In practice, every variable in Lithium is extended from Object, but Object is actually extended from the `var` type. See the page for the `var` type for more on this.

Methods
-------

### `Object.listen(str eventType, fn callback( event ))`

The `Object.listen()` method creates an event listener for the object. The method accepts two parameters, `eventType` and `callback`. Both are required and an error will be raised of they are not passed.

`eventType` is a string referring to the name of the event to listen for, such as `"message"` or `"connection"`. This must not contain any spaces.

The `callback` parameter specifies a function to call when the event occurs. Optionally, data from the event can be passed as the first parameter to the callback function. The callback function must be declared before the event listener is added.

Example:

```lithium
fn alertMessage(message) : 
    ui.alert(message)
    return void
    
Server.listen("message", alertMessage(event))
```

Properties
----------

### `Object.prototype`

The `Object.prototype` property allows for prototypical inheritance between objects, as in Javascript.

Example:

```lithium
# Create two differnt object
obj foo : {name: "foo", one: 1, two: 2}
obj bar : {two: "two", three: 3}
 
# foo is now the prototype of bar
bar.prototype : foo
 
# If we try to access foo's properties from bar from now on, we'll succeed. 
bar.one
# >> 1
 
# bar also keeps its original properties.
bar.three
# >> 3
```

### `Object.class`

The `Object.class` property returns the class that the object is an instance of.

Example:

```lithium
obj hello : new Greeting()

console.log(hello.class)
# "Greeting" will be returned.
```

### `Object.type`

The `Object.type` property returns the type that the object is.

Example:

```lithium
var hello : new Greeting()

console.log(hello.type)
# 'obj' will be returned.
```

Events
------

### `prototype`

### `construct`

The `construct` event is fired when the object is constructed.

### `destruct`

The `destruct` event is fired when the object is destroyed. 