# Text

The Text class is a subclass of String that is optimised for natural language uses.

When should you use this over plain old String?

* Text compares values using the Unicode Collation Algorithm, rather than simply comparing the code point of each character.
* Text allows either a String or Rope to be used as the backing data structure.

