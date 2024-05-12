## 643 Max avg Subarray

[link](https://leetcode.com/problems/maximum-average-subarray-i/)

```
var findMaxAverage = function (nums, k) {
    let ans = 0
    let sum = 0
    for (let i = 0; i < k; i++) {
        sum += nums[i]
    }
    ans = sum
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]
        ans = Math.max(sum, ans)
    }
    return ans / k
};
```
