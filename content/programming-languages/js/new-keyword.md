### use of new keyword
- When using new, `this` refers to the new empty object we create. However, if you don't add `new`, this refers to the **global** object!
```js
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
const sarah = Person('Sarah', 'Smith');
console.log(sarah); // undefined, since Person didn't return anything
console.log(this.firstName); //'Sarah', sicne firstName is now defined on global/window object
```