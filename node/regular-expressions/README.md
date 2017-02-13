# Regular Expressions

## What is a Regular Expression?
A regular expression (or regex) is a string used for mathing a search pattern. They can be used to match all the files of a certain type. They can also be used to find an any email addresses in a string. Their are tons of other things they can be used for too.

## How do You Use a Regular Expression?
To create a regular expression in JavaScript is easy. You can either use a regular expression literal.

```javascript
var regEx = /\w+/; 
```

Or by calling the RegExp constructor.

```javascript
var regEx = new RegExp('\w+');
```

## What Are the Different Options For a Regular Expression?

- '\' - Means that the next character is not to be interpreted literally. So if you have a 'w' all by itself it will match a 'w', but if you have a '\w' it will match any alphanumeric character.
- '^' - Matches the beggining of a string. So if you have '/^D/' it would match 'Don't leave' but it wouldn't match 'I Don't Like You'.
- '$' - Matches the end of a string. If you had '/h$/' it would match 'bath' but not 'hat'.
- '*' - '*' will match the expression before it 0 or more times. Same as {,0} So it will match '/sh*/' to 'shhhhhhhh' and the 's' in 'last'.
- '+' - Matches the previous element 1 or more times. Same as {1,}So it will match '/sh*/' to 'shhhhhhhhhh' but it won't match the 's' in 'last'.
- '?' - Matches the previous expression 1 or 0 times. Same as {0,1}
- '.' Matches any single character except for the newline character.
- '(x)' - Matches x and remebers the match. The parentheses are used for capturing meaning that it will match the expression and save it. To use it just reference each work as $n where n is the number of the word. e.g:: 'google plus'.replace( /(\w+) (\w+)/, '$2 $1') will return 'plus google'.
- '(?:x)' - Matches x but does not remeber it. It is called non capturing parentheses and it allows you to define subexpression for a regular expression. In '/foo{1,2}/ the {1,2} only applies to the 'o' in foo but in '/(?:foo){1,2}/' the {1,2} applies to the whole word 'foo'. 
- 'x(?=y)' -   Matches x only if it's followed by y.
- 'x(?!y)' - Matches x only if it's not followed by y.
