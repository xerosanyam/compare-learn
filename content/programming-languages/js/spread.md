### Spread Syntax
- Allows spreading array, string
```js
let a= [1,2,3]
console.log(a)      //[1,2,3]
console.log(...a)   //1 2 3
let b= 'sanyam'
console.log(b)      //sanyam
console.log(...b)   //s a n y a m
let c= {'name':'sanyam'}
console.log(c)      //
console.log(...c)   // Error: non-callable iterator
```