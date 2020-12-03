## yarn
- main reason of creating was perf
  - freezing versions, offline
- npm & yarn are now even on how version is managed
- exlusive feature - yarn workspace
- lerna came long before yarn workspace
  - used symlinks, uses yarn workspace now
  - provides publishing & version management to publish projects independently

### flex
justify-content
- align on X axis
  - flex-start,flex-end, center, space-between, space-around

align-items
- align on Y axis
  - flex-start, flex-end, center, baseline, stretch

flex-direction
- change direction
  - row, row-reverse, column, column-reverse

##### individual properties
order
- change order(advanced of row/column-reverse)
- default:0, can be any int value

align-self
- like align-item, but for individual item

### many elements
flex-wrap
- nowrap, wrap, wrap-reverse;

flex-flow
- flex-flow: flex-direction flex-wrap

align-content
- spacing b/w lines (when you have multiple lines becuase of flex-wrap)
- flex-start, flex-end, center, space-between, space-around, stretch
- no effect when single line


### Grid
grid-column-start
- start from the number of column
- default: span 1
- works with span too

grid-column-end
- end till here, works with negative numbers
- span
  - can be used instead of grid-column-end
  - ex: grid-column-end: span 2;

grid-column
- grid-column: grid-column-start / grid-column-end;

grid-row-start, grid-row-end, grid-row

grid-area: grid-row-start / grid-column-start / grid-start-end / grid-column-end

grid-template-columns: 20% 20% 20% 20% 20%;
grid-template-columns: repeat(5, 20%);
grid-template-columns: 400px 50%
grid-template-columns: 1fr 5fr;