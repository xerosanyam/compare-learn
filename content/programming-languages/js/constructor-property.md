### Constructor property on objects
- used to get reference to the constructor that created this object
```js
let duck = new Bird()
let beagle = new Dog()
console.log(duck.constructor === Bird)
console.log(beagle.constructor === Dog)
```

- can be overwritten, therefore better to use instanceof method to check type of object

#### objects can be created without constructor
```js
var superProto = {
    name:'sanyam'
}
superProto.constructor // Object(){}
```