### how to compose complex component using multiple components
- You can render JSX elements, stateless functional components, and ES6 class components within other components.
```js
const Fruits = () =>{
    return (
        <div>
            Fruits
        </div>
    )
}
const Vegetables = () =>{
    return (
        <div>
        Vegetables
        </div>
    )
}
class Foods extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Fruits/>
                <Vegetables/>
            </div>
        )
    }
}
```