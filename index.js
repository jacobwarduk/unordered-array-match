'use strict';

function unorderedArrayMatch(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every(function(item) {
    return arr2.indexOf(item) !== -1;
  });
}

module.exports = unorderedArrayMatch;
