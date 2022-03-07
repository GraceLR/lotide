
# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gracelr/lotide`

**Require it:**

`const _ = require('@gracelr/lotide');`

**Call it:**

`const results = _.middle([1, 2, 3]) // => [2]`

## Documentation

The following functions are currently implemented:

* `head`: Gets the first element of array.
* `tail`: Gets all but the first element of array.
* `eqArrays`: Determines if two arrays are equivalent.
* `middle`: Finds the middle one or two numbers of the array.
* `assertArraysEqual`: Returns a sentence to state if two arrays are equivalent.
* `assertEqual`: Returns a sentence to state if two values are equivalent.
* `assertObjectsEqual`: Returns a sentence to state if two objects are equivalent.
* `countLetters`: Returns the number of occurrence of each element in a string.
* `countOnly`: Returns the number of occurrence of each required element in a string.
* `eqObjects`: Determines if two objects are equivalent.
* `findKey`: Returns the key of the first element the callback returns truthy for.
* `findKeybyValue`: Returns the key provided with the value.
* `flatten`: Returns an array flattened into single-level.
* `letterPositions`: Returns the positions of each element in a sentence.
* `map`: Returns an array containing results of calling the callback on each element.
* `takeUntil`: Returns an array of the elements until the callback returns truthy. 
* `without`: Returns an array excluding all given values.