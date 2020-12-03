## regex
- Single Match
  ```js
  const index = 'Some text'.search(regex)
  returns int-> -1 or i>=0
  ```
  - no use of /g
- Multiple match
  ```js
  const matches = 'Some text'.match(regex)
  returns null or {index:3, input:'Some text'}
  ```
  - returns multiple match if /g
- replace
  ```js
  const next = 'Some text'.replace(regex,'hi mom')
  ```
- regex
  ```js
  const regex = /bob/g -> match bob
  const regex = /bob|alice/g -> match bob or alice
  const regex = /(bob|alice) Jones/g -> match bob jones or alice jones
  const regex = /colou?r/g -> matches color, colour ?-> 0 or 1
  const regex = /color*/ -> matches color, colorrr *-> 0 or multiple
  const regex = /color+/ -> matches color, colorrr +-> 1 or multiple
  const regex = /color{2,3}/ -> matches colorr, colorrr, but not color {min, mix}
  \ -> escape special character
  \d -> digit
  \w -> word character
  \D -> not digit
  \W -> not word character
  [A-Z] -> b/w a-z
  [^A-Z]-> not b/w a-z
  ```
- 2 ways to created
  1. literal notion
   ```js
   /sanyam/gi
   ```
   - used when it will remain constant
   - ex: in loops
  2. constructor function
   ```js
   new RegExp('sanyam','gi')