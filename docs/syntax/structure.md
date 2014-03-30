Structure
=========

Entry Points
------------

Lithium defines three functions which are used within programs: `main()`, `loop()` and `paint()`.

When a program written in Lithium is run, the main() function will be executed after any pachages are imported. Then, after main() is run, both loop() and paint() will be run continuously, beginning as soon as possible after main() has run.

The difference between loop() and paint() is that loop() immediately again, while paint() will be run when the next repaint can occur.

It is not necessary to define these functions in a program, but the loop() and paint() functions will require the main() function to have been defined.

### main()

```lithium
fn main() : 
	console.log("started")
```	

The main() function does not need any arguments (as any input to the program will already be in the global scope), but you can include some if you want.

It is highly reccomended that the main() function is near the top of your program, before any other functions but after any library imports and variable declarations.

### loop()

```lithium
fn loop():
	console.log(Time.now())
```

The loop function doesn't need any arguments (like the main() function). The program above will continously log the time to the console.

### paint()

```lithium
fn paint() :
	console.log(Time.now())
```

The program does the same thing as the loop() function above, but this will only run when the result can next be shown on screen. While this means that the differences between the times logged will be greater, it may result in a smoother and less processor intensive program for the end user.

In some cases, the paint() method may not be able to use the frame or animation rate of the system that the program is running on. In this case, the paint() method will be called once every 1/30th of a second.

loop() would be better suited for server applications or background processes, while paint() would be better suited for an program for end users.

Imports
-------

Generally, if you are importing a package or file into your program you should do the importing at the top of the Lithium program. 

Importing things from inside an if-else statement or other statement will work, but it not reccomended. You should probably just import the file or library just in case. In fact, if your Lithium file has been transcompiled to another language that doesn't allow conditional importing, the file or library will be imported regardless and the classes/variables/objects from the import will just be 'hidden' until the program reaches the conditional import, in which case they will either remain 'hidden' or will be 'unhidden'.