### hasOwnProperty
```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");


canary.hasOwnProperty('name') //true

'age' in canary //true or false
                //based on whether it is present in prototype chain
                //or not
```
### can be confused with
- **in** keyword
  - in checks complete prototype chain.
  - hasOwnProperty checks properties on current object

```js
function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property
b = new Bird()
b.hasOwnProperty('name') // true
b.hasOwnProperty('numLegs') // false
'name' in b // true
'numLegs' in b // true
```