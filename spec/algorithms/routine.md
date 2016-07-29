# The `routine` Function

The `routine` function is used to create an implementation-defined routine (coroutine, function, method, constructor, generator, etc.). 

### Algorithm:

*When `routine` is called with two arguments, the following steps are followed:*

1. Let `args` be the first argument passed to `routine`.
2. Let `steps` be the second argument passed to `routine`.
3. Assert that `args` is a list of strings, each of which is a valid identifier as defined in section **4.1**.
4. Assert that `steps` is unevaluated Lithium code.
5. let `func` be a Reference to an implementation-defined routine which takes the arguments `args` and performs the steps as defined in `steps`.
6. Return `func`.