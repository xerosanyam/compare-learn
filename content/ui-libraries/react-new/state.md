### useState

```js
const [value, setValue] = useState(initialValue)
```

#### Things to keep in mind:

- if initialValue is a computation, make it function, ie
  instead of this

  ```js
  const [] = useState(localStorage.getItem('name') || '')
  ```

  do this

  ```js
  const [] = useState(() => localStorage.getItem('name') || '')
  ```

  - useState ignores the initialValue after first render
  - also called Lazy state initialization
