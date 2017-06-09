/* global describe it expect */
'use strict';

const unorderedArrayMatch = require('../index');

describe('unorderedArrayMatch', () => {
	it('should return true when both arrays contain the same items in any order', () => {
		expect(unorderedArrayMatch(['a', 23, 'pineapple'], ['pineapple', 'a', 23])).toBe(true);
		expect(unorderedArrayMatch(['a', 'b', 'c', 1, 2, 3], [3, 'c', 2, 'b', 1, 'a'])).toBe(true);
	});

	it('should return false when arrays do not contain the same items', () => {
		expect(unorderedArrayMatch(['a', 23], [23, 'coconut'])).toBe(false);
	});

	it('should return false when arrays are of different lengths', () => {
		expect(unorderedArrayMatch(['a', 23], [42])).toBe(false);
	});

	it('should return false when only one array is provided as an argument', () => {
		expect(unorderedArrayMatch(['a', 23])).toBe(false);
	});

	it('should return false when no arguments are provided', () => {
		expect(unorderedArrayMatch()).toBe(false);
	});

	it('should return false when provided arguments are not an array', () => {
		expect(unorderedArrayMatch(['a', 23], {})).toBe(false);
		expect(unorderedArrayMatch(['a', 23], () => {})).toBe(false);
		expect(unorderedArrayMatch(['a', 23], null)).toBe(false);
		expect(unorderedArrayMatch('a string', ['a', 23])).toBe(false);
		expect(unorderedArrayMatch(23, ['a', 23])).toBe(false);
		expect(unorderedArrayMatch(null, null)).toBe(false);
	});
});
