### useReducer

- sometimes you want to separate the state logic from the components that make the state changes.
- if you have multiple elements of state that typically change together, then having an object that contains those elements of state can be quite helpful.

- as useState

```js
const countReducer = (state, newState) => newState

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  const increment = () => setCount(count + step)
  return <button onClick={increment}>{count}</button>
}
```

- compute inside reducer function

```js
const countReducer = (count, change) => count + change

function Counter({ initialCount = 0, step = 1 }) {
  const [count, changeCount] = React.useReducer(countReducer, initialCount)
  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}
```

- as callback

```js
const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) : action),
})

function Counter({ initialCount = 0, step = 1 }) {
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () =>
    setState((currentState) => ({ count: currentState.count + step }))
  return <button onClick={increment}>{count}</button>
}
```

- as dispatch object

```js
function countReducer(state, action) {
  const { type, step } = action
  switch (type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + step,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () => dispatch({ type: 'increment', step })
  return <button onClick={increment}>{count}</button>
}
```
