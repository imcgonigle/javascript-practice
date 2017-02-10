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

A '\' means that the next character is not to be interpreted literally. So if you have a 'w' all by itself it will match a 'w', but if you have a '\w' it will match any alphanumeric character.
