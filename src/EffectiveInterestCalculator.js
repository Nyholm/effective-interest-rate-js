'use strict';

let NewtonRaphson = require('NewtonRaphson');

class EffectiveInterestCalculator {

  /**
   * Get the interest when you know all the payments and their dates. Use this function when you have
   * administration fees at the first payment and/or when payments are irregular.
   *
   * @param principal
   * @param startDateString in format 'YYYY-mm-dd'
   * @param payments        array with payment dates and values ['YYYY-mm-dd'=>int]
   * @param guess           A guess what the interest may be. Between zero and one. Example 0.045
   *
   * @return float
   */
  static withSpecifiedPayments(principal, startDateString, payments, guess) {
    let values = [-1 * principal];
    let days = [1];
    let startDate = new Date(startDateString);

    Object.keys(payments).forEach(function (date) {
      values.push(payments[date]);
      days.push(1 + Math.ceil(Math.abs((new Date(date)).getTime() - startDate.getTime()) / (1000 * 3600 * 24)));
    });

    let fx = function (x) {
      let sum = 0;

      days.forEach(function (day, idx) {
        sum += values[idx] * Math.pow(1 + x, (days[0] - day) / 365);
      });

      return sum;
    };

    let fdx = function (x) {
      let sum = 0;

      days.forEach(function (day, idx) {
        sum += (1 / 365) * (days[0] - day) * values[idx] * Math.pow(1 + x, ((days[0] - day) / 365) - 1);
      });

      return sum;
    };

    return NewtonRaphson.run(fx, fdx, guess);
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
