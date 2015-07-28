# The `subroutine` Function

The `subroutine` function is used to create an implementation-defined subroutine (a.k.a a function or procedure).

### Algorithm:

*When `function` is called with two arguments, the following steps are followed:*

1. Let `args` be the first argument passed to `subroutine`.
2. Let `steps` be the second argument passed to `subroutine`.
3. Assert that `args` is a list of strings, each of which is a valid identifier as defined in section **4.1**.
4. Assert that `steps` is unevaluated Lithium code.
5. let `func` be a Reference to an implementation-defined subroutine which takes the arguments `args` and performs the steps as defined in `steps`.
6. Return `func`.

*When `function` is called with three arguments, the following steps are followed:*

1. Let `name` be the first argument passed to `subroutine`.
2. Let `args` be the second argument passed to `subroutine`.
3. Let `steps` be the third argument passed to `subroutine`.
4. Assert that `name` is a string and is a valid identifier as defined in section **4.1**.
5. Assert that `as` is a list of strings, each of which is a valid identifier as defined in section **4.1**.
6. Assert that `steps` is unevaluated Lithium code.
7. let `func` be a Reference to an implementation-defined subroutine, optionally called `name`, which takes the arguments `args` and performs the steps as defined in `steps`.
8. Return `func`.