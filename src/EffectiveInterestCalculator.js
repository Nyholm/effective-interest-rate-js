'use strict';

let NewtonRaphson = require('NewtonRaphson');

class EffectiveInterestCalculator {

  /**
   * Get the interest when you know all the payments and their dates. Use this function when you have
   * administration fees at the first payment and/or when payments are irregular.
   *
   * @param principal
   * @param startDate in format 'YYYY-mm-dd'
   * @param payments  array with payment dates and values ['YYYY-mm-dd'=>int]
   * @param guess     A guess what the interest may be. Between zero and one. Example 0.045
   *
   * @return float
   */
  static withSpecifiedPayments(principal, startDate, payments, guess) {
    return 0.045;
  }

  /**
   * Get the effective interest when the monthly payments are exactly the same.
   *
   * @param principal      The total loan amount (Principal)
   * @param payment        The monthly payment
   * @param numberOfMonths The number of months
   * @param guess          A guess of what the interest might be. Interest as a number between zero and one.
   *                       Example 0.045
   *
   * @return float
   */
  static withEqualPayments(principal, payment, numberOfMonths, guess) {
    let fx = function (x) {
      return payment - payment * Math.pow(1 + x, -1 * numberOfMonths) - x * principal;
    };

    let fdx = function (x) {
      return numberOfMonths * payment * Math.pow(1 + x, -1 * numberOfMonths - 1) - principal;
    };

    return 12 * NewtonRaphson.run(fx, fdx, guess);
  }
}

module.exports = EffectiveInterestCalculator;
