Expressions
===========

All operations in Lithium use infix notation.

Lithium prefers code to be Unicode encoded, but many keyboards make typing Unicode characters time intensive. As such, in some cases an ASCII equivalent or substitute may be allowed. It is strongly reccomended that any IDE or editor supporting Lithium should allow a user using the editor to enter a shortcut for these Unicode characters.

Examples of this include ≡ for true equality or identity (== can be used instead), ≠ for not equal (!= can be used instead, with caution to not accidentally create a factorial) and ≤ or ≥ for less than or equal to and greater than or equal to (<= or >= can be used instead).

Operators
---------

Lithium has the usual +, -, / and * operators, as well as ^ for powers, ! after a number for factorials, two | around a number for an absolute number, ∩ for intersection between two sets, 

### Multiplication

Several symbols can be used for multiplication, with × preferred:
* `⋅`
* `*`
* `×`

### Division

Several symbols can be used for division, with ÷ preferred:
* `÷`
* `/`

Dividing (/) will only be integer division if all variables or numbers in the expression are also integers. Otherwise, division will produce a decimal (float). The remainder or quotient can be found from division using the following technique though:

```lithium
(10/4)   # Results in 2.5

(10/4).r # Results in 2

(10/4).q # Results in 2

(5/7).q  # Results in 1

(5/7).r  # Results in 2
```

∫∑

While it isn't pretty, this is the only nice way to get the remainder or quotient from an operation.



Mathematical Functions
----------------------

A whole host of Mathematical functions are also defined for use in expressions. These are outlined below:

### ∏(int lower, int upper, fn sequence(n)

### √(base, x)

### H(x)

H(x) is the Heaviside step function, also known as the unit step function. It will return 0 if x is negative and +1 if x is positive.

Comparisons
-----------

### =

= will compare two numbers and evaulate to true if their values are equivalent. 

```lithium
3   = 3    # True
3.0 = 3    # True
4.1 = 4.10 # True
```

### ≡

≡ will compare two numbers and evaluate to true if both their values and type are identical.

```lithium
3.1 ≡ 3.1  # True
3   ≡ 3.0  # False
4   ≡ 4    # True
```

### ≈

≈ will compare two numbers (int or float) and evaluate to true if the difference between the two numbers is less than 1. This can be used to compare integers and floats, or floats with different precisions.

```lithium
3.2 ≈ 3    # True
3.9 ≈ 3    # True
4   ≈ 3    # False
3.1 ≈ 3.14 # True
```

### ~

~ will compare two numbers (int or float), and evaluate to true if the difference between the base 10 logarithm of the two numbers is less than 0.5. This comparison tests for approximately equal magnitude, which is much less accurate than ≈.

```lithium
900000 ~ 1000000 # True
100000 ~ 1000000 # False
    10 ~ 20      # True
	10 ~ 90      # False
```