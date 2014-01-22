Features
========

Lithium has a number of features which both differentiate it from other languages and also show a degree of design inheritence.

Units
-----

Units lets you assign a SI unit and SI prefix to any variable of type `int` or `dec`. This then allows you to make sure that a function is using the correct units for calculations. 

```lithium
int distance : 45mm
```

In the example above, the variable distance is in millimetres. If this was put into a function, the correct units could be used.

```lithium
fn cubeToLitres(int sideLength cm) : 
    return (sideLength * sideLength * sideLength) / 1000

cubeToLitres(distance)
```

As the right SI units are used but the wrong SI prefix is used, a warning will be given but otherwise `cubeToLitres()` will still return a result, after changing `distance` to centimetres.

```lithium
int radius : 45°

cubeToLitres(radius)
```

Here, the function is getting an integer but the units are degrees. `cubeToLitres()` will raise an exception and will not run.

Type System
-----------
