### Array.prototype.map()
-  creates a new array
-  the function passed to map is run for each element

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2); // [2, 8, 18, 32]
```