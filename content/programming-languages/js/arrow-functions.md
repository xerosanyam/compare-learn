## Arrow functions
- syntactic sugar. removed need for
  - return keyword
  - function keyword
  - curly brackets

### When not to use arrow function
#### Object Methods
```js
const mario = {
    lives: 3,
    oneUp: () => {
        this.lives++; // this will not update lives
    }
}
```
- Arrow function do not have their own `this`
- this.lives will refer to outer environment
#### Object prototype
#### Dynamic context
- arrow functions bind context statically. ie upon function declaration

[When not to use arrow functions](https://medium.com/better-programming/3-examples-of-when-not-to-use-javascript-arrow-functions-90eebfbf7bb0)
[Question that provoked this thought](https://github.com/lydiahallie/javascript-questions#3-whats-the-output)