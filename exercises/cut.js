'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
const cutFirst = (str) =>{
  return str.slice(2)

}
const cutLast = (str) =>{
  return str.slice(0,-2)

}
const cutFirstLast = (str) =>{
  return str.slice(1,-1)
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(typeof cutFirstLast, 'function');

assert.strictEqual(cutFirst('Hello'), 'llo');
assert.strictEqual(cutLast('Hello'), 'Hel');
assert.strictEqual(cutFirstLast('Hello'), 'ell');
// End of tests */
