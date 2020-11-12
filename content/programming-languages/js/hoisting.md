### what is hoisting?
- able to access a variable before declaration
- this is done by js. it raises up(hoists) the variables

```js
catName('kitty') // cat name is kitty
function catName(name){
    console.log('cat name is', name)
}
```
- works with function & var. does not work with let, const