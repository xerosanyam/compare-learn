## Array.prototype.sort()

- does in place & also returns sorted array
- sorting is peculiar
  - converts elements to string, then compares them
  - sorts in ascending order

```js
const months = ['March', 'Jan', 'Feb', 'Dec']
months.sort() // ["Dec", "Feb", "Jan", "March"]

const nums = [1, 30, 4, 21, 100000]
nums.sort() // [1, 100000, 21, 30, 4]
```

> We can see, Numbers are not sorted!

### Correct way to sort num array

```js
nums.sort((first, second) => first - second)
```

### Correct way to sort date array

```js
dates.sort((first, second) => new Date(first) - new Date(second))
```

### correct way to sort string

```js
strings.sort((first, second))=>{
  if(first<second){
    // natural order is ascending order. here we do not want to change anything so return -1
    return -1
  }
  return 1
})
```

> functional. requires a callback to sort
