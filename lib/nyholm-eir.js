(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("EffectiveInterestCalculator", [], factory);
	else if(typeof exports === 'object')
		exports["EffectiveInterestCalculator"] = factory();
	else
		root["EffectiveInterestCalculator"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EffectiveInterestCalculator = function () {
	  function EffectiveInterestCalculator() {
	    _classCallCheck(this, EffectiveInterestCalculator);
	  }
	
	  _createClass(EffectiveInterestCalculator, null, [{
	    key: 'withSpecifiedPayments',
	
	
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
	    value: function withSpecifiedPayments(principal, startDate, payments, guess) {
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
	
	  }, {
	    key: 'withEqualPayments',
	    value: function withEqualPayments(principal, payment, numberOfMonths, guess) {
	      return 0.045;
	    }
	  }]);
	
	  return EffectiveInterestCalculator;
	}();
	
	module.exports = EffectiveInterestCalculator;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=nyholm-eir.js.map