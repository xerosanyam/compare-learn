### isPrototypeOf
- generally used when you don't have constructor functions
```js
Dog.prototype.isPrototypeOf(beagle) // with constructor function, use prototype
beagle.isPrototypeOf(goofy) // can direclty used with object
```

- all objects have prototype
- prototype is an object
- therefore an object's prototype can have its own prototype
```js
object.prototype.prototype
```

#### related to instanceof
- when you don't have constructor function to use with instanceof
```js
var superProto = {
    // some super properties
}

var subProto = Object.create(superProto);
subProto.someProp = 5;

var sub = Object.create(subProto);

console.log(superProto.isPrototypeOf(sub));  // **true**
console.log(sub instanceof superProto);      // TypeError
```