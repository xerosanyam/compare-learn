## Multiple constructor possible?
No. Since **function overloading is not present** we can have only Single constructor.
### Hack
- js function can take any number of arguments
- it becomes duty of developer to check parameters and work accordingly

```js
// normal way
function Student(name) {
  this.name = name
  this.age = 24
}

// if params are not fixed
function Student(name, age) {
  if (age === undefined) {
    age = 24
  }
  this.name = name
  this.age = age
}
```
