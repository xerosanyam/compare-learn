## what is currying?
currying function means, converting N paramter function to N functions with 1 parameter
- very interesting! very clean with arrow functions

```js
const add = x => y => z => x+y+z
```
### where is it useful?
- when you cannot supply all arguments to function at one time

### cons
- if param is increased, will have to change defination or wrap inside another function 