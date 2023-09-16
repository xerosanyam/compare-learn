### Map (key, value)

- set, get

```js
const hashmap = new Map()
hashmap.set('sanyam', 30)
hashmap.get('sanyam') // 30

hashmap.has('sanyam') // true
hashmap.size // 1
for (const [key, value] of hashmap) {
  console.log('key,value', key, value)
}
hashmap.get('anisha') // undefined
hashmap.delete('sanyam')
```

### Set (value)

- used when you just want to check existence
- add

```js
const set = new Set()
set.add('sanyam')

set.has('sanyam') // true
set.size // 1
set.delete('sanyam')

const a = [1, 2, 1, 2]
const unique = new Set(a) //{1,2}
```
