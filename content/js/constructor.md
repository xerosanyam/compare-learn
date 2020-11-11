## Constructor
- single constructor because **no function overloading is present**
- but can take any number of arguments
  - it is duty of developer to check parameters and work accordingly

```js
function Student(name) {
  this.name = name
  this.age = 24
}

function Student(name, age) {
  if (age === undefined) {
    age = 24
  }
  this.name = name
  this.age = age
}
```
