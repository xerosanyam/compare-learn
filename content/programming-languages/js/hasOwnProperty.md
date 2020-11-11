### hasOwnProperty
```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");


canary.hasOwnProperty('name') //true

'age' in canary //true or false
//based on whether it is present in prototype chain or not
```
### can be confused with
- **in** keyword

### related
- prototype property