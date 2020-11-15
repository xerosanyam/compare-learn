### what is memoization?
- optimizing technique used to speed up program by storing result of expensive function
- return cached result when same input occurs
- built on 2 concepts
  - closure
  - higher order functions
```js
function memorizer(fun){
    let cache = {}
    return function(n){
        if(cache[n]!==undefined){
            return cache[n]
        }
        let result = fun(n)
        cache[n] = result
        return result
    }
}
```
<fibo></fibo>
- first call takes time but for next calls, result comes from cache