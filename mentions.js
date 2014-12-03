/**
 * mentions
 * https://github.com/frozzare/mentions
 *
 * Copyright (c) 2014 Fredrik Forsmo
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Export the module for AMD, Browser and Node.
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.mentions = factory();
  }
}(this, function () {

  /**
   * Set the mention string.
   *
   * @param {string} str
   *
   * @return {object}
   */

  return function (str) {

    return {

      /**
       * Get all mentions from string.
       *
       * @return {array}
       */

      get: function () {
        if (typeof str !== 'string') {
          return str;
        }

        var regex  = /(\@\w+\b(?:\/\w+|))/,
            result = [],
            tmp    = str,
            match;

        while (match = regex.exec(tmp)) {
          if (!match) {
            continue;
          }

          result.push(match[1]);
          tmp = tmp.replace(match[1], '');
        }

        return result;
      },

      /**
       * Replace the mentions with the result of the given function.
       *
       * @param {function} fn
       *
       * @return str
       */

      replace: function (fn) {
        if (typeof str !== 'string' || typeof fn !== 'function') {
          return str;
        }

        return str.replace(/(\@\w+\b(?:\/\w+|))/g, fn);
      }

    }
  };

}));
