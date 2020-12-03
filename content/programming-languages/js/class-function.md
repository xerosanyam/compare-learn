#### class vs function

```js
// Class syntax
class Person {
  constructor(first, last) {
    this.first = first
    this.last = last
    // we can put getFullName here
    // but then it'll be present on all object, wasting space
    // this.getFullName = function() {
    //     return `${this.first} ${this.last}`
    // }
  }
  getFullName() {
    return `${this.first} ${this.last}`
  }
}

//Equivalent function syntax
function Person(first, last) {
  this.first = first
  this.last = last
  // we can put getFullName here
  // but then it'll be present o all object, wasting space
}
Person.prototype.getFullName = function () {
  return `${this.first} ${this.last}`
}
```
