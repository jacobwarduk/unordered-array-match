'use strict';

var unorderedArrayMatch = require('../index');

describe('unorderedArrayMatch', function() {
  it('should return true when both arrays contain the same items in any order', function() {
    expect(unorderedArrayMatch(['a', 23, 'pineapple'], ['pineapple', 'a', 23])).toBe(true);
    expect(unorderedArrayMatch(['a', 'b', 'c', 1, 2, 3], [3, 'c', 2, 'b', 1, 'a'])).toBe(true);
  });

  it('should return false when arrays do not contain the same items', function() {
    expect(unorderedArrayMatch(['a', 23], [23, 'coconut'])).toBe(false);
  });

  it('should return false when arrays are of different lengths', function() {
    expect(unorderedArrayMatch(['a', 23], [42])).toBe(false);
  });

  it('should return false when only one array is provided as an argument', function() {
    expect(unorderedArrayMatch(['a', 23])).toBe(false);
  });

  it('should return false when no arguments are provided', function() {
    expect(unorderedArrayMatch()).toBe(false);
  });

  it('should return false when provided arguments are not an array', function() {
    expect(unorderedArrayMatch(['a', 23], {})).toBe(false);
    expect(unorderedArrayMatch(['a', 23], function() {})).toBe(false);
    expect(unorderedArrayMatch(['a', 23], null)).toBe(false);
    expect(unorderedArrayMatch('a string', ['a', 23])).toBe(false);
    expect(unorderedArrayMatch(23, ['a', 23])).toBe(false);
    expect(unorderedArrayMatch(null, null)).toBe(false);
  })
});
