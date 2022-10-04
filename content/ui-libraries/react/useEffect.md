### useEffect

- synchronize state of the world with state of my app

```js
useEffect(callback, dependencyArray)
```

- custom hook: a function that uses hooks
- to give hint to eslint system, custom hook should start with `use`, just a convention to tell ecosystem that it is custom hook
  ```js
  function useLocalState(key, defaultValue) {
    const [state, setState] = useState(() => {
      return localStorage.getItem(key) || defaultValue
    })
    useEffect(() => {
      localStorage.setItem(key, state)
    }, [key, state])
    return [state, setState]
  }
  ```
- as a good practice, always serialize/deserialize data before reading/writing to localStorage

  ```js
  const [state, setState] = useState(() => {
    const value = localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
    return defaultValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  ```
