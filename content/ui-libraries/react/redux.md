## Redux

- Predictable state container for JS apps
- can be used with any UI library

### Async

Redux Thunk middleware

### Basic

1. create redux store
   ```js
   const reducer = (state = 5) => state
   const store = Redux.createStore(reducer)
   ```
2. get current state from store
   ```js
   store.getState()
   ```
3. Define Action, change state -> done by dispatching action
   - action: simple js obj, containing info about event that has just occured
   - sometimes carries data
   - must have type property
   ```js
   const action = {
     type: 'LOGIN',
   }
   ```
4. Define action creator
   - simple js function that returns an action
   ```js
   const actionCreator = () => {
     return action
   }
   ```
5. Dispatch action to store
   ```js
   store.dispatch(action)
   store.dispatch(actionCreator)
   ```
6. reducer
   - how to respond to an action
   - (state, action) => state
   - no side effect, no api call
   ```js
   const authReducer = (state = defaultState, action) => {
     switch (action.type) {
       case 'LOGIN':
         return {
           authenticated: true,
         }
       default:
         return state
     }
   }
   ```
7. subscribe - called when action are dispatched against store

   ```js
   store.subscribe(function () {
     count += 1
   })
   ```

8. composing reducers

   - instead of having multiple state, have multiple reducers
   - combineReducers
     - simple object
     - key are name for associated piece of state
     - write reducer for each piece of application state

   ```js
   const rootReducer = Redux.combineReducers({
     auth: authReducer,
     count: counterReducer,
   })
   const store = Redux.createStore(rootReducer)
   ```

9. handle async operation

   - Redux Thunk middleware

   ```js
   const handleAsync = () => {
     return function (dispatch) {
       // Dispatch request action here
       dispatch(requestingData())
       setTimeout(function () {
         let data = {
           users: ['Jeff', 'William', 'Alice'],
         }
         // Dispatch received data action here
         dispatch(receivedData(data))
       }, 2500)
     }
   }
   const store = Redux.createStore(
     asyncDataReducer,
     Redux.applyMiddleware(ReduxThunk.default)
   )
   ```

   - declare async action
   - takes dispatch as arg
   - call after operation finishes

10. array: append item to array in immutable manner
    - Mutable: front:(unshift,shift), back:(push,pop), b/w:splice, 
    - Immutable: concat, slice, spread operator(shallow copy, 1D) // will return new object
      - to add: concat
      - to remove: slice
      - copy: spread
11. object: make copy
    - Object.assign(target, source1, source2)
    - if target is not {}, it'll modify target
    - target, source1. then target, source2. therefore keys from source2 will take precendence
