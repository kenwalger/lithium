Variables
========

Lithium has around a dozen built in variable types. 

Lithium variable names can start with any alphabetical character (including Unicode characters), and can then contain any alphanumerical character. It is reccomended that most variable names start with a lowercase character, while class names start with an uppercase character. As hyphens and underscores cannot be used in a variable name, camelCase is recommended.

Single Line Declarations
------------------------

Variables in Lithium that only take up a single line (i.e. not functions, classes or sometimes objects) can be declared or values reassigned in three different ways:

```lithium
type variableName
```

This creates a variable with the name `variableName` and the type `type`. The value of the variable will be null.

```lithium
type variableName : value
```

This creates a variable with the name variableName` and the type `type`. The value of the variable will be `value`.

```lithium
variableName : value
```

This assigns the variable `variableName` the value of `value`. The variable must have been declared previously using one of the two statements above.

Multiple Line Declarations
--------------------------

Variables that can take up several lines in being assigned or declared, such as classes and functions, can be declared as follows:

```lithium
type variableName : 
	moreCode()
	var hello()
```

This creates a class or function with the name `variableName`.