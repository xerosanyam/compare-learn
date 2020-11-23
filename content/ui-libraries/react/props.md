### using props
```js
const List = () = {
    return (
        <p>{props.tasks.join(', ')}</p>
    )
}

<List tasks={["learn react","learn state"]}>
```
- giving default value
    ```js
        ShoppingCart.defaultProps = {
            items:0
        }
    ```
- giving propTypes
    ```js
        ShoppingCart.propTypes = {
            items: PropTypes.func.isRequired
        }
        // items should be of type function
        // items is a required property
    ```
    - there are many types available apart from primitive types
    - function -> func, boolean -> bool
    - PropTypes is imported independently from React, like this: import PropTypes from 'prop-types';
    - same way for class & functional component
- in Class component, it is accessed using this.props.data
- allows unidirectional data flow