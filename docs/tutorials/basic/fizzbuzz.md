# FizzBuzz

The FizzBuzz task is one of the simplest and most popular problems to solve to illustrate some basic comprehension of a programming language. Because it's so simple and popular, FizzBuzz has been solved many many times in many many different ways. Here are some examples:

If you want to be fancy, FizzBuzz can be solved in one line using Lithium:

```lithium
print([for x of [0...100] if (x % 15 = 0) "FizzBuzz" else if (x % 3 = 0) "Fizz" else if (x % 5 = 0) "Buzz" else '${x}'].join('\n'))
```
