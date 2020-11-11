### what is closure?
- ability of function to remember value of variable
- ability to remember even after the outer function is executed is called closure
- record storing a function together with environment 

```js
let Person = function(pName){
    let name = pName
    this.getName = function(){
        return name;
    }
}
let person = new Person("Sanyam")
person.getName() // "Sanyam"
```
- helps in data privacy
- helps in currying

#### Related questions
- could we create objects if closure was not provided by JS?