### add method to object dynamically

```js
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

const member = new Person('Lydia', 'Hallie')
console.log(member.getFullName()) // will throw error

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}
console.log(member.getFullName()) // will run fine now
```
(from question 11)[https://github.com/lydiahallie/javascript-questions#11-whats-the-output]