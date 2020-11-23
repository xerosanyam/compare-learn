### jsx
- benefit: full programmatic power of js in html
- not valid js, hence must be converted to js. done using babel transpiler
- simply include js code within round brace
- must return a single element
- tool to write readable html within JS

```jsx
const JSX = (
    <div>
        {/* some comment here */}
        <h1 className="hello">Hello</h1>
    </div>
)
//Render JSX
ReactDOM.render(JSX, document.getElementById('challenge-node'))
```
- class is reserved keyword in JS, therefore JSX uses `className` to define class in html
  - naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is `onClick`, instead of `onclick`
- has concept of self-closing tag for all elements
  - ex: `<div/>` = `<div></div>`
  - this is useful in adding react component