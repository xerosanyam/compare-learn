### inhertiance

#### using functions

```js
    // let animal = new Animal() // has some disadvantage, therefore not used
    // 1. Create Instance of parent
    let Animal = function(){}
    Animal.prototype.eat = function(){
        return 'nom nom'
    }

    // 2. Set prototype of child to be instance of parent & update constructor
    let Bird = function(){}
    Bird.prototype = Object.create(Animal.prototype)
    Bird.prototype.constructor = Bird

    // 3. add own methods
    Bird.prototype.fly = function(){
        return 'i can fly'
    }

    // 4. Override parent method
    Bird.prototype.eat = function(){
        return 'eating nicely'
    }
```

### above example using classes
```js
class Animal{
    eat(){
        return 'nom nom'
    }
}
class Bird extends Animal{
    fly(){
        return 'I can fly!'
    }
    // override
    eat(){
        return 'burp burp'
    }
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
````
