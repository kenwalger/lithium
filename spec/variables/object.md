Object
======

Object is a generic data type for an object. Every object in Lithium is descended from this object.

Methods
-------

### `Object.listen(str eventType, fn callback( event ))`

The `Object.listen()` method creates an event listenr for the object. The method accepts two parameters, `eventType` and `callback`. Both are required and an error will be raised of they are not passed.

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
