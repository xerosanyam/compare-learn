## 1413 Minimum Value to Get Positive Step by Step Sum

```
var minStartValue = function (nums) {
    let curr = nums[0]
    let min = curr
    for (let i = 1; i < nums.length; i++) {
        curr += nums[i]
        min = Math.min(curr, min)
    }
    return min < 0 ? Math.abs(min) + 1 : 1
};
```

### insight:

- 📋 Prefix sum problem
