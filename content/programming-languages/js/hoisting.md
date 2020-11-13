### what is hoisting?
- able to access a variable before declaration
- js raises up(hoists) the declarations

```js
catName('kitty') // cat name is kitty
function catName(name){
    console.log('cat name is', name)
}
```
- works with function & var. does not work with let, const