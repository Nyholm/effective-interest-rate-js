'use strict';

/**
 * Newton-Raphsons method to do a numerical analysis to find the effective interest.
 *
 * {@link https://en.wikipedia.org/wiki/Newton%27s_method}
 *
 * @author Tobias Nyholm <tobias.nyholm@gmail.com>
 */
class NewtonRaphson {

  static run(fx, fdx, guess) {
    let precision = 4;
    let errorLimit = Math.pow(10, -1 * precision);
    let previousValue = 0;

    do {
      guess = Number(guess);
      previousValue = Number(guess);
      guess = previousValue - (Number(fx(guess)) / Number(fdx(guess)));
    } while (Math.abs(guess - previousValue) > errorLimit);

    return guess;
  }
}

module.exports = NewtonRaphson;
