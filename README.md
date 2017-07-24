# unordered-array-match

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
