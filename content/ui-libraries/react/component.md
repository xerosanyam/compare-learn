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