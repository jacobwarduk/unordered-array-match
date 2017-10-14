# unordered-array-match

[![npm](https://img.shields.io/npm/dt/unordered-array-match.svg)](https://www.npmjs.com/package/unordered-array-match) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)  [![Build Status](https://travis-ci.org/jacobwarduk/unordered-array-match.svg?branch=master)](https://travis-ci.org/jacobwarduk/unordered-array-match) [![codecov](https://codecov.io/gh/jacobwarduk/unordered-array-match/branch/master/graph/badge.svg)](https://codecov.io/gh/jacobwarduk/unordered-array-match)

Shallow check two arrays contain the same items in any order

**Installation**

```
npm install --save unordered-array-match
```


**Usage**

```javascript
const unorderedArrayMatch = require('unordered-array-match');

unorderedArrayMatch(['a', 23, 'pineapple'], ['pineapple', 'a', 23]);  // true
unorderedArrayMatch(['a', 'b', 'c', 1, 2, 3], [3, 'c', 2, 'b', 1, 'a']);  // true
unorderedArrayMatch(['a', 23], [23, 'a', 'coconut']);  // false
unorderedArrayMatch(['a', 23], [42]); // false
```
