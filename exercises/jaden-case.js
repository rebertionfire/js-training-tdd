'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

const jadenCase =(arr) =>{
  arr = arr.split(" ")
  for (let i=0;i<arr.length; i++){
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase()
  }
  return arr.join(' ')
}

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase('hello world'), 'Hello World');
assert.strictEqual(jadenCase('Hello world hello world'), 'Hello World Hello World');

// End of tests */
