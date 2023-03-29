# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @warda_/lotide`

**Require it:**

`const _ = require('@warda_/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

`assertArraysEqual`: function that asserts if two arrays are equals. [click here for example](assertArraysEqual.js)

`assertEqual`: function that asserts if two values are equals. [click here for example](assertEqual.js)

`assertObjectsEqual`: function that asserts if two objects are equals. [click here for example](assertObjectsEqual.js)

`countLetters`: function that returns counts of each letter of a string. [click here for example](countLetters.js)

`countOnly`: function that takes items and returns counts for a specific subset of those items. [click here for example](countOnly.js)

`eqArrays`: function that compares two arrays. [click here for example](eqArrays.js)

`eqObjects`: function that compares two objects. [click here for example](eqObjects.js)

`findKey`: function that scans the object and return the first key,  which the callback returns a truthy value. [click here for example](findKey.js)

`findKeyByValue`: function that searches for a key on an object where its value matches a given value. [click here for example](findKeyByValue.js)

`flatten`: function that flattens an array of arrays into a single-level array. [click here for example](flatten.js)

`head`: function that retrieves the first element from the array. [click here for example](head.js)

`index`: list of all the functions in an object. [click here for example](index.js)

`letterPositions`: function that returns all the indices in the string where each character is found. [click here for example](letterPositions.js)

`map`: function that creates a new array with the results of calling a provided function on every element in the calling array. [click here for example](map.js)

`middle`: function that returns the middle element of an array. [click here for example](middle.js)

`tail`: function that retrieves every element except the head (first element) of the array. [click here for example](tail.js)

`takeUntil`: function that returns a slice of the array with elements taken from the beginning. [click here for example](takeUntil.js)

`without`: function that removes elements from an array. [click here for example](without.js)

  