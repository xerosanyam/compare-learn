### Prototype properties
- properties in prototype are shared among all the objects

```js
ConstructorName.prototype.propertyName = value
```
- cannot add from object, needs to be added from constructor

#### pros
- helps in saving memory
- reducing duplicate variables

### related
- hasOwnProperty

```js
// instead of adding each property manually, we can overwrite it with new object
Dog.prototype = {
    numLegs:4,
    eat:function(){
        console.log('eat eat eat')
    },
    describe:function(){
        console.log('my name is'+this.name)
    }
}
```
but problem with above is that constructor property is lost, therefore we redefine it

```js
// instead of adding each property manually, we can overwrite it with new object
Dog.prototype = {
    constructor: Dog,
    numLegs:4,
    eat:function(){
        console.log('eat eat eat')
    },
    describe:function(){
        console.log('my name is'+this.name)
    }
}
```