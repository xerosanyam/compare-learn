### Spread Syntax

- Allows spreading array, string

```js
let a = [1, 2, 3]
console.log(a) //[1,2,3]
console.log(...a) //1 2 3
let b = 'sanyam'
console.log(b) //sanyam
console.log(...b) //s a n y a m
let c = { name: 'sanyam' }
let d = { age: 20 }
console.log({ ...c, ...d }) //{'name':'sanyam':'age':20}
console.log(...c) // Error: non-callable iterator
```

- better than Function.prototype.apply(context, array)

  - used to mainly call function with array as arugment

    ```js
    function sum(x, y, z) {
      return x + y + z
    }

    const numbers = [1, 2, 3]

    console.log(sum(...numbers))
    // expected output: 6

    console.log(sum.apply(null, numbers))
    // expected output: 6
    ```

[MDN on Spread_Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)