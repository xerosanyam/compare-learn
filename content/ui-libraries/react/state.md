### State
- this.state = {}
- update state using this.setState({username:'Lewis'})
    ```js
    //wrong
    this.setState({
        counter: this.state.counter + this.props.increment
    });

    //right
    this.setState((state,props)=>({
        counter: state.counter + props.increment
    }));
    ```
  - object literal is to be wrapped in paranthesis, otherwise js thinks it is block