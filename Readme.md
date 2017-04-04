# Effective interest rate

[![Latest Version](https://img.shields.io/github/release/nyholm/effective-interest-rate-js.svg?style=flat-square)](https://github.com/nyholm/effective-interest-rate-js/releases)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Build Status](https://img.shields.io/travis/Nyholm/effective-interest-rate-js.svg?style=flat-square)](https://travis-ci.org/Nyholm/effective-interest-rate-js)

This is a library that calculates the effective interest rate. The effective interest could also be called XIRR or
effective APR. This is the **JavaScript** library. You will find a PHP version of this library 
[here](https://github.com/Nyholm/effective-interest-rate).

## Examples

### Equal payments

If you are do a car loan of 100 000 Money. The loan is for 48 months and you pay 2 400 Money every month. What is the 
effective interest?

We guess that it is somewhere around 3%. 

```js

let principal = 100000;
let payment = 2400;
let numberOfMonths = 48;
let guess = 0.03;

let interest = EffectiveInterestCalculator.withEqualPayments(principal, payment, numberOfMonths, guess);

console.log(interest); // 0.07115
```

Correct answer is 7.12%

### Specified payments

What if the payments are not equal? The first payment has an administration fee of 400 Money and we like to pay the rest
of the loan after 36 months. So the 36th payment will be 31 200 Money. 

```js
let principal = 100000;
let payment = 2400;
let guess = 0.03;
let startDate = '2017-04-30';

let payments = {
    '2017-04-30': payment + 400,
    '2017-05-31': payment,
    '2017-06-30': payment,
    '2017-07-31': payment,
    // More dates
    '2019-12-31': payment,
    '2020-01-31': payment,
    '2020-02-28': payment,
    '2020-03-31': 31200,
};

let interest = EffectiveInterestCalculator.withSpecifiedPayments(principal, startDate, payments, guess);

console.log(interest);  // 0.084870
```

Correct answer is 8.49%

## The mathematics

We are using the same formula that Excel's XIRR function is using. We are also using NewtonRaphsons method to numerically
find the interest we are looking for. 

![Effective interest formula](https://raw.githubusercontent.com/Nyholm/effective-interest-rate/master/doc/images/xirr_equation.png)

## Build

```cli
# Install depnendencies
npm install

# Build a mnified file
npm run build
```

To run the test
```cli
# Build the project (no minified files)
npm run dev

# Run test once
npm run test

# Start test listener
npm run watch
```