# Units

In addition to a type system, Lithium also has a units checking system. This allows the units (second, metres, feet) of a value to be specified. The units can then be used by Lithium to implicitly convert the units of function parameters (e.g. `sleep(1 hour)` versus `sleep(60*60))` and to ensure the correct multiple is used (e.g. someOperation(10mm) = someOperation(1 cm)`).

