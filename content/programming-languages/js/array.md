https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
https://github.com/denysdovhan/wtfjs#true-is-false

### array: append item to array in immutable manner

    - Mutable:
      - to add: unshift, push
      - to remove: shift, pop
      - to remove from b/w: splice(startIndex, deleteCount)
    - Immutable:
      - to add: concat
      - to remove: slice(start,end)
      - copy: spread

### new array

- Array.from({length:3},()=>0)
