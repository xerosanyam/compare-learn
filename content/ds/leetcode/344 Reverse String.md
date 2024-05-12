## 344 Reverse String

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

### Solution:

```
var reverseString = function(s) {
    let left = 0;
    let right = s.length-1;
    while(left<right){
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
};
```

### Insight:

- 🔄 Two pointer problem
