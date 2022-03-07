
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

* `eqArrays`: if arra1 === arr2, return true else false
* `middle`: return items in middle position
* `assertArraysEqual`: if arra1 === arr2, return msg for passed else msg for failed
* `assertEqual`: if item1 === item2, return true else false
* `assertObjectsEqual`: if obj1 === obj2, return msg for passed else msg for failed
* `countLetters`: return the occurrence of each letter in a string
* `countOnly`: return the occurrence of required letters in a string
* `eqObjects`: if obj1 === obj2, return true else false
* `findKey`: if key is defined within obj, return true else false
* `findKeybyValue`: return key by value
* `flatten`: flatten one layer deeper within array
* `letterPositions`: return the positions of each letter in a sentence
* `map`: similar to arr.map function
* `takeUntil`: loop until callback is true
* `without`: filter out wot from arr