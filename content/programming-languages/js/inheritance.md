### inhertiance
```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```
1. Create Instance of supertype or parent
```js
// let animal = new Animal() // has some disadvantage, therefore not used
Animal = function(){}
Animal.prototype.eat = function(){
    return 'nom nom'
}
let animal = Object.create(Animal.prototype)
```
2. Set prototype of subtype/child to be instance of parent
```js
Bird.prototype = Object.create(Animal.prototype)
```
3. Update constructor
```js
Bird.prototype.constructor = Bird
```

4. add own methods
```js
Bird.prototype.fly = function(){
    return 'i can fly'
}
```
5. Override parent method
```js
Bird.prototype.eat = function(){
    return 'eating nicely'
}
```

### Mixin
- added to object not constructor, therefore **protoype** is not used
- add unrelated function to both obj

```js
let flyMixin = function(obj){
    obj.fly = function(){
        console.log('i am flying')
    }
}
flyMixin(bird)
flyMixin(airplane)
```