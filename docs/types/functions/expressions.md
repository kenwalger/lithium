# Expressions

Expressions are a datatype for storing Lithium expressions for lazy evaluation. By default, Lithium uses eager evaluation, but expressions allow manual lazy evaluation. Think of it as equivalent to storing code as a string in a language like JavaScript and then putting it through `eval()` to get the value of the expression, or quoting a list in LISP.

Expressions in Lithium are much safer and efficient to use than `eval`, because they can be optimised at compile time and the result of evaluating the expression fits in nicely with type checking.

An expression literal is any valid Lithium code sourrounded by parentheses prefixed with a backtick (`). The code inside the parentheses can span several lines, but it is recomended for readability to keep expressions to one line.

```lithium
integer i = 12
expression lazy-code := `(i + 1)
i = i + 1
lazy-code # evaluates to 14.
```

Expressions can contain conditionals and loops - in Lithium, there isn't any difference between expressions and statements. `if` is actually a function transformed into a pseudo-statement using macros.