'use strict';

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code:~
const multiply =(a,b) => {


  let sum = 0
  if (a=== 0 || b ===0){
    return 0
  }
  if (b>0){
    for (let i = 0; i<b; i ++){
      sum += a
    }
    return sum
  }if (b<0){
    for (let i = 0; i>b; i --){
      sum += a
    }
    return -sum
  }

}


//* Begin of tests
const assert = require('assert');

/*1*/assert.strictEqual(typeof multiply, 'function');
/*2*/assert.strictEqual(multiply.length, 2);
/*3*/assert.strictEqual(multiply.toString().includes('Math.imul'), false);
/*4*/assert.strictEqual(multiply.toString().includes('*'), false);
/*5*/assert.strictEqual(multiply.toString().includes('/'), false);
/*6*/assert.strictEqual(multiply(34, 78), 2652);
/*7*/assert.strictEqual(multiply(123, 0), 0);
/*8*/assert.strictEqual(multiply(0, -230), 0);
/*9*/assert.strictEqual(multiply(0, 0), 0);
/*10*/assert.strictEqual(multiply(123, -22), -2706);
/*11*/assert.strictEqual(multiply(-22, 123), -2706);
/*12*/assert.strictEqual(multiply(-22, -123), 2706);
// End of tests */
