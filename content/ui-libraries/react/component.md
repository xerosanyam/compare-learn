## Component
- core of react
- everything in react is component
- 2 ways to create
    1. Javascipt Function
    2. ES6 classes

### Using JS function
- creates stateless functional component
1. js function that returns JSX or null
2. function name should begin with capital letter
```jsx
const DemoComponent = function(){
    return (
        <div className="customClass"/>
    )
}
```

### Using Class syntax
1. extend React.component
2. make a constructor
3. make a render method
```jsx
class Kitten extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>Hi!</h1>
        )
    }
}
```
- Kitten extends React.Component class, so now it has many features of react.
  - local state, lifecycle hooks
- stateless functional component
  - function that accepts props, returns JSX
- stateless component
  - class that extends React.component, but does not uses an internal state
- stateful component
  - class component that maintains own internal state, referred simply as react components
  - common pattern: reduce stateful components & create stateless components
    - helps contain state management to specific area of app
    - improves dev & maintenance as it makes easier to follow changes to state