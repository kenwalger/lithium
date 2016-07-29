# "SQL" Macros

Who wants to write "SQL" in their Lithium programs? That's right, everybody does!

```lithium
macro SQLTerminalCharacter(SQLLangaugeCharacter)

<SQL special character> ::= <space> | '"' | "%" | "&" | "'" | "(" | ")" | "*" | "+" | "," | "-" | "." | "/" | ":" | ";" | "<" | "=" | ">" | "?" | "[" | "]" | "^" | "_" | "|" | "{" | "}"

<token> ::= <nondelimiter token> | <delimiter token>

<nondelimiter token> ::= <regular identifier> | <key word> | <unsigned numeric literal> | <national character string literal> | <bit string literal> | <hex string literal> | <large object length token> | ("K" | "M" | "G")

<regular identifier> ::= <identifier body>

<identifier body> ::= <identifier start> [ <identifier part>... ]

<identifier part> ::= <identifier start> | <identifier extend>

<large object length token> ::= ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9")... ("K" | "M" | "G")

<delimited identifier> ::= '"' <delimited identifier body> '"'

<delimited identifier body> ::= <delimited identifier part>... 

<delimited identifier part> ::= <nondoublequote character> | '""'

<Unicode delimited identifier> ::= U"&"'"' <Unicode delimiter body> '"' <Unicode escape specifier>

<Unicode escape specifier> ::= [ "UESCAPE" "'" <Unicode escape character> "'" ]

<Unicode delimiter body> ::= <Unicode identifier part>...

<Unicode identifier part> ::= <delimited identifier part> | <Unicode escape value>

<Unicode escape value> ::= <Unicode 4 digit escape value> | <Unicode 6 digit escape value> | <Unicode character escape value>

<Unicode 4 digit escape value> ::= <Unicode escape character>("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")

<Unicode 6 digit escape value> ::= <Unicode escape character>"+"("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")

<Unicode character escape value> ::= <Unicode escape character><Unicode escape character>

<Unicode escape character> ::= !! See the Syntax Rules (15-18 above).

<delimiter token> ::= <character string literal> | <date string> | <time string> | <timestamp string> | <interval string> | <delimited identifier> | <Unicode delimited identifier> | <SQL special character> | "<>" | ">=" | "<=" | "||" | "->" | "??(" | "??)" | "::" | ".."

<separator> ::= { <comment> | <white space> }...

<comment> ::= <simple comment> | <bracketed comment>

<simple comment> ::= <simple comment introducer> [ <comment character>... ] <newline>

<simple comment introducer> ::= "--" [ "-"... ]

<bracketed comment> ::= <bracketed comment introducer> <bracketed comment contents> <bracketed comment terminator>

<bracketed comment introducer> ::= "/*"

<bracketed comment terminator> ::= "*/"

<bracketed comment contents> ::= [ { <comment character> | <separator> }... ]

<comment character> ::= <nonquote character> | "'"

<key word> ::= "A" | "ABS" | "ABSOLUTE" | "ACTION" | "ADA" | "ADMIN" | "AFTER" | "ALWAYS" | "ASC" | "ASSERTION" | "ASSIGNMENT" | "ATTRIBUTE" | "ATTRIBUTES" | "AVG" | "BEFORE" | "BERNOULLI" | "BREADTH" | "C" | "CARDINALITY" | "CASCADE" | "CATALOG" | "CATALOG_NAME" | "CEIL" | "CEILING" | "CHAIN" | "CHARACTERISTICS" | "CHARACTERS" | "CHARACTER_LENGTH" | "CHARACTER_SET_CATALOG" | "CHARACTER_SET_NAME" | "CHARACTER_SET_SCHEMA" | "CHAR_LENGTH" | "CHECKED" | "CLASS_ORIGIN" | "COALESCE" | "COBOL" | "CODE_UNITS" | "COLLATION" | "COLLATION_CATALOG" | "COLLATION_NAME" | "COLLATION_SCHEMA" | "COLLECT" | "COLUMN_NAME" | "COMMAND_FUNCTION" | "COMMAND_FUNCTION_CODE" | "COMMITTED" | "CONDITION" | "CONDITION_NUMBER" | "CONNECTION_NAME" | "CONSTRAINTS" | "CONSTRAINT_CATALOG" | "CONSTRAINT_NAME" | "CONSTRAINT_SCHEMA" | "CONSTRUCTORS" | "CONTAINS" | "CONVERT" | "CORR" | "COUNT" | "COVAR_POP" | "COVAR_SAMP" | "CUME_DIST" | "CURRENT_COLLATION" | "CURSOR_NAME" | "DATA" | "DATETIME_INTERVAL_CODE" | "DATETIME_INTERVAL_PRECISION" | "DEFAULTS" | "DEFERRABLE" | "DEFERRED" | "DEFINED" | "DEFINER" | "DEGREE" | "DENSE_RANK" | "DEPTH" | "DERIVED" | "DESC" | "DESCRIPTOR" | "DIAGNOSTICS" | "DISPATCH" | "DOMAIN" | "DYNAMIC_FUNCTION" | "DYNAMIC_FUNCTION_CODE" | "EQUALS" | "EVERY" | "EXCEPTION" | "EXCLUDE" | "EXCLUDING" | "EXP" | "EXTRACT" | "FINAL" | "FIRST" | "FLOOR" | "FOLLOWING" | "FORTRAN" | "FOUND" | "FUSION" | "G" | "GENERAL" | "GO" | "GOTO" | "GRANTED" | "HIERARCHY" | "IMPLEMENTATION" | "INCLUDING" | "INCREMENT" | "INITIALLY" | "INSTANCE" | "INSTANTIABLE" | "INTERSECTION" | "INVOKER" | "ISOLATION" | "K" | "KEY" | "KEY_MEMBER" | "KEY_TYPE" | "LAST" | "LENGTH" | "LEVEL" | "LN" | "LOCATOR" | "LOWER" | "M" | "MAP" | "MATCHED" | "MAX" | "MAXVALUE" | "MESSAGE_LENGTH" | "MESSAGE_OCTET_LENGTH" | "MESSAGE_TEXT" | "MIN" | "MINVALUE" | "MOD" | "MORE" | "MUMPS" | "NAME" | "NAMES" | "NESTING" | "NEXT" | "NORMALIZE" | "NORMALIZED" | "NULLABLE" | "NULLIF" | "NULLS" | "NUMBER" | "OBJECT" | "OCTETS" | "OCTET_LENGTH" | "OPTION" | "OPTIONS" | "ORDERING" | "ORDINALITY" | "OTHERS" | "OVERLAY" | "OVERRIDING" | "PAD" | "PARAMETER_MODE" | "PARAMETER_NAME" | "PARAMETER_ORDINAL_POSITION" | "PARAMETER_SPECIFIC_CATALOG" | "PARAMETER_SPECIFIC_NAME" | "PARAMETER_SPECIFIC_SCHEMA" | "PARTIAL" | "PASCAL" | "PATH" | "PERCENTILE_CONT" | "PERCENTILE_DISC" | "PERCENT_RANK" | "PLACING" | "PLI" | "POSITION" | "POWER" | "PRECEDING" | "PRESERVE" | "PRIOR" | "PRIVILEGES" | "PUBLIC" | "RANK" | "READ" | "RELATIVE" | "REPEATABLE" | "RESTART" | "RETURNED_CARDINALITY" | "RETURNED_LENGTH" | "RETURNED_OCTET_LENGTH" | "RETURNED_SQLSTATE" | "ROLE" | "ROUTINE" | "ROUTINE_CATALOG" | "ROUTINE_NAME" | "ROUTINE_SCHEMA" | "ROW_COUNT" | "ROW_NUMBER" | "SCALE" | "SCHEMA" | "SCHEMA_NAME" | "SCOPE_CATALOG" | "SCOPE_NAME" | "SCOPE_SCHEMA" | "SECTION" | "SECURITY" | "SELF" | "SEQUENCE" | "SERIALIZABLE" | "SERVER_NAME" | "SESSION" | "SETS" | "SIMPLE" | "SIZE" | "SOURCE" | "SPACE" | "SPECIFIC_NAME" | "SQRT" | "STATE" | "STATEMENT" | "STDDEV_POP" | "STDDEV_SAMP" | "STRUCTURE" | "STYLE" | "SUBCLASS_ORIGIN" | "SUBSTRING" | "SUM" | "TABLESAMPLE" | "TABLE_NAME" | "TEMPORARY" | "TIES" | "TOP_LEVEL_COUNT" | "TRANSACTION" | "TRANSACTIONS_COMMITTED" | "TRANSACTIONS_ROLLED_BACK" | "TRANSACTION_ACTIVE" | "TRANSFORM" | "TRANSFORMS" | "TRANSLATE" | "TRIGGER_CATALOG" | "TRIGGER_NAME" | "TRIGGER_SCHEMA" | "TRIM" | "TYPE" | "UNBOUNDED" | "UNCOMMITTED" | "UNDER" | "UNNAMED" | "USAGE" | "USER_DEFINED_TYPE_CATALOG" | "USER_DEFINED_TYPE_CODE" | "USER_DEFINED_TYPE_NAME" | "USER_DEFINED_TYPE_SCHEMA" | "VIEW" | "WORK" | "WRITE" | "ZONE" | "ADD" | "ALL" | "ALLOCATE" | "ALTER" | "AND" | "ANY" | "ARE" | "ARRAY" | "AS" | "ASENSITIVE" | "ASYMMETRIC" | "AT" | "ATOMIC" | "AUTHORIZATION" | "BEGIN" | "BETWEEN" | "BIGINT" | "BINARY" | "BLOB" | "BOOLEAN" | "BOTH" | "BY" | "CALL" | "CALLED" | "CASCADED" | "CASE" | "CAST" | "CHAR" | "CHARACTER" | "CHECK" | "CLOB" | "CLOSE" | "COLLATE" | "COLUMN" | "COMMIT" | "CONNECT" | "CONSTRAINT" | "CONTINUE" | "CORRESPONDING" | "CREATE" | "CROSS" | "CUBE" | "CURRENT" | "CURRENT_DATE" | "CURRENT_DEFAULT_TRANSFORM_GROUP" | "CURRENT_PATH" | "CURRENT_ROLE" | "CURRENT_TIME" | "CURRENT_TIMESTAMP" | "CURRENT_TRANSFORM_GROUP_FOR_TYPE" | "CURRENT_USER" | "CURSOR" | "CYCLE" | "DATE" | "DAY" | "DEALLOCATE" | "DEC" | "DECIMAL" | "DECLARE" | "DEFAULT" | "DELETE" | "DEREF" | "DESCRIBE" | "DETERMINISTIC" | "DISCONNECT" | "DISTINCT" | "DOUBLE" | "DROP" | "DYNAMIC" | "EACH" | "ELEMENT" | "ELSE" | "END" | END-EXEC | "ESCAPE" | "EXCEPT" | "EXEC" | "EXECUTE" | "EXISTS" | "EXTERNAL" | "FALSE" | "FETCH" | "FILTER" | "FLOAT" | "FOR" | "FOREIGN" | "FREE" | "FROM" | "FULL" | "FUNCTION" | "GET" | "GLOBAL" | "GRANT" | "GROUP" | "GROUPING" | "HAVING" | "HOLD" | "HOUR" | "IDENTITY" | "IMMEDIATE" | "IN" | "INDICATOR" | "INNER" | "INOUT" | "INPUT" | "INSENSITIVE" | "INSERT" | "INT" | "INTEGER" | "INTERSECT" | "INTERVAL" | "INTO" | "IS" | "ISOLATION" | "JOIN" | "LANGUAGE" | "LARGE" | "LATERAL" | "LEADING" | "LEFT" | "LIKE" | "LOCAL" | "LOCALTIME" | "LOCALTIMESTAMP" | "MATCH" | "MEMBER" | "MERGE" | "METHOD" | "MINUTE" | "MODIFIES" | "MODULE" | "MONTH" | "MULTISET" | "NATIONAL" | "NATURAL" | "NCHAR" | "NCLOB" | "NEW" | "NO" | "NONE" | "NOT" | "NULL" | "NUMERIC" | "OF" | "OLD" | "ON" | "ONLY" | "OPEN" | "OR" | "ORDER" | "OUT" | "OUTER" | "OUTPUT" | "OVER" | "OVERLAPS" | "PARAMETER" | "PARTITION" | "PRECISION" | "PREPARE" | "PRIMARY" | "PROCEDURE" | "RANGE" | "READS" | "REAL" | "RECURSIVE" | "REF" | "REFERENCES" | "REFERENCING" | "REGR_AVGX" | "REGR_AVGY" | "REGR_COUNT" | "REGR_INTERCEPT" | REGR_R2 | "REGR_SLOPE" | "REGR_SXX" | "REGR_SXY" | "REGR_SYY" | "RELEASE" | "RESULT" | "RETURN" | "RETURNS" | "REVOKE" | "RIGHT" | "ROLLBACK" | "ROLLUP" | "ROW" | "ROWS" | "SAVEPOINT" | "SCROLL" | "SEARCH" | "SECOND" | "SELECT" | "SENSITIVE" | "SESSION_USER" | "SET" | "SIMILAR" | "SMALLINT" | "SOME" | "SPECIFIC" | "SPECIFICTYPE" | "SQL" | "SQLEXCEPTION" | "SQLSTATE" | "SQLWARNING" | "START" | "STATIC" | "SUBMULTISET" | "SYMMETRIC" | "SYSTEM" | "SYSTEM_USER" | "TABLE" | "THEN" | "TIME" | "TIMESTAMP" | "TIMEZONE_HOUR" | "TIMEZONE_MINUTE" | "TO" | "TRAILING" | "TRANSLATION" | "TREAT" | "TRIGGER" | "TRUE" | "UESCAPE" | "UNION" | "UNIQUE" | "UNKNOWN" | "UNNEST" | "UPDATE" | "UPPER" | "USER" | "USING" | "VALUE" | "VALUES" | "VAR_POP" | "VAR_SAMP" | "VARCHAR" | "VARYING" | "WHEN" | "WHENEVER" | "WHERE" | "WIDTH_BUCKET" | "WINDOW" | "WITH" | "WITHIN" | "WITHOUT" | "YEAR"


<general literal> ::= <character string literal> | <national character string literal> | <Unicode character string literal> | <binary string literal> | <datetime literal> | <interval literal> | <boolean literal>

<character string literal> ::= [ "_"<character set specification> ] "'" [ <character representation>... ] "'" [ { <separator> "'" [ <character representation>... ] "'" }... ]

<character representation> ::= <nonquote character> | "''"

<national character string literal> ::= "N" "'" [ <character representation>... ] "'" [ { <separator> "'" [ <character representation>... ] "'" }... ]

<Unicode character string literal> ::= [ "_"<character set specification> ] U"&""'" [ <Unicode representation>... ] "'" [ { <separator> "'" [ <Unicode representation>... ] "'" }... ] [ "ESCAPE" <escape character> ]

<Unicode representation> ::= <character representation> | <Unicode escape value>

<binary string literal> ::= "X" "'" [ { ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f") }... ] "'" [ { <separator> "'" [ { ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f")("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "A" | "B" | "C" | "D" | "E" | "F" | "a" | "b" | "c" | "d" | "e" | "f") }... ] "'" }... ] [ "ESCAPE" <escape character> ]

<unsigned numeric literal> ::= (<exact numeric literal> | <approximate numeric literal>)

<exact numeric literal> ::= <unsigned integer> [ "." [ <unsigned integer> ] ] | "." <unsigned integer>

<approximate numeric literal> ::= <mantissa> "E" <exponent>

<mantissa> ::= <exact numeric literal>

<exponent> ::= <signed integer>

<signed integer> ::= [ ("+" | "-") ] <unsigned integer>

<unsigned integer> ::= ("0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9")...

<datetime literal> ::= <date literal> | <time literal> | <timestamp literal>

<date literal> ::= "DATE" <date string>

<time literal> ::= "TIME" <time string>

<timestamp literal> ::= "TIMESTAMP" <timestamp string>

<date string> ::= "'" <unquoted date string> "'"

<time string> ::= "'" <unquoted time string> "'"

<timestamp string> ::= "'" <unquoted timestamp string> "'"

<time zone interval> ::= ("+" | "-") <unsigned integer> ":" <unsigned integer>

<date value> ::= <unsigned integer> "-" <unsigned integer> "-" <unsigned integer>

<time value> ::= <unsigned integer> ":" <unsigned integer> ":" <seconds value>

<interval literal> ::= "INTERVAL" [ ("+" | "-") ] <interval string> <interval qualifier>

<interval string> ::= "'" <unquoted interval string> "'"

<unquoted date string> ::= <date value>

<unquoted time string> ::= <time value> [ <time zone interval> ]

<unquoted timestamp string> ::= <unquoted date string> <space> <unquoted time string>

<unquoted interval string> ::= [ ("+" | "-") ] { <year-month literal> | <day-time literal> }

<year-month literal> ::= <unsigned integer> | [ <unsigned integer> "-" ] <unsigned integer>

<day-time literal> ::= <day-time interval> | <time interval>

<day-time interval> ::= <unsigned integer> [ <space> <unsigned integer> [ ":" <unsigned integer> [ ":" <seconds value> ] ] ]

<time interval> ::= <unsigned integer> [ ":" <unsigned integer> [ ":" <seconds value> ] ] | <unsigned integer> [ ":" <seconds value> ] | <seconds value>

<seconds value> ::= <unsigned integer> [ "." [ <unsigned integer> ] ]

<boolean literal> ::= "TRUE" | "FALSE" | "UNKNOWN" 
<identifier> ::= <actual identifier>

<actual identifier> ::= <regular identifier> | <delimited identifier>

<authorization identifier> ::= <identifier> | <user identifier>

<table name> ::= [ <local or schema qualifier> "." ] <qualified identifier>

<domain name> ::= <schema qualified name>

<schema name> ::= [ <identifier> "." ] <unqualified schema name>

<schema qualified name> ::= [ <schema name> "." ] <qualified identifier>

<local or schema qualifier> ::= <schema name> | "MODULE" 
<qualified identifier> ::= <identifier>

<schema qualified routine name> ::= <schema qualified name>

<specific name> ::= <schema qualified name>

<cursor name> ::= <local qualified name>

<local qualified name> ::= [ "MODULE" "." ] <qualified identifier>

<SQL parameter name> ::= <identifier>

<constraint name> ::= <schema qualified name>

<external routine name> ::= <identifier> | <character string literal>

<trigger name> ::= <schema qualified name>

<collation name> ::= <schema qualified name>

<character set name> ::= [ <schema name> "." ] ("A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z") [ { "_" | ("A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" | "y" | "z" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9") }... ]

<transliteration name> ::= <schema qualified name>

<transcoding name> ::= <schema qualified name>

<user-defined type name> ::= <schema qualified type name>

<schema-resolved user-defined type name> ::= <user-defined type name>

<schema qualified type name> ::= [ <schema name> "." ] <qualified identifier>

<identifier> ::= <identifier>

<identifier> ::= <identifier>

<identifier> ::= <identifier>

<sequence generator name> ::= <schema qualified name>

<identifier> ::= <identifier>

<user identifier> ::= <identifier>

<connection name> ::= <simple value specification>

<SQL-server name> ::= <simple value specification>

<connection user name> ::= <simple value specification>

<SQL statement name> ::= <statement name> | <extended statement name>

<statement name> ::= <identifier>

<extended statement name> ::= [ <scope option> ] <simple value specification>

<dynamic cursor name> ::= <cursor name> | <extended cursor name>

<extended cursor name> ::= [ <scope option> ] <simple value specification>

<descriptor name> ::= [ <scope option> ] <simple value specification>

<scope option> ::= "GLOBAL" | "LOCAL" 
<window name> ::= <identifier>

<data type> ::= <predefined type> | <row type> | <path-resolved user-defined type name> | <reference type> | <collection type>

<predefined type> ::= <character string type> [ "CHARACTER" "SET" <character set specification> ] [ <collate clause> ] | <national character string type> [ <collate clause> ] | <binary large object string type> | (<exact numeric type> | <approximate numeric type>) | "BOOLEAN" | <datetime type> | <interval type>

<character string type> ::= "CHARACTER" [ "(" <unsigned integer> ")" ] | "CHAR" [ "(" <unsigned integer> ")" ] | "CHARACTER" "VARYING" "(" <unsigned integer> ")" | "CHAR" "VARYING" "(" <unsigned integer> ")" | "VARCHAR" "(" <unsigned integer> ")" | "CHARACTER" "LARGE" "OBJECT" [ "(" <large object length> ")" ] | "CHAR" "LARGE" "OBJECT" [ "(" <large object length> ")" ] | "CLOB" [ "(" <large object length> ")" ]

<national character string type> ::= "NATIONAL" "CHARACTER" [ "(" <unsigned integer> ")" ] | "NATIONAL" "CHAR" [ "(" <unsigned integer> ")" ] | "NCHAR" [ "(" <unsigned integer> ")" ] | "NATIONAL" "CHARACTER" "VARYING" "(" <unsigned integer> ")" | "NATIONAL" "CHAR" "VARYING" "(" <unsigned integer> ")" | "NCHAR" "VARYING" "(" <unsigned integer> ")" | "NATIONAL" "CHARACTER" "LARGE" "OBJECT" [ "(" <large object length> ")" ] | "NCHAR" "LARGE" "OBJECT" [ "(" <large object length> ")" ] | "NCLOB" [ "(" <large object length> ")" ]

<binary large object string type> ::= "BINARY" "LARGE" "OBJECT" [ "(" <large object length> ")" ] | "BLOB" [ "(" <large object length> ")" ]

<exact numeric type> ::= "NUMERIC" [ "(" <unsigned integer> [ "," <unsigned integer> ] ")" ] | "DECIMAL" [ "(" <unsigned integer> [ "," <unsigned integer> ] ")" ] | "DEC" [ "(" <unsigned integer> [ "," <unsigned integer> ] ")" ] | "SMALLINT" | "INTEGER" | "INT" | "BIGINT" 
<approximate numeric type> ::= "FLOAT" [ "(" <unsigned integer> ")" ] | "REAL" | "DOUBLE" "PRECISION" 
<unsigned integer> ::= <unsigned integer>

<large object length> ::= <unsigned integer> [ ("K" | "M" | "G") ] [ ("CHARACTERS" | "CODE_UNITS" | "OCTETS") ] | <large object length token> [ ("CHARACTERS" | "CODE_UNITS" | "OCTETS") ]

<datetime type> ::= "DATE" | "TIME" [ "(" <time precision> ")" ] [ <with or without time zone> ] | "TIMESTAMP" [ "(" <timestamp precision> ")" ] [ <with or without time zone> ]

<with or without time zone> ::= "WITH" "TIME" "ZONE" | "WITHOUT" "TIME" "ZONE" 
<time precision> ::= <time fractional seconds precision>

<timestamp precision> ::= <time fractional seconds precision>

<time fractional seconds precision> ::= <unsigned integer>

<interval type> ::= "INTERVAL" <interval qualifier>

<row type> ::= "ROW" ("(" <field definition> [ { "," <field definition> }... ] ")")

<reference type> ::= "REF" "(" <referenced type> ")" [ ("SCOPE" <table name>) ]

<referenced type> ::= <path-resolved user-defined type name>

<path-resolved user-defined type name> ::= <user-defined type name>

<path-resolved user-defined type name> ::= <user-defined type name>

<collection type> ::= <array type> | <multiset type>

<array type> ::= <data type> "ARRAY" [ ("[" | "??(") <unsigned integer> ("]" | "??)") ]

<multiset type> ::= <data type> "MULTISET" 
<field definition> ::= <identifier> <data type> [ <reference scope check> ]

<value expression primary> ::= <parenthesized value expression> | <nonparenthesized value expression primary>

<parenthesized value expression> ::= "(" <value expression> ")"

<nonparenthesized value expression primary> ::= <unsigned value specification> | <column reference> | <set function specification> | <window function> | <scalar subquery> | <case expression> | <cast specification> | <field reference> | <subtype treatment> | <method invocation> | <static method invocation> | <new specification> | <attribute or method reference> | <reference resolution> | <collection value constructor> | <array element reference> | <multiset element reference> | <routine invocation> | <next value expression>

<value specification> ::= ((["+" | "-"] <unsigned numeric literal>) | <general literal>) | <general value specification>

<unsigned value specification> ::= (<unsigned numeric literal> | <general literal>) | <general value specification>

<general value specification> ::= <host parameter specification> | <SQL parameter reference> | <dynamic parameter specification> | <embedded variable specification> | <current collation specification> | "CURRENT_DEFAULT_TRANSFORM_GROUP" | "CURRENT_PATH" | "CURRENT_ROLE" | "CURRENT_TRANSFORM_GROUP_FOR_TYPE" <path-resolved user-defined type name> | "CURRENT_USER" | "SESSION_USER" | "SYSTEM_USER" | "USER" | "VALUE" 
<simple value specification> ::= ((["+" | "-"] <unsigned numeric literal>) | <general literal>) | (":" <identifier>) | <SQL parameter reference> | <embedded variable name>

<target specification> ::= <host parameter specification> | <SQL parameter reference> | <column reference> | <target array element specification> | <dynamic parameter specification> | <embedded variable specification>

<simple target specification> ::= <host parameter specification> | <SQL parameter reference> | <column reference> | <embedded variable name>

<host parameter specification> ::= (":" <identifier>) [ <indicator parameter> ]

<dynamic parameter specification> ::= "?"

<embedded variable specification> ::= <embedded variable name> [ <indicator variable> ]

<indicator variable> ::= [ "INDICATOR" ] <embedded variable name>

<indicator parameter> ::= [ "INDICATOR" ] (":" <identifier>)

<target array element specification> ::= <target array reference> ("[" | "??(") <simple value specification> ("]" | "??)") 

<target array reference> ::= <SQL parameter reference> | <column reference>

<current collation specification> ::= "CURRENT_COLLATION" "(" <string value expression> ")"

<contextually typed value specification> ::= <implicitly typed value specification> | <default specification>

<implicitly typed value specification> ::= <null specification> | <empty specification>

<null specification> ::= "NULL" 
<empty specification> ::= "ARRAY" ("[" | "??(") ("]" | "??)") | "MULTISET" ("[" | "??(") ("]" | "??)")

<default specification> ::= "DEFAULT" 
<identifier chain> ::= <identifier> [ { "." <identifier> }... ]

<basic identifier chain> ::= <identifier chain>

<column reference> ::= <basic identifier chain> | "MODULE" "." <qualified identifier> "." <identifier>

<SQL parameter reference> ::= <basic identifier chain>

<set function specification> ::= <aggregate function> | <grouping operation>

<grouping operation> ::= "GROUPING" "(" <column reference> [ { "," <column reference> }... ] ")"

<window function> ::= <window function type> "OVER" <window name or specification>

<window function type> ::= <rank function type> "(" ")" | "ROW_NUMBER" "(" ")" | <aggregate function>

<rank function type> ::= "RANK" | "DENSE_RANK" | "PERCENT_RANK" | "CUME_DIST" 
<window name or specification> ::= <window name> | <in-line window specification>

<in-line window specification> ::= <window specification>

<case expression> ::= <case abbreviation> | <case specification>

<case abbreviation> ::= "NULLIF" "(" <value expression> "," <value expression> ")" | "COALESCE" "(" <value expression> { "," <value expression> }... ")"

<case specification> ::= <simple case> | <searched case>

<simple case> ::= "CASE" <case operand> <simple when clause>... [ <else clause> ] "END" 
<searched case> ::= "CASE" <searched when clause>... [ <else clause> ] "END" 
<simple when clause> ::= "WHEN" <when operand> "THEN" <result>

<searched when clause> ::= "WHEN" <search condition> "THEN" <result>

<else clause> ::= "ELSE" <result>

<case operand> ::= <row value predicand> | <overlaps predicate part>

<when operand> ::= <row value predicand> | <comparison predicate part 2> | <between predicate part 2> | <in predicate part 2> | <character like predicate part 2> | <octet like predicate part 2> | <similar predicate part 2> | <null predicate part 2> | <quantified comparison predicate part 2> | <match predicate part 2> | <overlaps predicate part 2> | <distinct predicate part 2> | <member predicate part 2> | <submultiset predicate part 2> | <set predicate part 2> | <type predicate part 2>

<result> ::= <result expression> | "NULL" 
<result expression> ::= <value expression>

<cast specification> ::= "CAST" "(" <cast operand> "AS" <cast target> ")"

<cast operand> ::= <value expression> | <implicitly typed value specification>

<cast target> ::= <domain name> | <data type>

<next value expression> ::= "NEXT" "VALUE" "FOR" <sequence generator name>

<field reference> ::= <value expression primary> "." <identifier>

<subtype treatment> ::= "TREAT" "(" <subtype operand> "AS" <target subtype> ")"

<subtype operand> ::= <value expression>

<target subtype> ::= <path-resolved user-defined type name> | <reference type>

<method invocation> ::= <direct invocation> | <generalized invocation>

<direct invocation> ::= <value expression primary> "." <identifier> [ <SQL argument list> ]

<generalized invocation> ::= "(" <value expression primary> "AS" <data type> ")" "." <identifier> [ <SQL argument list> ]

<method selection> ::= <routine invocation>

<constructor method selection> ::= <routine invocation>

<static method invocation> ::= <path-resolved user-defined type name> "::" <identifier> [ <SQL argument list> ]

<static method selection> ::= <routine invocation>

<new specification> ::= "NEW" <routine invocation>

<new invocation> ::= <method invocation> | <routine invocation>

<attribute or method reference> ::= <value expression primary> <dereference operator> <qualified identifier> [ <SQL argument list> ]

<dereference operator> ::= "->"

<dereference operation> ::= <reference value expression> <dereference operator> <identifier>

<method reference> ::= <value expression primary> <dereference operator> <identifier> <SQL argument list>

<reference resolution> ::= "DEREF" "(" <reference value expression> ")"

<array element reference> ::= <array value expression> ("[" | "??(") <numeric value expression> ("]" | "??)") 

<multiset element reference> ::= "ELEMENT" "(" <multset value expression> ")"

<value expression> ::= <common value expression> | <boolean value expression> | <row value expression>

<common value expression> ::= <numeric value expression> | <string value expression> | <datetime value expression> | <interval value expression> | <user-defined type value expression> | <reference value expression> | <collection value expression>

<user-defined type value expression> ::= <value expression primary>

<reference value expression> ::= <value expression primary>

<collection value expression> ::= <array value expression> | <multiset value expression>

<collection value constructor> ::= <array value constructor> | <multiset value constructor>

<numeric value expression> ::= <term> | <numeric value expression> "+" <term> | <numeric value expression> "-" <term>

<term> ::= <factor> | <term> "*" <factor> | <term> "/" <factor>

<factor> ::= [ ("+" | "-") ] <numeric primary>

<numeric primary> ::= <value expression primary> | <numeric value function>

<numeric value function> ::= <position expression> | <extract expression> | <length expression> | <cardinality expression> | <absolute value expression> | <modulus expression> | <natural logarithm> | <exponential function> | <power function> | <square root> | <floor function> | <ceiling function> | <width bucket function>

<position expression> ::= <string position expression> | <blob position expression>

<string position expression> ::= "POSITION" "(" <string value expression> "IN" <string value expression> [ "USING" ("CHARACTERS" | "CODE_UNITS" | "OCTETS") ] ")"

<blob position expression> ::= "POSITION" "(" <blob value expression> "IN" <blob value expression> ")"

<length expression> ::= <char length expression> | <octet length expression>

<char length expression> ::= { "CHAR_LENGTH" | "CHARACTER_LENGTH" } "(" <string value expression> [ "USING" ("CHARACTERS" | "CODE_UNITS" | "OCTETS") ] ")"

<octet length expression> ::= "OCTET_LENGTH" "(" <string value expression> ")"

<extract expression> ::= "EXTRACT" "(" <extract field> "FROM" <extract source> ")"

<extract field> ::= <primary datetime field> | <time zone field>

<time zone field> ::= "TIMEZONE_HOUR" | "TIMEZONE_MINUTE" 
<extract source> ::= <datetime value expression> | <interval value expression>

<cardinality expression> ::= "CARDINALITY" "(" <collection value expression> ")"

<absolute value expression> ::= "ABS" "(" <numeric value expression> ")"

<modulus expression> ::= "MOD" "(" <numeric value expression dividend> "," <numeric value expression divisor>")"

<natural logarithm> ::= "LN" "(" <numeric value expression> ")"

<exponential function> ::= "EXP" "(" <numeric value expression> ")"

<power function> ::= "POWER" "(" <numeric value expression base> "," <numeric value expression exponent> ")"

<numeric value expression base> ::= <numeric value expression>

<numeric value expression exponent> ::= <numeric value expression>

<square root> ::= "SQRT" "(" <numeric value expression> ")"

<floor function> ::= "FLOOR" "(" <numeric value expression> ")"

<ceiling function> ::= { "CEIL" | "CEILING" } "(" <numeric value expression> ")"

<width bucket function> ::= "WIDTH_BUCKET" "(" <width bucket operand> "," <width bucket bound 1> "," <width bucket bound 2> "," <width bucket count> ")"

<width bucket operand> ::= <numeric value expression>

<width bucket bound 1> ::= <numeric value expression>

<width bucket bound 2> ::= <numeric value expression>

<width bucket count> ::= <numeric value expression>

<string value expression> ::= <character value expression> | <blob value expression>

<character value expression> ::= <concatenation> | <character factor>

<concatenation> ::= <character value expression> "||" <character factor>

<character factor> ::= <character primary> [ <collate clause> ]

<character primary> ::= <value expression primary> | <string value function>

<blob value expression> ::= <blob concatenation> | <blob factor>

<blob factor> ::= <blob primary>

<blob primary> ::= <value expression primary> | <string value function>

<blob concatenation> ::= <blob value expression> "||" <blob factor>

<string value function> ::= <character value function> | <blob value function>

<character value function> ::= <character substring function> | <regular expression substring function> | <fold> | <transcoding> | <character transliteration> | <trim function> | <character overlay function> | <normalize function> | <specific type method>

<character substring function> ::= "SUBSTRING" "(" <character value expression> "FROM" <start position> [ "FOR" <string length> ] [ "USING" ("CHARACTERS" | "CODE_UNITS" | "OCTETS") ] ")"

<regular expression substring function> ::= "SUBSTRING" "(" <character value expression> "SIMILAR" <character value expression> "ESCAPE" <escape character> ")"

<fold> ::= { "UPPER" | "LOWER" } "(" <character value expression> ")"

<transcoding> ::= "CONVERT" "(" <character value expression> "USING" <transcoding name> ")"

<character transliteration> ::= "TRANSLATE" "(" <character value expression> "USING" <transliteration name> ")"

<trim function> ::= "TRIM" "(" <trim operands> ")"

<trim operands> ::= [ [ <trim specification> ] [ <trim character> ] "FROM" ] <trim source>

<trim source> ::= <character value expression>

<trim specification> ::= "LEADING" | "TRAILING" | "BOTH" 
<trim character> ::= <character value expression>

<character overlay function> ::=  "OVERLAY" "(" <character value expression> "PLACING" <character value expression> "FROM" <start position> [ "FOR" <string length> ] [ "USING" ("CHARACTERS" | "CODE_UNITS" | "OCTETS") ] ")"

<normalize function> ::= "NORMALIZE" "(" <character value expression> ")"

<specific type method> ::= <user-defined type value expression> "." "SPECIFICTYPE" 
<blob value function> ::= <blob substring function> | <blob trim function> | <blob overlay function>

<blob substring function> ::= "SUBSTRING" "(" <blob value expression> "FROM" <start position> [ "FOR" <string length> ] ")"

<blob trim function> ::= "TRIM" "(" <blob trim operands> ")"

<blob trim operands> ::= [ [ <trim specification> ] [ <trim octet> ] "FROM" ] <blob trim source>

<blob trim source> ::= <blob value expression>

<trim octet> ::= <blob value expression>

<blob overlay function> ::= "OVERLAY" "(" <blob value expression> "PLACING" <blob value expression> "FROM" <start position> [ "FOR" <string length> ] ")"

<start position> ::= <numeric value expression>

<string length> ::= <numeric value expression>

<datetime value expression> ::= <datetime term> | <interval value expression> "+" <datetime term> | <datetime value expression> "+" <interval term> | <datetime value expression> "-" <interval term>

<datetime term> ::= <datetime factor>

<datetime factor> ::= <datetime primary> [ <time zone> ]

<datetime primary> ::= <value expression primary> | <datetime value function>

<time zone> ::= "AT" <time zone specifier>

<time zone specifier> ::= "LOCAL" | "TIME" "ZONE" <interval primary>

<datetime value function> ::= <current date value function> | <current time value function> | <current timestamp value function> | <current local time value function> | <current local timestamp value function>

<current date value function> ::= "CURRENT_DATE" 
<current time value function> ::= "CURRENT_TIME" [ "(" <time precision> ")" ]

<current local time value function> ::= "LOCALTIME" [ "(" <time precision> ")" ]

<current timestamp value function> ::= "CURRENT_TIMESTAMP" [ "(" <timestamp precision> ")" ]

<current local timestamp value function> ::= "LOCALTIMESTAMP" [ "(" <timestamp precision> ")" ]

<interval value expression> ::= <interval term> | <interval value expression 1> "+" <interval term 1> | <interval value expression 1> "-" <interval term 1> | "(" <datetime value expression> "-" <datetime term> ")" <interval qualifier>

<interval term> ::= <interval factor> | <interval term 2> "*" <factor> | <interval term 2> "/" <factor> | <term> "*" <interval factor>

<interval factor> ::= [ ("+" | "-") ] <interval primary>

<interval primary> ::= <value expression primary> [ <interval qualifier> ] | <interval value function>

<interval value expression 1> ::= <interval value expression>

<interval term 1> ::= <interval term>

<interval term 2> ::= <interval term>

<interval value function> ::= <interval absolute value function>

<interval absolute value function> ::= "ABS" "(" <interval value expression> ")"

<boolean value expression> ::= <boolean term> | <boolean value expression> "OR" <boolean term>

<boolean term> ::= <boolean factor> | <boolean term> "AND" <boolean factor>

<boolean factor> ::= [ "NOT" ] <boolean test>

<boolean test> ::= <boolean primary> [ "IS" [ "NOT" ] ("TRUE" | "FALSE" | "UNKNOWN") ]

<boolean primary> ::= <predicate> | <boolean predicand>

<boolean predicand> ::= <parenthesized boolean value expression> | <nonparenthesized value expression primary>

<parenthesized boolean value expression> ::= "(" <boolean value expression> ")"

<array value expression> ::= <array concatenation> | <array factor>

<array concatenation> ::= <array value expression 1> "||" <array factor>

<array value expression 1> ::= <array value expression>

<array factor> ::= <value expression primary>

<array value constructor> ::= <array value constructor by enumeration> | <array value constructor by query>

<array value constructor by enumeration> ::= "ARRAY" ("[" | "??(") <array element list> ("]" | "??)")

<array element list> ::= <array element> [ { "," <array element> }... ]

<array element> ::= <value expression>

<array value constructor by query> ::= "ARRAY" "(" <query expression> [ <order by clause> ] ")"

<multiset value expression> ::= <multiset term> | <multiset value expression> "MULTISET" "UNION" [ "ALL" | "DISTINCT" ] <multiset term> | <multiset value expression> "MULTISET" "EXCEPT" [ "ALL" | "DISTINCT" ] <multiset term>

<multiset term> ::= <multiset primary> | <multiset term> "MULTISET" "INTERSECT" [ "ALL" | "DISTINCT" ] <multiset primary>

<multiset primary> ::= <multiset value function> | <value expression primary>

<multiset value function> ::= <multiset set function>

<multiset set function> ::= "SET" "(" <multiset value expression> ")"

<multiset value constructor> ::= <multiset value constructor by enumeration> | <multiset value constructor by query> | <table value constructor by query>

<multiset value constructor by enumeration> ::= "MULTISET" ("[" | "??(") <multiset element list> ("]" | "??)")

<multiset element list> ::= <multiset element> [ { "," <multiset element> } ]

<multiset element> ::= <value expression>

<multiset value constructor by query> ::= "MULTISET" "(" <query expression> ")"

<table value constructor by query> ::= "TABLE" "(" <query expression> ")"

<row value constructor> ::= <common value expression> | <boolean value expression> | <explicit row value constructor>

<explicit row value constructor> ::= "(" <row value constructor element> "," <row value constructor element list> ")" | "ROW" "(" <row value constructor element list> ")" | <row subquery>

<row value constructor element list> ::= <row value constructor element> [ { "," <row value constructor element> }... ]

<row value constructor element> ::= <value expression>

<contextually typed row value constructor> ::= <common value expression> | <boolean value expression> | <contextually typed value specification> | "(" <contextually typed row value constructor element> "," <contextually typed row value constructor element list> ")" | "ROW" "(" <contextually typed row value constructor element list> ")"

<contextually typed row value constructor element list> ::= <contextually typed row value constructor element> [ { "," <contextually typed row value constructor element> }... ]

<contextually typed row value constructor element> ::= <value expression> | <contextually typed value specification>

<row value constructor predicand> ::= <common value expression> | <boolean predicand> | <explicit row value constructor>

<row value expression> ::= <row value special case> | <explicit row value constructor>

<table row value expression> ::= <row value special case> | <row value constructor>

<contextually typed row value expression> ::= <row value special case> | <contextually typed row value constructor>

<row value predicand> ::= <row value special case> | <row value constructor predicand>

<row value special case> ::= <nonparenthesized value expression primary>

<table value constructor> ::= "VALUES" <row value expression list>

<row value expression list> ::= <table row value expression> [ { "," <table row value expression> }... ]

<contextually typed table value constructor> ::= "VALUES" <contextually typed row value expression list>

<contextually typed row value expression list> ::= <contextually typed row value expression> [ { "," <contextually typed row value expression> }... ]

<table expression> ::= <from clause> [ <where clause> ] [ <group by clause> ] [ <having clause> ] [ <window clause> ]

<from clause> ::= "FROM" <table reference list>

<table reference list> ::= <table reference> [ { "," <table reference> }... ]

<table reference> ::= <table primary or joined table> [ <sample clause> ]

<table primary or joined table> ::= <table primary> | <joined table>

<sample clause> ::= "TABLESAMPLE" <sample method> "(" <sample percentage> ")" [ <repeatable clause> ]

<sample method> ::= "BERNOULLI" | "SYSTEM" 
<repeatable clause> ::= "REPEATABLE" "(" <repeat argument> ")"

<sample percentage> ::= <numeric value expression>

<repeat argument> ::= <numeric value expression>

<table primary> ::= <table or query name> [ [ "AS" ] <identifier> [ "(" <derived column list> ")" ] ] | <derived table> [ "AS" ] <identifier> [ "(" <derived column list> ")" ] | <lateral derived table> [ "AS" ] <identifier> [ "(" <derived column list> ")" ] | <collection derived table> [ "AS" ] <identifier> [ "(" <derived column list> ")" ] | <table function derived table> [ "AS" ] <identifier> [ "(" <derived column list> ")" ] | <only spec> [ [ "AS" ] <identifier> [ "(" <derived column list> ")" ] ] | "(" <joined table> ")"

<only spec> ::= "ONLY" "(" <table or query name> ")"

<lateral derived table> ::= "LATERAL" <table subquery>

<collection derived table> ::= "UNNEST" "(" <collection value expression> ")" [ "WITH" "ORDINALITY" ]

<table function derived table> ::= "TABLE" "(" <collection value expression> ")"

<derived table> ::= <table subquery>

<table or query name> ::= <table name> | <identifier>

<derived column list> ::= <column name list>

<column name list> ::= <identifier> [ { "," <identifier> }... ]

<joined table> ::= <cross join> | <qualified join> | <natural join> | <union join>

<cross join> ::= <table reference> "CROSS" "JOIN" <table primary>

<qualified join> ::= <table reference> [ <join type> ] "JOIN" <table reference> <join specification>

<natural join> ::= <table reference> "NATURAL" [ <join type> ] "JOIN" <table primary>

<union join> ::= <table reference> "UNION" "JOIN" <table primary>

<join specification> ::= <join condition> | <named columns join>

<join condition> ::= "ON" <search condition>

<named columns join> ::= "USING" "(" <join column list> ")"

<join type> ::= "INNER" | <outer join type> [ "OUTER" ] 

<outer join type> ::= "LEFT" | "RIGHT" | "FULL" 
<join column list> ::= <column name list>

<where clause> ::= "WHERE" <search condition>

<group by clause> ::= "GROUP" "BY" [ <set quantifier> ] <grouping element list>

<grouping element list> ::= <grouping element> [ { "," <grouping element> }... ]

<grouping element> ::= <ordinary grouping set> | <rollup list> | <cube list> | <grouping sets specification> | <empty grouping set>

<ordinary grouping set> ::= <grouping column reference> | "(" <grouping column reference list> ")"

<grouping column reference> ::= <column reference> [ <collate clause> ]

<grouping column reference list> ::= <grouping column reference> [ { "," <grouping column reference> }... ]

<rollup list> ::= "ROLLUP" "(" <ordinary grouping set list> ")"

<ordinary grouping set list> ::= <ordinary grouping set> [ { "," <ordinary grouping set> }... ]

<cube list> ::= "CUBE" "(" <ordinary grouping set list> ")"

<grouping sets specification> ::= "GROUPING" "SETS" "(" <grouping set list> ")"

<grouping set list> ::= <grouping set> [ { "," <grouping set> }... ]

<grouping set> ::= <ordinary grouping set> | <rollup list> | <cube list> | <grouping sets specification> | <empty grouping set>

<empty grouping set> ::= "(" ")"

<having clause> ::= "HAVING" <search condition>

<window clause> ::= "WINDOW" <window definition list>

<window definition list> ::= <window definition> [ { "," <window definition> }... ]

<window definition> ::= <new window name> "AS" <window specification>

<new window name> ::= <window name>

<window specification> ::= "(" <window specification details> ")"

<window specification details> ::= [ <existing window name> ] [ <window partition clause> ] [ <window order clause> ] [ <window frame clause> ]

<existing window name> ::= <window name>

<window partition clause> ::= "PARTITION" "BY" <window partition column reference list>

<window partition column reference list> ::= <window partition column reference> [ { "," <window partition column reference> }... ]

<window partition column reference> ::= <column reference> [ <collate clause> ]

<window order clause> ::= "ORDER" "BY" <sort specification list>

<window frame clause> ::= <window frame units> <window frame extent> [ <window frame exclusion> ]

<window frame units> ::= "ROWS" | "RANGE" 
<window frame extent> ::= <window frame start> | <window frame between>

<window frame start> ::= "UNBOUNDED" "PRECEDING" | <window frame preceding> | "CURRENT" "ROW" 
<window frame preceding> ::= <unsigned value specification> "PRECEDING" 
<window frame between> ::= "BETWEEN" <window frame bound 1> "AND" <window frame bound 2>

<window frame bound 1> ::= <window frame bound>

<window frame bound 2> ::= <window frame bound>

<window frame bound> ::= <window frame start> | "UNBOUNDED" "FOLLOWING" | <window frame following>

<window frame following> ::= <unsigned value specification> "FOLLOWING" 
<window frame exclusion> ::= "EXCLUDE" "CURRENT" "ROW" | "EXCLUDE" "GROUP" | "EXCLUDE" "TIES" | "EXCLUDE" "NO" "OTHERS" 
<table expression>.

<query specification> ::= "SELECT" [ <set quantifier> ] <select list> <table expression>

<select list> ::= "*" | <select sublist> [ { "," <select sublist> }... ]

<select sublist> ::= <derived column> | <qualified asterisk>

<qualified asterisk> ::= <asterisked identifier chain> "." "*" | <all fields reference>

<asterisked identifier chain> ::= <asterisked identifier> [ { "." <asterisked identifier> }... ]

<asterisked identifier> ::= <identifier>

<derived column> ::= <value expression> [ <as clause> ]

<as clause> ::= [ "AS" ] <identifier>

<all fields reference> ::= <value expression primary> "." "*" [ "AS" "(" <all fields column name list> ")" ]

<all fields column name list> ::= <column name list>

<query expression> ::= [ <with clause> ] <query expression body>

<with clause> ::= "WITH" [ "RECURSIVE" ] <with list>

<with list> ::= <with list element> [ { "," <with list element> }... ]

<with list element> ::= <identifier> [ "(" <with column list> ")" ] "AS" "(" <query expression> ")" [ <search or cycle clause> ]

<with column list> ::= <column name list>

<query expression body> ::= <non-join query expression> | <joined table>

<non-join query expression> ::= <non-join query term> | <query expression body> "UNION" [ "ALL" | "DISTINCT" ] [ <corresponding spec> ] <query term> | <query expression body> "EXCEPT" [ "ALL" | "DISTINCT" ] [ <corresponding spec> ] <query term>

<query term> ::= <non-join query term> | <joined table>

<non-join query term> ::= <non-join query primary> | <query term> "INTERSECT" [ "ALL" | "DISTINCT" ] [ <corresponding spec> ] <query primary>

<query primary> ::= <non-join query primary> | <joined table>

<non-join query primary> ::= <simple table> | "(" <non-join query expression> ")"

<simple table> ::= <query specification> | <table value constructor> | <explicit table>

<explicit table> ::= "TABLE" <table or query name>

<corresponding spec> ::= "CORRESPONDING" [ "BY" "(" <corresponding column list> ")" ]

<corresponding column list> ::= <column name list>

<search or cycle clause> ::= <search clause> | <cycle clause> | <search clause> <cycle clause>

<search clause> ::= "SEARCH" <recursive search order> "SET" <sequence column>

<recursive search order> ::= "DEPTH" "FIRST" "BY" <sort specification list> | "BREADTH" "FIRST" "BY" <sort specification list>

<sequence column> ::= <identifier>

<cycle clause> ::= "CYCLE" <cycle column list> "SET" <cycle mark column> "TO" <cycle mark value> "DEFAULT" <non-cycle mark value> "USING" <path column>

<cycle column list> ::= <cycle column> [ { "," <cycle column> }... ]

<cycle column> ::= <identifier>

<cycle mark column> ::= <identifier>

<path column> ::= <identifier>

<cycle mark value> ::= <value expression>

<non-cycle mark value> ::= <value expression>

<scalar subquery> ::= <subquery>

<row subquery> ::= <subquery>

<table subquery> ::= <subquery>

<subquery> ::= "(" <query expression> ")"

<predicate> ::= <comparison predicate> | <between predicate> | <in predicate> | <like predicate> | <similar predicate> | <null predicate> | <quantified comparison predicate> | <exists predicate> | <unique predicate> | <normalized predicate> | <match predicate> | <overlaps predicate> | <distinct predicate> | <member predicate> | <submultiset predicate> | <set predicate> | <type predicate>

<comparison predicate> ::= <row value predicand> <comparison predicate part 2>

<comparison predicate part 2> ::= <comp op> <row value predicand>

<comp op> ::= "=" | "<>" | < | > | "<=" | ">="

<between predicate> ::= <row value predicand> <between predicate part 2>

<between predicate part 2> ::= [ "NOT" ] "BETWEEN" [ "ASYMMETRIC" | "SYMMETRIC" ] <row value predicand> "AND" <row value predicand>

<in predicate> ::= <row value predicand> <in predicate part 2> 

<in predicate part 2> ::= [ "NOT" ] "IN" <in predicate value>

<in predicate value> ::= <table subquery> | "(" <in value list> ")"

<in value list> ::= <row value expression> [ { "," <row value expression> }... ]

<like predicate> ::= <character like predicate> | <octet like predicate>

<character like predicate> ::= <row value predicand> <character like predicate part 2>

<character like predicate part 2> ::= [ "NOT" ] "LIKE" <character pattern> [ "ESCAPE" <escape character> ]

<character pattern> ::= <character value expression>

<escape character> ::= <character value expression>

<octet like predicate> ::= <row value predicand> <octet like predicate part 2>

<octet like predicate part 2> ::= [ "NOT" ] "LIKE" <octet pattern> [ "ESCAPE" <escape octet> ]

<octet pattern> ::= <blob value expression>

<escape octet> ::= <blob value expression>

<similar predicate> ::= <row value predicand> <similar predicate part 2>

<similar predicate part 2> ::= [ "NOT" ] "SIMILAR" "TO" <similar pattern> [ "ESCAPE" <escape character> ]

<similar pattern> ::= <character value expression>

<regular expression> ::= <regular term> | <regular expression> "|" <regular term>

<regular term> ::= <regular factor> | <regular term> <regular factor>

<regular factor> ::= <regular primary> | <regular primary> "*" | <regular primary> "+" | <regular primary> "?" | <regular primary> <repeat factor>

<repeat factor> ::= "{" <low value> [ <upper limit> ] "}"

<upper limit> ::= "," [ <high value> ]

<low value> ::= <unsigned integer>

<high value> ::= <unsigned integer>

<regular primary> ::= <character specifier> | "%" | <regular character set> | "(" <regular expression> ")"

<character specifier> ::= <non-escaped character> | <escaped character>

<regular character set> ::= "_" | "[" <character enumeration>... "]" | "[" "^" <character enumeration>... "]" | "[" <character enumeration include>...  "^" <character enumeration exclude>... "]"

<character enumeration include> ::= <character enumeration>

<character enumeration exclude> ::= <character enumeration>

<character enumeration> ::= <character specifier> | <character specifier> "-" <character specifier> | "[" ":" <regular character set identifier> ":" "]"

<regular character set identifier> ::= <identifier>

<null predicate> ::= <row value predicand> <null predicate part 2>

<null predicate part 2> ::= "IS" [ "NOT" ] "NULL" 

<quantified comparison predicate> ::= <row value predicand> <quantified comparison predicate part 2>

<quantified comparison predicate part 2> ::= <comp op> <quantifier> <table subquery>

<quantifier> ::= <all> | <some>

<all> ::= "ALL" 
<some> ::= "SOME" | "ANY" 
<exists predicate> ::= "EXISTS" <table subquery>

<unique predicate> ::= "UNIQUE" <table subquery>

<normalized predicate> ::= <string value expression> "IS" [ "NOT" ] "NORMALIZED" 
<match predicate> ::= <row value predicand> <match predicate part 2>

<match predicate part 2> ::= "MATCH" [ "UNIQUE" ] [ "SIMPLE" | "PARTIAL" | "FULL" ] <table subquery>

<overlaps predicate> ::= <overlaps predicate part 1> <overlaps predicate part 2>

<overlaps predicate part 1> ::= <row value predicand 1>

<overlaps predicate part 2> ::= "OVERLAPS" <row value predicand 2>

<row value predicand 1> ::= <row value predicand>

<row value predicand 2> ::= <row value predicand>

<distinct predicate> ::= <row value predicand 3> <distinct predicate part 2>

<distinct predicate part 2> ::= "IS" "DISTINCT" "FROM" <row value predicand 4>

<row value predicand 3> ::= <row value predicand>

<row value predicand 4> ::= <row value predicand>

<member predicate> ::= <row value predicand> <member predicate part 2>

<member predicate part 2> ::= [ "NOT" ] "MEMBER" [ "OF" ] <multiset value expression>

<submultiset predicate> ::= <row value predicand> <submultiset predicate part 2>

<submultiset predicate part 2> ::= [ "NOT" ] "SUBMULTISET" [ "OF" ] <multiset value expression>

<set predicate> ::= <row value predicand> <set predicate part 2>

<set predicate part 2> ::= "IS" [ "NOT" ] "A" "SET" 
<type predicate> ::= <row value predicand> <type predicate part 2>

<type predicate part 2> ::= "IS" [ "NOT" ] "OF" "(" <type list> ")"

<type list> ::= <user-defined type specification> [ { "," <user-defined type specification> }... ]

<user-defined type specification> ::= <inclusive user-defined type specification> | <exclusive user-defined type specification>

<inclusive user-defined type specification> ::= <path-resolved user-defined type name>

<exclusive user-defined type specification> ::= "ONLY" <path-resolved user-defined type name>

<search condition> ::= <boolean value expression>

<interval qualifier> ::= <start field> "TO" <end field> | <single datetime field>

<start field> ::= <non-second primary datetime field> [ "(" <unsigned integer> ")" ]

<end field> ::= <non-second primary datetime field> | "SECOND" [ "(" <unsigned integer> ")" ]

<single datetime field> ::= <non-second primary datetime field> [ "(" <unsigned integer> ")" ] | "SECOND" [ "(" <unsigned integer> [ "," <unsigned integer> ] ")" ]

<primary datetime field> ::= <non-second primary datetime field> | "SECOND"

<non-second primary datetime field> ::= "YEAR" | "MONTH" | "DAY" | "HOUR" | "MINUTE" 

<language clause> ::= "LANGUAGE" ("ADA" | "C" | "COBOL" | "FORTRAN" | "MUMPS" | "PASCAL" | "PLI" | "SQL")

<path specification> ::= "PATH" <schema name list>

<schema name list> ::= <schema name> [ { "," <schema name> }... ]

<routine invocation> ::= <routine name> <SQL argument list>

<routine name> ::= [ <schema name> "." ] <qualified identifier>

<SQL argument list> ::= "(" [ <SQL argument> [ { "," <SQL argument> }... ] ] ")"

<SQL argument> ::= <value expression> | <generalized expression> | <target specification>

<generalized expression> ::= <value expression> "AS" <path-resolved user-defined type name>

<character set specification> ::= <standard character set name> | <implementation-defined character set name> | <user-defined character set name>

<standard character set name> ::= <character set name>

<implementation-defined character set name> ::= <character set name>

<user-defined character set name> ::= <character set name>

<specific routine designator> ::= "SPECIFIC" <routine type> <specific name> 	|	<routine type> <member name> [ "FOR" <schema-resolved user-defined type name> ]

<routine type> ::= "ROUTINE" | "FUNCTION" | "PROCEDURE" | [ "INSTANCE" | "STATIC" | "CONSTRUCTOR" ] "METHOD" 
<member name> ::= <member name alternatives> [ <data type list> ]

<member name alternatives> ::= <schema qualified routine name> | <identifier>

<data type list> ::= "(" [ <data type> [ { "," <data type> }... ] ] ")"

<collate clause> ::= "COLLATE" <collation name>

<constraint name definition> ::= "CONSTRAINT" <constraint name>

<constraint characteristics> ::= <constraint check time> [ [ "NOT" ] "DEFERRABLE" ] | [ "NOT" ] "DEFERRABLE" [ <constraint check time> ]

<constraint check time> ::= "INITIALLY" "DEFERRED" | "INITIALLY" "IMMEDIATE" 
<aggregate function> ::= "COUNT" "(" "*" ")" [ <filter clause> ] | <general set function> [ <filter clause> ] | <binary set function> [ <filter clause> ] | <ordered set function> [ <filter clause> ]

<general set function> ::= <set function type> "(" [ <set quantifier> ] <value expression> ")"

<set function type> ::= <computational operation>

<computational operation> ::= "AVG" | "MAX" | "MIN" | "SUM" | "EVERY" | "ANY" | "SOME" | "COUNT" | "STDDEV_POP" | "STDDEV_SAMP" | "VAR_SAMP" | "VAR_POP" | "COLLECT" | "FUSION" | "INTERSECTION" 
<set quantifier> ::= "DISTINCT" | "ALL" 
<filter clause> ::= "FILTER" "(" "WHERE" <search condition> ")"

<binary set function> ::= <binary set function type> "(" <dependent variable expression> "," <independent variable expression> ")"

<binary set function type> ::= "COVAR_POP" | "COVAR_SAMP" | "CORR" | "REGR_SLOPE" | "REGR_INTERCEPT" | "REGR_COUNT" | REGR_R2 | "REGR_AVGX" | "REGR_AVGY" | "REGR_SXX" | "REGR_SYY" | "REGR_SXY" 
<dependent variable expression> ::= <numeric value expression>

<independent variable expression> ::= <numeric value expression>

<ordered set function> ::= <hypothetical set function> | <inverse distribution function>

<hypothetical set function> ::= <rank function type> "(" <hypothetical set function value expression list> ")" <within group specification>

<within group specification> ::= "WITHIN" "GROUP" "(" "ORDER" "BY" <sort specification list> ")"

<hypothetical set function value expression list> ::= <value expression> [ { "," <value expression> }... ]

<inverse distribution function> ::= <inverse distribution function type> "(" <inverse distribution function argument> ")" <within group specification>

<inverse distribution function argument> ::= <numeric value expression>

<inverse distribution function type> ::= "PERCENTILE_CONT" | "PERCENTILE_DISC" 
<sort specification list> ::= <sort specification> [ { "," <sort specification> }... ]

<sort specification> ::= <sort key> [ <ordering specification> ] [ <null ordering> ]

<sort key> ::= <value expression>

<ordering specification> ::= "ASC" | "DESC" 
<null ordering> ::= "NULLS" "FIRST" | "NULLS" "LAST" 
<schema definition> ::= "CREATE" "SCHEMA" <schema name clause> [ <schema character set or path> ] [ <schema element>... ]

<schema character set or path> ::= <schema character set specification> | <schema path specification> | <schema character set specification> <schema path specification> | <schema path specification> <schema character set specification>

<schema name clause> ::= <schema name> | "AUTHORIZATION" <schema authorization identifier> | <schema name> "AUTHORIZATION" <schema authorization identifier>

<schema authorization identifier> ::= <authorization identifier>

<schema character set specification> ::= "DEFAULT" "CHARACTER" "SET" <character set specification>

<schema path specification> ::= <path specification>

<schema element> ::= <table definition> | <view definition> | <domain definition> | <character set definition> | <collation definition> | <transliteration definition> | <assertion definition> | <trigger definition> | <user-defined type definition> | <user-defined cast definition> | <user-defined ordering definition> | <transform definition> | <schema routine> | <sequence generator definition> | <grant statement> | <role definition>

<drop schema statement> ::= "DROP" "SCHEMA" <schema name> <drop behavior>

<drop behavior> ::= "CASCADE" | "RESTRICT" 
<table definition> ::= "CREATE" [ <table scope> ] "TABLE" <table name> <table contents source> [ "ON" "COMMIT" <table commit action> "ROWS" ]

<table contents source> ::= <table element list> | "OF" <path-resolved user-defined type name> [ <subtable clause> ] [ <table element list> ] | <as subquery clause>

<table scope> ::= <global or local> "TEMPORARY" 
<global or local> ::= "GLOBAL" | "LOCAL" 
<table commit action> ::= "PRESERVE" | "DELETE" 
<table element list> ::= "(" <table element> [ { "," <table element> }... ] ")"

<table element> ::= <column definition> | <table constraint definition> | <like clause> | <self-referencing column specification> | <column options>

<self-referencing column specification> ::= "REF" "IS" <self-referencing column name> <reference generation>

<reference generation> ::= "SYSTEM" "GENERATED" | "USER" "GENERATED" | "DERIVED" 
<self-referencing column name> ::= <identifier>

<column options> ::= <identifier> "WITH" "OPTIONS" <column option list>

<column option list> ::= [ ("SCOPE" <table name>) ] [ <default clause> ] [ <column constraint definition>... ]

<subtable clause> ::= "UNDER" <supertable clause>

<supertable clause> ::= <supertable name>

<supertable name> ::= <table name>

<like clause> ::= "LIKE" <table name> [ <like options> ]

<like options> ::= <identity option> | <column default option>

<identity option> ::= "INCLUDING" "IDENTITY" | "EXCLUDING" "IDENTITY" 
<column default option> ::= "INCLUDING" "DEFAULTS" | "EXCLUDING" "DEFAULTS" 
<as subquery clause> ::= [ "(" <column name list> ")" ] "AS" <subquery> <with or without data>

<with or without data> ::= "WITH" "NO" "DATA" | "WITH" "DATA" 
<column definition> ::= <identifier> [ <data type> | <domain name> ] [ <reference scope check> ] [ <default clause> | <identity column specification> | <generation clause> ] [ <column constraint definition>... ] [ <collate clause> ]

<column constraint definition> ::= [ <constraint name definition> ] <column constraint> [ <constraint characteristics> ]

<column constraint> ::= "NOT" "NULL" | <unique specification> | <references specification> | <check constraint definition>

<reference scope check> ::= "REFERENCES" "ARE" [ "NOT" ] "CHECKED" [ "ON" "DELETE" <reference scope check action> ]

<reference scope check action> ::= <referential action>

<identity column specification> ::= "GENERATED" { "ALWAYS" | "BY" "DEFAULT" } "AS" "IDENTITY" [ "(" <common sequence generator options> ")" ]

<generation clause> ::= <generation rule> "AS" <generation expression>

<generation rule> ::= "GENERATED" "ALWAYS" 
<generation expression> ::= "(" <value expression> ")"

<default clause> ::= "DEFAULT" <default option>

<default option> ::= ((["+" | "-"] <unsigned numeric literal>) | <general literal>) | <datetime value function> | "USER" | "CURRENT_USER" | "CURRENT_ROLE" | "SESSION_USER" | "SYSTEM_USER" | "CURRENT_PATH" | <implicitly typed value specification>

<table constraint definition> ::= [ <constraint name definition> ] <table constraint> [ <constraint characteristics> ]

<table constraint> ::= <unique constraint definition> | <referential constraint definition> | <check constraint definition>

<unique constraint definition> ::= <unique specification> "(" <unique column list> ")" | "UNIQUE" ( "VALUE" )

<unique specification> ::= "UNIQUE" | "PRIMARY" "KEY" 
<unique column list> ::= <column name list>

<referential constraint definition> ::= "FOREIGN" "KEY" "(" <referencing columns> ")" <references specification>

<references specification> ::= "REFERENCES" <referenced table and columns> [ "MATCH" <match type> ] [ <referential triggered action> ]

<match type> ::= "FULL" | "PARTIAL" | "SIMPLE" 
<referencing columns> ::= <reference column list>

<referenced table and columns> ::= <table name> [ "(" <reference column list> ")" ]

<reference column list> ::= <column name list>

<referential triggered action> ::= <update rule> [ <delete rule> ] | <delete rule> [ <update rule> ]

<update rule> ::= "ON" "UPDATE" <referential action>

<delete rule> ::= "ON" "DELETE" <referential action>

<referential action> ::= "CASCADE" | "SET" "NULL" | "SET" "DEFAULT" | "RESTRICT" | "NO" "ACTION" 
<check constraint definition> ::= "CHECK" "(" <search condition> ")"

<alter table statement> ::= "ALTER" "TABLE" <table name> <alter table action>

<alter table action> ::= <add column definition> | <alter column definition> | <drop column definition> | <add table constraint definition> | <drop table constraint definition>

<add column definition> ::= "ADD" [ "COLUMN" ] <column definition>

<alter column definition> ::= "ALTER" [ "COLUMN" ] <identifier> <alter column action>

<alter column action> ::= <set column default clause> | <drop column default clause> | <add column scope clause> | <drop column scope clause> | <alter identity column specification>

<set column default clause> ::= "SET" <default clause>

<drop column default clause> ::= "DROP" "DEFAULT" 
<add column scope clause> ::= "ADD" ("SCOPE" <table name>)

<drop column scope clause> ::= "DROP" "SCOPE" <drop behavior>

<alter identity column specification> ::= <alter identity column option>...

<alter identity column option> ::= <alter sequence generator restart option> | "SET" <basic sequence generator option>

<drop column definition> ::= "DROP" [ "COLUMN" ] <identifier> <drop behavior>

<add table constraint definition> ::= "ADD" <table constraint definition>

<drop table constraint definition> ::= "DROP" "CONSTRAINT" <constraint name> <drop behavior>

<drop table statement> ::= "DROP" "TABLE" <table name> <drop behavior>

<view definition> ::= "CREATE" [ "RECURSIVE" ] "VIEW" <table name> <view specification> "AS" <query expression> [ "WITH" [ <levels clause> ] "CHECK" "OPTION" ]

<view specification> ::= <regular view specification> | <referenceable view specification>

<regular view specification> ::= [ "(" <view column list> ")" ]

<referenceable view specification> ::= "OF" <path-resolved user-defined type name> [ <subview clause> ] [ <view element list> ]

<subview clause> ::= "UNDER" <table name>

<view element list> ::= "(" <view element> [ { "," <view element> }... ] ")"

<view element> ::= <self-referencing column specification> | <view column option>

<view column option> ::= <identifier> "WITH" "OPTIONS" ("SCOPE" <table name>)

<levels clause> ::= "CASCADED" | "LOCAL" 
<view column list> ::= <column name list>

<drop view statement> ::= "DROP" "VIEW" <table name> <drop behavior>

<domain definition> ::= "CREATE" "DOMAIN" <domain name> [ "AS" ] <data type> [ <default clause> ] [ <domain constraint>... ] [ <collate clause> ]

<domain constraint> ::= [ <constraint name definition> ] <check constraint definition> [ <constraint characteristics> ]

<alter domain statement> ::= "ALTER" "DOMAIN" <domain name> <alter domain action>

<alter domain action> ::= <set domain default clause> | <drop domain default clause> | <add domain constraint definition> | <drop domain constraint definition>

<set domain default clause> ::= "SET" <default clause>

<drop domain default clause> ::= "DROP" "DEFAULT" 
<add domain constraint definition> ::= "ADD" <domain constraint>

<drop domain constraint definition> ::= "DROP" "CONSTRAINT" <constraint name>

<drop domain statement> ::= "DROP" "DOMAIN" <domain name> <drop behavior>

<character set definition> ::= "CREATE" "CHARACTER" "SET" <character set name> [ "AS" ] <character set source> [ <collate clause> ]

<character set source> ::= "GET" <character set specification>

<drop character set statement> ::= "DROP" "CHARACTER" "SET" <character set name>

<collation definition> ::= "CREATE" "COLLATION" <collation name> "FOR" <character set specification> "FROM" <existing collation name> [ <pad characteristic> ]

<existing collation name> ::= <collation name>

<pad characteristic> ::= "NO" "PAD" | "PAD" "SPACE" 
<drop collation statement> ::= "DROP" "COLLATION" <collation name> <drop behavior>

<transliteration definition> ::= "CREATE" "TRANSLATION" <transliteration name> "FOR" <source character set specification> "TO" <target character set specification> "FROM" <transliteration source>

<source character set specification> ::= <character set specification>

<target character set specification> ::= <character set specification>

<transliteration source> ::= <existing transliteration name> | <transliteration routine>

<existing transliteration name> ::= <transliteration name>

<transliteration routine> ::= <specific routine designator>

<drop transliteration statement> ::= "DROP" "TRANSLATION" <transliteration name>

<assertion definition> ::= "CREATE" "ASSERTION" <constraint name> "CHECK" "(" <search condition> ")" [ <constraint characteristics> ]

<drop assertion statement> ::= "DROP" "ASSERTION" <constraint name>

<trigger definition> ::= "CREATE" "TRIGGER" <trigger name> <trigger action time> <trigger event> "ON" <table name> [ "REFERENCING" <old or new values alias list> ] <triggered action>

<trigger action time> ::= "BEFORE" | "AFTER" 
<trigger event> ::= "INSERT" | "DELETE" | "UPDATE" [ "OF" <trigger column list> ]

<trigger column list> ::= <column name list>

<triggered action> ::= [ "FOR" "EACH" { "ROW" | "STATEMENT" } ] [ "WHEN" "(" <search condition> ")" ] <triggered "SQL" statement>

<triggered "SQL" statement> ::= <SQL procedure statement> | "BEGIN" "ATOMIC" { <SQL procedure statement> ";" }...  "END" 
<old or new values alias list> ::= <old or new values alias>...

<old or new values alias> ::= "OLD" [ "ROW" ] [ "AS" ] <old values correlation name> | "NEW" [ "ROW" ] [ "AS" ] <new values correlation name> | "OLD" "TABLE" [ "AS" ] <old values table alias> | "NEW" "TABLE" [ "AS" ] <new values table alias>

<old values table alias> ::= <identifier>

<new values table alias> ::= <identifier>

<old values correlation name> ::= <identifier>

<new values correlation name> ::= <identifier>

<drop trigger statement> ::= "DROP" "TRIGGER" <trigger name>

<user-defined type definition> ::= "CREATE" "TYPE" <user-defined type body>

<user-defined type body> ::= <schema-resolved user-defined type name> [ <subtype clause> ] [ "AS" <representation> ] [ <user-defined type option list> ] [ <method specification list> ]

<user-defined type option list> ::= <user-defined type option> [ <user-defined type option>... ]

<user-defined type option> ::= <instantiable clause> | <finality> | <reference type specification> | <ref cast option> | <cast option>

<subtype clause> ::= "UNDER" <supertype name>

<supertype name> ::= <path-resolved user-defined type name>

<representation> ::= <predefined type> | <member list>

<member list> ::= "(" <member> [ { "," <member> }... ] ")"

<member> ::= <attribute definition>

<instantiable clause> ::= "INSTANTIABLE" | "NOT" "INSTANTIABLE" 
<finality> ::= "FINAL" | "NOT" "FINAL" 
<reference type specification> ::= <user-defined representation> | <derived representation> | <system-generated representation>

<user-defined representation> ::= "REF" "USING" <predefined type>

<derived representation> ::= "REF" "FROM" <list of attributes>

<system-generated representation> ::= "REF" "IS" "SYSTEM" "GENERATED" 
<ref cast option> ::= [ <cast to ref> ] [ <cast to type> ]

<cast to ref> ::= "CAST" "(" "SOURCE" "AS" "REF" ")" "WITH" <cast to ref identifier>

<cast to ref identifier> ::= <identifier>

<cast to type> ::= "CAST" "(" "REF" "AS" "SOURCE" ")" "WITH" <cast to type identifier>

<cast to type identifier> ::= <identifier>

<list of attributes> ::= "(" <identifier> [ { "," <identifier> }...] ")"

<cast option> ::= [ <cast to distinct> ] [ <cast to source> ]

<cast to distinct> ::= "CAST" "(" "SOURCE" "AS" "DISTINCT" ")" "WITH" <cast to distinct identifier>

<cast to distinct identifier> ::= <identifier>

<cast to source> ::= "CAST" "(" "DISTINCT" "AS" "SOURCE" ")" "WITH" <cast to source identifier>

<cast to source identifier> ::= <identifier>

<method specification list> ::= <method specification> [ { "," <method specification> }... ]

<method specification> ::= <original method specification> | <overriding method specification>

<original method specification> ::= <partial method specification> [ "SELF" "AS" "RESULT" ] [ "SELF" "AS" "LOCATOR" ] [ <method characteristics> ]

<overriding method specification> ::= "OVERRIDING" <partial method specification>

<partial method specification> ::= [ "INSTANCE" | "STATIC" | "CONSTRUCTOR" ] "METHOD" <identifier> <SQL parameter declaration list> <returns clause> [ "SPECIFIC" <specific method name> ]

<specific method name> ::= [ <schema name> "." ]<qualified identifier>

<method characteristics> ::= <method characteristic>...

<method characteristic> ::= <language clause> | <parameter style clause> | <deterministic characteristic> | <SQL-data access indication> | <null-call clause>

<attribute definition> ::= <identifier> <data type> [ <reference scope check> ] [ <attribute default> ] [ <collate clause> ]

<attribute default> ::= <default clause>

<alter type statement> ::=

<alter type action> ::= <add attribute definition> | <drop attribute definition> | <add original method specification> | <add overriding method specification> | <drop method specification>

<add attribute definition> ::= "ADD" "ATTRIBUTE" <attribute definition>

<drop attribute definition> ::= "DROP" "ATTRIBUTE" <identifier> "RESTRICT" 
<add original method specification> ::= "ADD" <original method specification>

<add overriding method specification> ::= "ADD" <overriding method specification>

<drop method specification> ::= "DROP" <specific method specification designator> "RESTRICT" 
<specific method specification designator> ::= [ "INSTANCE" | "STATIC" | "CONSTRUCTOR" ] "METHOD" <identifier> <data type list>

<drop data type statement> ::= "DROP" "TYPE" <schema-resolved user-defined type name> <drop behavior>

<SQL-invoked routine> ::= <schema routine>

<schema routine> ::= <schema procedure> | <schema function>

<schema procedure> ::= "CREATE" <SQL-invoked procedure>

<schema function> ::= "CREATE" <SQL-invoked function>

<SQL-invoked procedure> ::= "PROCEDURE" <schema qualified routine name> <SQL parameter declaration list> <routine characteristics> <routine body>

<SQL-invoked function> ::= { <function specification> | <method specification designator> } <routine body>

<SQL parameter declaration list> ::= "(" [ <SQL parameter declaration> [ { "," <SQL parameter declaration> }... ] ] ")"

<SQL parameter declaration> ::= [ <parameter mode> ] [ <SQL parameter name> ] <parameter type> [ "RESULT" ]

<parameter mode> ::= "IN" | "OUT" | "INOUT" 
<parameter type> ::= <data type> [ <locator indication> ]

<locator indication> ::= "AS" "LOCATOR" 
<function specification> ::= "FUNCTION" <schema qualified routine name> <SQL parameter declaration list> <returns clause> <routine characteristics> [ <dispatch clause> ]

<method specification designator> ::= "SPECIFIC" "METHOD" <specific method name> | [ "INSTANCE" | "STATIC" | "CONSTRUCTOR" ] "METHOD" <identifier> <SQL parameter declaration list> [ <returns clause> ] "FOR" <schema-resolved user-defined type name>

<routine characteristics> ::= [ <routine characteristic>... ]

<routine characteristic> ::= <language clause> | <parameter style clause> | "SPECIFIC" <specific name> | <deterministic characteristic> | <SQL-data access indication> | <null-call clause> | <dynamic result sets characteristic> | <savepoint level indication>

<savepoint level indication> ::= "NEW" "SAVEPOINT" "LEVEL" | "OLD" "SAVEPOINT" "LEVEL" 
<dynamic result sets characteristic> ::= "DYNAMIC" "RESULT" "SETS" <maximum dynamic result sets>

<parameter style clause> ::= "PARAMETER" "STYLE" <parameter style>

<dispatch clause> ::= "STATIC" "DISPATCH" 
<returns clause> ::= "RETURNS" <returns type>

<returns type> ::= <returns data type> [ <result cast> ] | <returns table type>

<returns table type> ::= "TABLE" <table function column list>

<table function column list> ::= "(" <table function column list element> [ { "," <table function column list element> }... ] ")"

<table function column list element> ::= <identifier> <data type>

<result cast> ::= "CAST" "FROM" <result cast from type>

<result cast from type> ::= <data type> [ <locator indication> ]

<returns data type> ::= <data type> [ <locator indication> ]

<routine body> ::= <SQL routine spec> | <external body reference>

<SQL routine spec> ::= [ <rights clause> ] <SQL routine body>

<rights clause> ::= "SQL" "SECURITY" "INVOKER" | "SQL" "SECURITY" "DEFINER" 
<SQL routine body> ::= <SQL procedure statement>

<external body reference> ::= "EXTERNAL" [ "NAME" <external routine name> ] [ <parameter style clause> ] [ <transform group specification> ] [ <external security clause> ]

<external security clause> ::= "EXTERNAL" "SECURITY" "DEFINER" | "EXTERNAL" "SECURITY" "INVOKER" | "EXTERNAL" "SECURITY" "IMPLEMENTATION" "DEFINED" 
<parameter style> ::= "SQL" | "GENERAL" 
<deterministic characteristic> ::= "DETERMINISTIC" | "NOT" "DETERMINISTIC" 
<SQL-data access indication> ::= "NO" "SQL" | "CONTAINS" "SQL" | "READS" "SQL" "DATA" | "MODIFIES" "SQL" "DATA" 
<null-call clause> ::= "RETURNS" "NULL" "ON" "NULL" "INPUT" | "CALLED" "ON" "NULL" "INPUT" 
<maximum dynamic result sets> ::= <unsigned integer>

<transform group specification> ::= "TRANSFORM" "GROUP" { <single group specification> | <multiple group specification> }

<single group specification> ::= <group name>

<multiple group specification> ::= <group specification> [ { "," <group specification> }... ]

<group specification> ::= <group name> "FOR" "TYPE" <path-resolved user-defined type name>

<alter routine statement> ::= "ALTER" <specific routine designator> <alter routine characteristics> <alter routine behavior>

<alter routine characteristics> ::= <alter routine characteristic>...

<alter routine characteristic> ::= <language clause> | <parameter style clause> | <SQL-data access indication> | <null-call clause> | <dynamic result sets characteristic> | "NAME" <external routine name>

<alter routine behavior> ::= "RESTRICT" 
<drop routine statement> ::= "DROP" <specific routine designator> <drop behavior>

<user-defined cast definition> ::= "CREATE" "CAST" "(" <source data type> "AS" <target data type> ")" "WITH" <cast function> [ "AS" "ASSIGNMENT" ]

<cast function> ::= <specific routine designator>

<source data type> ::= <data type>

<target data type> ::= <data type>

<drop user-defined cast statement> ::= "DROP" "CAST" "(" <source data type> "AS" <target data type> ")" <drop behavior>

<user-defined ordering definition> ::= "CREATE" "ORDERING" "FOR" <schema-resolved user-defined type name> <ordering form>

<ordering form> ::= <equals ordering form> | <full ordering form>

<equals ordering form> ::= "EQUALS" "ONLY" "BY" <ordering category>

<full ordering form> ::= "ORDER" "FULL" "BY" <ordering category>

<ordering category> ::= <relative category> | <map category> | <state category>

<relative category> ::= "RELATIVE" "WITH" <relative function specification>

<map category> ::= "MAP" "WITH" <map function specification>

<state category> ::= "STATE" [ <specific name> ]

<relative function specification> ::= <specific routine designator>

<map function specification> ::= <specific routine designator>

<drop user-defined ordering statement> ::= "DROP" "ORDERING" "FOR" <schema-resolved user-defined type name> <drop behavior>

<transform definition> ::= "CREATE" { "TRANSFORM" | "TRANSFORMS" } "FOR" <schema-resolved user-defined type name> <transform group>...

<transform group> ::= <group name> "(" <transform element list> ")"

<group name> ::= <identifier>

<transform element list> ::= <transform element> [ "," <transform element> ]

<transform element> ::= <to sql> | <from sql>

<to sql> ::= "TO" "SQL" "WITH" <to sql function>

<from sql> ::= "FROM" "SQL" "WITH" <from sql function>

<to sql function> ::= <specific routine designator>

<from sql function> ::= <specific routine designator>

<alter transform statement> ::= "ALTER" { "TRANSFORM" | "TRANSFORMS" } "FOR" <schema-resolved user-defined type name> <alter group>...

<alter group> ::= <group name> "(" <alter transform action list> ")"

<alter transform action list> ::= <alter transform action> [ { "," <alter transform action> }... ]

<alter transform action> ::= <add transform element list> | <drop transform element list>

<add transform element list> ::= "ADD" "(" <transform element list> ")"

<drop transform element list> ::= "DROP" "(" <transform kind> [ "," <transform kind> ] <drop behavior> ")"

<transform kind> ::= "TO" "SQL" | "FROM" "SQL" 
<drop transform statement> ::= "DROP" { "TRANSFORM" | "TRANSFORMS" } <transforms to be dropped> "FOR" <schema-resolved user-defined type name> <drop behavior>

<transforms to be dropped> ::= "ALL" | <transform group element>

<transform group element> ::= <group name>

<sequence generator definition> ::= "CREATE" "SEQUENCE" <sequence generator name> [ <sequence generator options> ]

<sequence generator options> ::= <sequence generator option> ...

<sequence generator option> ::= <sequence generator data type option> | <common sequence generator options>

<common sequence generator options> ::= <common sequence generator option> ...

<common sequence generator option> ::= <sequence generator start with option> | <basic sequence generator option>

<basic sequence generator option> ::= <sequence generator increment by option> | <sequence generator maxvalue option> | <sequence generator minvalue option> | <sequence generator cycle option>

<sequence generator data type option> ::= "AS" <data type>

<sequence generator start with option> ::= "START" "WITH" <sequence generator start value>

<sequence generator start value> ::= (["+" | "-"] <unsigned numeric literal>)

<sequence generator increment by option> ::= "INCREMENT" "BY" <sequence generator increment>

<sequence generator increment> ::= (["+" | "-"] <unsigned numeric literal>)

<sequence generator maxvalue option> ::= "MAXVALUE" <sequence generator max value> | "NO" "MAXVALUE" 
<sequence generator max value> ::= (["+" | "-"] <unsigned numeric literal>)

<sequence generator minvalue option> ::= "MINVALUE" <sequence generator min value> | "NO" "MINVALUE" 
<sequence generator min value> ::= (["+" | "-"] <unsigned numeric literal>)

<sequence generator cycle option> ::= "CYCLE" | "NO" "CYCLE" 
<alter sequence generator statement> ::= "ALTER" "SEQUENCE" <sequence generator name> <alter sequence generator options>

<alter sequence generator options> ::= <alter sequence generator option>...

<alter sequence generator option> ::= <alter sequence generator restart option> | <basic sequence generator option>

<alter sequence generator restart option> ::= "RESTART" "WITH" <sequence generator restart value>

<sequence generator restart value> ::= (["+" | "-"] <unsigned numeric literal>)

<drop sequence generator statement> ::= "DROP" "SEQUENCE" <sequence generator name> <drop behavior>

<grant statement> ::= <grant privilege statement> | <grant role statement>

<grant privilege statement> ::= "GRANT" <privileges> "TO" <grantee> [ { "," <grantee> }... ] [ "WITH" "HIERARCHY" "OPTION" ] [ "WITH" "GRANT" "OPTION" ] [ "GRANTED" "BY" <grantor> ]

<privileges> ::= <object privileges> "ON" <object name>

<object name> ::= [ "TABLE" ] <table name> | "DOMAIN" <domain name> | "COLLATION" <collation name> | "CHARACTER" "SET" <character set name> | "TRANSLATION" <transliteration name> | "TYPE" <schema-resolved user-defined type name> | "SEQUENCE" <sequence generator name> | <specific routine designator>

<object privileges> ::= "ALL" "PRIVILEGES" | <action> [ { "," <action> }... ]

<action> ::= "SELECT" | "SELECT" "(" <privilege column list> ")" | "SELECT" "(" <privilege method list> ")" | "DELETE" | "INSERT" [ "(" <privilege column list> ")" ] | "UPDATE" [ "(" <privilege column list> ")" ] | "REFERENCES" [ "(" <privilege column list> ")" ] | "USAGE" | "TRIGGER" | "UNDER" | "EXECUTE" 
<privilege method list> ::= <specific routine designator> [ { "," <specific routine designator> }... ]

<privilege column list> ::= <column name list>

<grantee> ::= "PUBLIC" | <authorization identifier>

<grantor> ::= "CURRENT_USER" | "CURRENT_ROLE" 
<role definition> ::= "CREATE" "ROLE" <identifier> [ "WITH" "ADMIN" <grantor> ]

<grant role statement> ::= "GRANT" <role granted> [ { "," <role granted> }... ] "TO" <grantee> [ { "," <grantee> }... ] [ "WITH" "ADMIN" "OPTION" ] [ "GRANTED" "BY" <grantor> ]

<role granted> ::= <identifier>

<drop role statement> ::= "DROP" "ROLE" <identifier>

<revoke statement> ::= <revoke privilege statement> | <revoke role statement>

<revoke privilege statement> ::= "REVOKE" [ <revoke option extension> ] <privileges> "FROM" <grantee> [ { "," <grantee> }... ] [ "GRANTED" "BY" <grantor> ] <drop behavior>

<revoke option extension> ::= "GRANT" "OPTION" "FOR" | "HIERARCHY" "OPTION" "FOR" 
<revoke role statement> ::= "REVOKE" [ "ADMIN" "OPTION" "FOR" ] <role revoked> [ { "," <role revoked> }... ] "FROM" <grantee> [ { "," <grantee> }... ] [ "GRANTED" "BY" <grantor> ] <drop behavior>

<role revoked> ::= <identifier>

<SQL-client module definition> ::= <module name clause> <language clause> <module authorization clause> [ <module path specification> ] [ <module transform group specification> ] [ <module collation> ] [ <temporary table declaration>... ] <module contents>...

<module authorization clause> ::= "SCHEMA" <schema name> | "AUTHORIZATION" <module authorization identifier> [ "FOR" "STATIC" { "ONLY" | "AND" "DYNAMIC" } ] | "SCHEMA" <schema name> "AUTHORIZATION" <module authorization identifier> [ "FOR" "STATIC" { "ONLY" | "AND" "DYNAMIC" } ]

<module authorization identifier> ::= <authorization identifier>

<module path specification> ::= <path specification>

<module transform group specification> ::= <transform group specification>

<module collations> ::= <module collation specification>...

<module collation specification> ::= "COLLATION" <collation name> [ "FOR" <character set specification list> ]

<character set specification list> ::= <character set specification> [ { "," <character set specification> }... ]

<module contents> ::= <declare cursor> | <dynamic declare cursor> | <externally-invoked procedure>

<module name clause> ::= "MODULE" [ <identifier> ] [ <module character set specification> ]

<module character set specification> ::= "NAMES" "ARE" <character set specification>

<externally-invoked procedure> ::= "PROCEDURE" <identifier> <host parameter declaration list> ";" <SQL procedure statement> ";"

<host parameter declaration list> ::= "(" <host parameter declaration> [ { "," <host parameter declaration> }... ] ")"

<host parameter declaration> ::= (":" <identifier>) <host parameter data type> | <status parameter>

<host parameter data type> ::= <data type> [ <locator indication> ]

<status parameter> ::= "SQLSTATE" 
<SQL procedure statement> ::= <SQL executable statement>

<SQL executable statement> ::= <SQL schema statement> | <SQL data statement> | <SQL control statement> | <SQL transaction statement> | <SQL connection statement> | <SQL session statement> | <SQL diagnostics statement> | <SQL dynamic statement>

<SQL schema statement> ::= <SQL schema definition statement> | <SQL schema manipulation statement>

<SQL schema definition statement> ::= <schema definition> | <table definition> | <view definition> | <SQL-invoked routine> | <grant statement> | <role definition> | <domain definition> | <character set definition> | <collation definition> | <transliteration definition> | <assertion definition> | <trigger definition> | <user-defined type definition> | <user-defined cast definition> | <user-defined ordering definition> | <transform definition> | <sequence generator definition>

<SQL schema manipulation statement> ::= <drop schema statement> | <alter table statement> | <drop table statement> | <drop view statement> | <alter routine statement> | <drop routine statement> | <drop user-defined cast statement> | <revoke statement> | <drop role statement> | <alter domain statement> | <drop domain statement> | <drop character set statement> | <drop collation statement> | <drop transliteration statement> | <drop assertion statement> | <drop trigger statement> | <alter type statement> | <drop data type statement> | <drop user-defined ordering statement> | <alter transform statement> | <drop transform statement> | <alter sequence generator statement> | <drop sequence generator statement>

<SQL data statement> ::= <open statement> | <fetch statement> | <close statement> | <select statement: single row> | <free locator statement> | <hold locator statement> | <SQL data change statement>

<SQL data change statement> ::= <delete statement: positioned> | <delete statement: searched> | <insert statement> | <update statement: positioned> | <update statement: searched> | <merge statement>

<SQL control statement> ::= <call statement> | <return statement>

<SQL transaction statement> ::= <start transaction statement> | <set transaction statement> | <set constraints mode statement> | <savepoint statement> | <release savepoint statement> | <commit statement> | <rollback statement>

<SQL connection statement> ::= <connect statement> | <set connection statement> | <disconnect statement>

<SQL session statement> ::= <set session user identifier statement> | <set role statement> | <set local time zone statement> | <set session characteristics statement> | <set catalog statement> | <set schema statement> | <set names statement> | <set path statement> | <set transform group statement> | <set session collation statement>

<SQL diagnostics statement> ::= <get diagnostics statement>

<SQL dynamic statement> ::= <system descriptor statement> | <prepare statement> | <deallocate prepared statement> | <describe statement> | <execute statement> | <execute immediate statement> | <SQL dynamic data statement>

<SQL dynamic data statement> ::= <allocate cursor statement> | <dynamic open statement> | <dynamic fetch statement> | <dynamic close statement> | <dynamic delete statement: positioned> | <dynamic update statement: positioned>

<system descriptor statement> ::= <allocate descriptor statement> | <deallocate descriptor statement> | <set descriptor statement> | <get descriptor statement>

<declare cursor> ::= "DECLARE" <cursor name> [ <cursor sensitivity> ] [ <cursor scrollability> ] "CURSOR" [ <cursor holdability> ] [ <cursor returnability> ] "FOR" <cursor specification>

<cursor sensitivity> ::= "SENSITIVE" | "INSENSITIVE" | "ASENSITIVE" 
<cursor scrollability> ::= "SCROLL" | "NO" "SCROLL" 
<cursor holdability> ::= "WITH" "HOLD" | "WITHOUT" "HOLD" 
<cursor returnability> ::= "WITH" "RETURN" | "WITHOUT" "RETURN" 
<cursor specification> ::= <query expression> [ <order by clause> ] [ <updatability clause> ] 

<updatability clause> ::= "FOR" { "READ" "ONLY" | "UPDATE" [ "OF" <column name list> ] }

<order by clause> ::= "ORDER" "BY" <sort specification list>

<open statement> ::= "OPEN" <cursor name>

<fetch statement> ::= "FETCH" [ [ <fetch orientation> ] "FROM" ] <cursor name> "INTO" <fetch target list>

<fetch orientation> ::= "NEXT" | "PRIOR" | "FIRST" | "LAST" | { "ABSOLUTE" | "RELATIVE" } <simple value specification>

<fetch target list> ::= <target specification> [ { "," <target specification> }... ]

<close statement> ::= "CLOSE" <cursor name>

<select statement: single row> ::= "SELECT" [ <set quantifier> ] <select list> "INTO" <select target list> <table expression>

<select target list> ::= <target specification> [ { "," <target specification> }... ]

<delete statement: positioned> ::= "DELETE" "FROM" <target table> "WHERE" "CURRENT" "OF" <cursor name>

<target table> ::= <table name> | "ONLY" "(" <table name> ")"

<delete statement: searched> ::= "DELETE" "FROM" <target table> [ "WHERE" <search condition> ]

<insert statement> ::= "INSERT" "INTO" <insertion target> <insert columns and source>

<insertion target> ::= <table name>

<insert columns and source> ::= <from subquery> | <from constructor> | <from default>

<from subquery> ::= [ "(" <insert column list> ")" ] [ <override clause> ] <query expression>

<from constructor> ::= [ "(" <insert column list> ")" ] [ <override clause> ] <contextually typed table value constructor>

<override clause> ::= "OVERRIDING" "USER" "VALUE" | "OVERRIDING" "SYSTEM" "VALUE" 
<from default> ::= "DEFAULT" "VALUES" 
<insert column list> ::= <column name list>

<merge statement> ::= "MERGE" "INTO" <target table> [ [ "AS" ] <merge correlation name> ] "USING" <table reference> "ON" <search condition> <merge operation specification>

<merge correlation name> ::= <identifier>

<merge operation specification> ::= <merge when clause>...

<merge when clause> ::= <merge when matched clause> | <merge when not matched clause>

<merge when matched clause> ::= "WHEN" "MATCHED" "THEN" <merge update specification>

<merge when not matched clause> ::= "WHEN" "NOT" "MATCHED" "THEN" <merge insert specification>

<merge update specification> ::= "UPDATE" "SET" <set clause list>

<merge insert specification> ::= "INSERT" [ "(" <insert column list> ")" ] [ <override clause> ] "VALUES" <merge insert value list>

<merge insert value list> ::= "(" <merge insert value element> [ { "," <merge insert value element> }... ] ")"

<merge insert value element> ::= <value expression> | <contextually typed value specification>

<update statement: positioned> ::= "UPDATE" <target table> "SET" <set clause list> "WHERE" "CURRENT" "OF" <cursor name>

<update statement: searched> ::= "UPDATE" <target table> "SET" <set clause list> [ "WHERE" <search condition> ]

<set clause list> ::= <set clause> [ { "," <set clause> }... ]

<set clause> ::= <multiple column assignment> | <set target> "=" <update source>

<set target> ::= <update target> | <mutated set clause>

<multiple column assignment> ::= <set target list> "=" <assigned row>

<set target list> ::= "(" <set target> [ { "," <set target> }... ] ")"

<assigned row> ::= <contextually typed row value expression>

<update target> ::= <object column> | <object column> ("[" | "??(") <simple value specification> ("]" | "??)")

<object column> ::= <identifier>

<mutated set clause> ::= <mutated target> "." <identifier>

<mutated target> ::= <object column> | <mutated set clause>

<update source> ::= <value expression> | <contextually typed value specification>

<temporary table declaration> ::= "DECLARE" "LOCAL" "TEMPORARY" "TABLE" <table name> <table element list> [ "ON" "COMMIT" <table commit action> "ROWS" ]

<free locator statement> ::= "FREE" "LOCATOR" <locator reference> [ { "," <locator reference> }... ]

<locator reference> ::= (":" <identifier>) | <embedded variable name>

<hold locator statement> ::= "HOLD" "LOCATOR" <locator reference> [ { "," <locator reference> }... ]

<call statement> ::= "CALL" <routine invocation>

<return statement> ::= "RETURN" <return value>

<return value> ::= <value expression> | "NULL" 
<start transaction statement> ::= "START" "TRANSACTION" [ <transaction mode> [ { "," <transaction mode> }...] ]

<transaction mode> ::= <isolation level> | <transaction access mode> | <diagnostics size>

<transaction access mode> ::= "READ" "ONLY" | "READ" "WRITE" 
<isolation level> ::= "ISOLATION" "LEVEL" <level of isolation>

<level of isolation> ::= "READ" "UNCOMMITTED" | "READ" "COMMITTED" | "REPEATABLE" "READ" | "SERIALIZABLE" 
<diagnostics size> ::= "DIAGNOSTICS" "SIZE" <number of conditions>

<number of conditions> ::= <simple value specification>

<set transaction statement> ::= "SET" [ "LOCAL" ] <transaction characteristics>

<transaction characteristics> ::= "TRANSACTION" <transaction mode> [ { "," <transaction mode> }... ]

<set constraints mode statement> ::= "SET" "CONSTRAINTS" <constraint name list> { "DEFERRED" | "IMMEDIATE" }

<constraint name list> ::= "ALL" | <constraint name> [ { "," <constraint name> }... ]

<savepoint statement> ::= "SAVEPOINT" <savepoint specifier>

<savepoint specifier> ::= <identifier>

<release savepoint statement> ::= "RELEASE" "SAVEPOINT" <savepoint specifier>

<commit statement> ::= "COMMIT" [ "WORK" ] [ "AND" [ "NO" ] "CHAIN" ]

<rollback statement> ::= "ROLLBACK" [ "WORK" ] [ "AND" [ "NO" ] "CHAIN" ] [ <savepoint clause> ]

<savepoint clause> ::= "TO" "SAVEPOINT" <savepoint specifier>

<connect statement> ::= "CONNECT" "TO" <connection target>

<connection target> ::= <SQL-server name> [ "AS" <connection name> ] [ "USER" <connection user name> ] | "DEFAULT" 
<set connection statement> ::= "SET" "CONNECTION" <connection object>

<connection object> ::= "DEFAULT" | <connection name> 

<disconnect statement> ::= "DISCONNECT" <disconnect object>

<disconnect object> ::= <connection object> | "ALL" | "CURRENT" 
<set session characteristics statement> ::= "SET" "SESSION" "CHARACTERISTICS" "AS" <session characteristic list>

<session characteristic list> ::= <session characteristic> [ { "," <session characteristic> }... ]

<session characteristic> ::= <transaction characteristics>

<set session user identifier statement> ::= "SET" "SESSION" "AUTHORIZATION" <value specification>

<set role statement> ::= "SET" "ROLE" <role specification>

<role specification> ::= <value specification> | "NONE" 
<set local time zone statement> ::= "SET" "TIME" "ZONE" <set time zone value>

<set time zone value> ::= <interval value expression> | "LOCAL" 
<schema name>s in <preparable statement>s that

<execute immediate statement> or a <prepare

<direct "SQL" statement>s that are invoked directly.

<set catalog statement> ::= "SET" <catalog name characteristic>

<catalog name characteristic> ::= "CATALOG" <value specification>

<set schema statement> ::= "SET" <schema name characteristic>

<schema name characteristic> ::= "SCHEMA" <value specification>

<set names statement> ::= "SET" <character set name characteristic>

<character set name characteristic> ::= "NAMES" <value specification>

<set path statement> ::= "SET" <SQL-path characteristic>

<SQL-path characteristic> ::= "PATH" <value specification>

<set transform group statement> ::= "SET" <transform group characteristic>

<transform group characteristic> ::= "DEFAULT" "TRANSFORM" "GROUP" <value specification> | "TRANSFORM" "GROUP" "FOR" "TYPE" <path-resolved user-defined type name> <value specification>

<set session collation statement> ::= "SET" "COLLATION" <collation specification> [ "FOR" <character set specification list> ] | "SET" "NO" "COLLATION" [ "FOR" <character set specification list> ]

<character set specification list> ::= <character set specification> [ , <character set specification>... ]

<collation specification> ::= <value specification>

<allocate descriptor statement> ::= "ALLOCATE" [ "SQL" ] "DESCRIPTOR" <descriptor name> [ "WITH" "MAX" <occurrences> ]

<occurrences> ::= <simple value specification>

<deallocate descriptor statement> ::= "DEALLOCATE" [ "SQL" ] "DESCRIPTOR" <descriptor name>

<get descriptor statement> ::= "GET" [ "SQL" ] "DESCRIPTOR" <descriptor name> <get descriptor information>

<get descriptor information> ::= <get header information> [ { "," <get header information> }... ] | "VALUE" <item number> <get item information> [ { "," <get item information> }... ]

<get header information> ::= <simple target specification 1> "=" <header item name>

<header item name> ::= "COUNT" | "KEY_TYPE" | "DYNAMIC_FUNCTION" | "DYNAMIC_FUNCTION_CODE" | "TOP_LEVEL_COUNT" 
<get item information> ::= <simple target specification 2> "=" <descriptor item name>

<item number> ::= <simple value specification>

<simple target specification 1> ::= <simple target specification>

<simple target specification 2> ::= <simple target specification>

<descriptor item name> ::= "CARDINALITY" | "CHARACTER_SET_CATALOG" | "CHARACTER_SET_NAME" | "CHARACTER_SET_SCHEMA" | "COLLATION_CATALOG" | "COLLATION_NAME" | "COLLATION_SCHEMA" | "DATA" | "DATETIME_INTERVAL_CODE" | "DATETIME_INTERVAL_PRECISION" | "DEGREE" | "INDICATOR" | "KEY_MEMBER" | "LENGTH" | "LEVEL" | "NAME" | "NULLABLE" | "OCTET_LENGTH" | "PARAMETER_MODE" | "PARAMETER_ORDINAL_POSITION" | "PARAMETER_SPECIFIC_CATALOG" | "PARAMETER_SPECIFIC_NAME" | "PARAMETER_SPECIFIC_SCHEMA" | "PRECISION" | "RETURNED_CARDINALITY" | "RETURNED_LENGTH" | "RETURNED_OCTET_LENGTH" | "SCALE" | "SCOPE_CATALOG" | "SCOPE_NAME" | "SCOPE_SCHEMA" | "TYPE" | "UNNAMED" | "USER_DEFINED_TYPE_CATALOG" | "USER_DEFINED_TYPE_NAME" | "USER_DEFINED_TYPE_SCHEMA" | "USER_DEFINED_TYPE_CODE" 
<set descriptor statement> ::= "SET" [ "SQL" ] "DESCRIPTOR" <descriptor name> <set descriptor information>

<set descriptor information> ::= <set header information> [ { "," <set header information> }... ] | "VALUE" <item number> <set item information> [ { "," <set item information> }... ]

<set header information> ::= <header item name> "=" <simple value specification 1>

<set item information> ::= <descriptor item name> "=" <simple value specification 2>

<simple value specification 1> ::= <simple value specification>

<simple value specification 2> ::= <simple value specification>

<item number> ::= <simple value specification>

<prepare statement> ::= "PREPARE" <SQL statement name> [ <attributes specification> ] "FROM" <SQL statement variable>

<attributes specification> ::= "ATTRIBUTES" <attributes variable>

<attributes variable> ::= <simple value specification>

<SQL statement variable> ::= <simple value specification>

<preparable statement> ::= <preparable "SQL" data statement> | <preparable "SQL" schema statement> | <preparable "SQL" transaction statement> | <preparable "SQL" control statement> | <preparable "SQL" session statement> | <preparable implementation-defined statement>

<preparable "SQL" data statement> ::= <delete statement: searched> | <dynamic single row select statement> | <insert statement> | <dynamic select statement> | <update statement: searched> | <merge statement> | <preparable dynamic delete statement: positioned> | <preparable dynamic update statement: positioned>

<preparable "SQL" schema statement> ::= <SQL schema statement>

<preparable "SQL" transaction statement> ::= <SQL transaction statement>

<preparable "SQL" control statement> ::= <SQL control statement>

<preparable "SQL" session statement> ::= <SQL session statement>

<dynamic select statement> ::= <cursor specification>

<cursor attributes> ::= <cursor attribute>...

<cursor attribute> ::= <cursor sensitivity> | <cursor scrollability> | <cursor holdability> | <cursor returnability>

<deallocate prepared statement> ::= "DEALLOCATE" "PREPARE" <SQL statement name>

<describe statement> ::= <describe input statement> | <describe output statement>

<describe input statement> ::= "DESCRIBE" "INPUT" <SQL statement name> <using descriptor> [ <nesting option> ]

<describe output statement> ::= "DESCRIBE" [ "OUTPUT" ] <described object> <using descriptor> [ <nesting option> ]

<nesting option> ::= "WITH" "NESTING" | "WITHOUT" "NESTING" 

<using descriptor> ::= "USING" [ "SQL" ] "DESCRIPTOR" <descriptor name>

<described object> ::= <SQL statement name> | "CURSOR" <extended cursor name> "STRUCTURE" 

<input using clause> ::= <using arguments> | <using input descriptor>

<using arguments> ::= "USING" <using argument> [ { "," <using argument> }... ]

<using argument> ::= <general value specification>

<using input descriptor> ::= <using descriptor>

<SQL dynamic statement>.

<output using clause> ::= <into arguments> | <into descriptor>

<into arguments> ::= "INTO" <into argument> [ { "," <into argument> }... ]

<into argument> ::= <target specification>

<into descriptor> ::= "INTO" [ "SQL" ] "DESCRIPTOR" <descriptor name>

<execute statement> ::= "EXECUTE" <SQL statement name> [ <result using clause> ] [ <parameter using clause> ]

<result using clause> ::= <output using clause>

<parameter using clause> ::= <input using clause>

<execute immediate statement> ::= "EXECUTE" "IMMEDIATE" <SQL statement variable>

<statement name>, which may in turn be associated with a

<cursor specification>.

<dynamic declare cursor> ::= "DECLARE" <cursor name> [ <cursor sensitivity> ] [ <cursor scrollability> ] "CURSOR" [ <cursor holdability> ] [ <cursor returnability> ] "FOR" <statement name>

<allocate cursor statement> ::= "ALLOCATE" <extended cursor name> <cursor intent>

<cursor intent> ::= <statement cursor> | <result set cursor>

<statement cursor> ::= [ <cursor sensitivity> ] [ <cursor scrollability> ] "CURSOR" [ <cursor holdability> ] [ <cursor returnability> ] "FOR" <extended statement name>

<result set cursor> ::= "FOR" "PROCEDURE" <specific routine designator>

<dynamic open statement> ::= "OPEN" <dynamic cursor name> [ <input using clause> ]

<dynamic fetch statement> ::= "FETCH" [ [ <fetch orientation> ] "FROM" ] <dynamic cursor name> <output using clause>

<dynamic single row select statement> ::= <query specification>

<dynamic close statement> ::= "CLOSE" <dynamic cursor name>

<dynamic delete statement: positioned> ::= "DELETE" "FROM" <target table> "WHERE" "CURRENT" "OF" <dynamic cursor name>

<dynamic update statement: positioned> ::= "UPDATE" <target table> "SET" <set clause list> "WHERE" "CURRENT" "OF" <dynamic cursor name>

<preparable dynamic delete statement: positioned> ::= "DELETE" [ "FROM" <target table> ] "WHERE" "CURRENT" "OF" [ <scope option> ] <cursor name>

<preparable dynamic update statement: positioned> ::= "UPDATE" [ <target table> ] "SET" <set clause list> "WHERE" "CURRENT" "OF" [ <scope option> ] <cursor name>

<embedded "SQL" host program>.

<embedded "SQL" host program> ::= <embedded "SQL" Ada program> | <embedded "SQL" "C" program> | <embedded "SQL" "COBOL" program> | <embedded "SQL" Fortran program> | <embedded "SQL" "MUMPS" program> | <embedded "SQL" Pascal program> | <embedded "SQL" PL/I program>

<embedded "SQL" statement> ::= <SQL prefix> <statement or declaration> [ <SQL terminator> ]

<statement or declaration> ::= <declare cursor> | <dynamic declare cursor> | <temporary table declaration> | <embedded authorization declaration> | <embedded path specification> | <embedded transform group specification> | <embedded collation specification> | <embedded exception declaration> | <handler declaration> | <SQL procedure statement>

<SQL prefix> ::= "EXEC" "SQL" | "&" "SQL" "("

<SQL terminator> ::= END-EXEC | ";" | ")"

<embedded authorization declaration> ::= "DECLARE" <embedded authorization clause>

<embedded authorization clause> ::= "SCHEMA" <schema name> | "AUTHORIZATION" <embedded authorization identifier> [ "FOR" "STATIC" { "ONLY" | "AND" "DYNAMIC" } ] | "SCHEMA" <schema name> "AUTHORIZATION" <embedded authorization identifier> [ "FOR" "STATIC" { "ONLY" | "AND" "DYNAMIC" } ]

<embedded authorization identifier> ::= <module authorization identifier>

<embedded path specification> ::= <path specification>

<embedded transform group specification> ::= <transform group specification>

<embedded collation specification> ::= <module collations>

<embedded "SQL" declare section> ::= <embedded "SQL" begin declare> [ <embedded character set declaration> ] [ <host variable definition>... ] <embedded "SQL" end declare> | <embedded "SQL" "MUMPS" declare>

<embedded character set declaration> ::= "SQL" "NAMES" "ARE" <character set specification>

<embedded "SQL" begin declare> ::= <SQL prefix> "BEGIN" "DECLARE" "SECTION" [ <SQL terminator> ]

<embedded "SQL" end declare> ::= <SQL prefix> "END" "DECLARE" "SECTION" [ <SQL terminator> ]

<embedded "SQL" "MUMPS" declare> ::= <SQL prefix> "BEGIN" "DECLARE" "SECTION" [ <embedded character set declaration> ] [ <host variable definition>... ] "END" "DECLARE" "SECTION" <SQL terminator>

<host variable definition> ::= <Ada variable definition> | <C variable definition> | <COBOL variable definition> | <Fortran variable definition> | <MUMPS variable definition> | <Pascal variable definition> | <PL/I variable definition>

<embedded variable name> ::= ":" <host identifier>

<host identifier> ::= <Ada host identifier> | <C host identifier> | <COBOL host identifier> | <Fortran host identifier> | <MUMPS host identifier> | <Pascal host identifier> | <PL/I host identifier>

<embedded exception declaration> ::= "WHENEVER" <condition> <condition action>

<condition> ::= <major category> | "SQLSTATE" ( <SQLSTATE class value> [ , <SQLSTATE subclass value> ] ) | "CONSTRAINT" <constraint name>

<major category> ::= "SQLEXCEPTION" | "SQLWARNING" | "NOT" "FOUND" 
<SQLSTATE class value> ::= <SQLSTATE char><SQLSTATE char> !! See the Syntax Rules.

<SQLSTATE subclass value> ::= <SQLSTATE char><SQLSTATE char><SQLSTATE char> !! See the Syntax Rules.

<SQLSTATE char> ::= ("A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z" | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9")

<condition action> ::= "CONTINUE" | ({ "GOTO" | "GO" "TO" } (<host label identifier> | <unsigned integer> | <host PL/I label variable>))

<direct "SQL" statement> ::= <directly executable statement> ";"

<directly executable statement> ::= <direct "SQL" data statement> | <SQL schema statement> | <SQL transaction statement> | <SQL connection statement> | <SQL session statement> | <direct implementation-defined statement>

<direct "SQL" data statement> ::= <delete statement: searched> | <direct select statement: multiple rows> | <insert statement> | <update statement: searched> | <merge statement> | <temporary table declaration>

<direct select statement: multiple rows> ::= <cursor specification>

<get diagnostics statement> ::= "GET" "DIAGNOSTICS" <SQL diagnostics information>

<SQL diagnostics information> ::= <statement information> | <condition information>

<statement information> ::= <statement information item> [ { "," <statement information item> }... ]

<statement information item> ::= <simple target specification> "=" <statement information item name>

<statement information item name> ::= "NUMBER" | "MORE" | "COMMAND_FUNCTION" | "COMMAND_FUNCTION_CODE" | "DYNAMIC_FUNCTION" | "DYNAMIC_FUNCTION_CODE" | "ROW_COUNT" | "TRANSACTIONS_COMMITTED" | "TRANSACTIONS_ROLLED_BACK" | "TRANSACTION_ACTIVE" 
<condition information> ::= { "EXCEPTION" | "CONDITION" } <condition number> <condition information item> [ { "," <condition information item> }... ]

<condition information item> ::= <simple target specification> "=" <condition information item name>

<condition information item name> ::= "CATALOG_NAME" | "CLASS_ORIGIN" | "COLUMN_NAME" | "CONDITION_NUMBER" | "CONNECTION_NAME" | "CONSTRAINT_CATALOG" | "CONSTRAINT_NAME" | "CONSTRAINT_SCHEMA" | "CURSOR_NAME" | "MESSAGE_LENGTH" | "MESSAGE_OCTET_LENGTH" | "MESSAGE_TEXT" | "PARAMETER_MODE" | "PARAMETER_NAME" | "PARAMETER_ORDINAL_POSITION" | "RETURNED_SQLSTATE" | "ROUTINE_CATALOG" | "ROUTINE_NAME" | "ROUTINE_SCHEMA" | "SCHEMA_NAME" | "SERVER_NAME" | "SPECIFIC_NAME" | "SUBCLASS_ORIGIN" | "TABLE_NAME" | "TRIGGER_CATALOG" | "TRIGGER_NAME" | "TRIGGER_SCHEMA" 
<condition number> ::= <simple value specification>
```