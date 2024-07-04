## 1480 Running sum of 1d Array

[link](https://leetcode.com/problems/running-sum-of-1d-array/)

```
var runningSum = function (nums) {
    let sum = [nums[0]]
    for (let i = 1; i < nums.length; i++) {
        sum[i] = nums[i] + sum[i - 1]
    }
    return sum
};
```

### insight:

- prefix sum
