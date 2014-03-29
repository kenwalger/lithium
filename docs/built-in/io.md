`io`: Input/Output
=======

The `io` object has everything you might need as far as input and output goes.

`io.stdin`
----------

The `io.stdin` object has three methods. They are as follows:

### `io.stdin.listen(str event, fn callback)`

To recieve data from stdin, add an event listener by using the `listen()` method. The only event to listen for at the moment on the `io.stdin` object is the 'data' event. The data is then passed to the callback function.

### `io.stdin.resume(void)`

By default the stdin stream is paused (as it is in node.js). You must call `io.stdinresume()` as soon as possible if you wish to recieve input via the stdin stream. And example is below:

```lithium

io.stdin.resume()

fn write(chunk)
    io.stdout.write(chunk)

io.stdin.listen('data', write(chunk))

io.stdin.pause()

```

### `io.stdin.pause(void)

This method pauses the `io.stdin` stream, so it is essentially the opposite of `io.stdin.pause()`.

`io.stdout`
-----------

The `io.stdout` object only contains one method, that being `io.stdout.write()`

### `io.stdout.write(str output)

The `io.stdout.write` method accepts one parameter, that being a string to output.

`io.stderr`
-----------

The io.stderr object conatins one method, being `io.stderr.write()`.

### `io.stderr.write(str message)`

Writes to stderr. Fairly simple.

```lithium

io.stderr.write('This is an error!')

```

`io.args`
---------

io.args is a read-only array of any command line arguments passed to the Lithium script/program.

```lithium

io.stdout.write(io.args)

```
