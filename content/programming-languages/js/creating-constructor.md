### creating a constructor
function that create new object
- most important keyword is **new**, otherwise object won't be created

- Defined with a **capitalized name** to distinguish from other functions that are not constructors.
- Constructors use the keyword **this** to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
- Constructors **define properties and behaviors instead of returning a value** as other functions might
- properties are generally **intialized with parameters**
- loosely they are like Java classes+constructor
```js
function Animal(){
    this.name  = "goofy"
    this.numLegs = 2
}
```