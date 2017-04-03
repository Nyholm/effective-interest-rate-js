'use strict';

/**
 * Newton-Raphsons method to do a numerical analysis to find the effective interest.
 *
 * {@link https://en.wikipedia.org/wiki/Newton%27s_method}
 *
 * @author Tobias Nyholm <tobias.nyholm@gmail.com>
 */
class NewtonRaphson {
  precision = 7;

  static run(fx, fdx, guess) {
    let errorLimit = Math.pow(10, -1 * this.precision);

    let previousValue = 0;

    do {
      previousValue = guess;
      guess = previousValue - (fx(guess) / fdx(guess));
    } while (Math.abs(guess - previousValue) > errorLimit);

    return guess;
  }
}

module.exports = NewtonRaphson;
