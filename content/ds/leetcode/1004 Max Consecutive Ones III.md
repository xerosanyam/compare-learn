## 1004 Max Consecutive Ones III

[link](https://leetcode.com/problems/max-consecutive-ones-iii/description/)

```
var longestOnes = function (nums, k) {
    let ans = 0
    let count = 0
    let left = 0
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            count++
        }

        if (count > k) {
            if (nums[left] === 0) {
                count--
            }
            left++
        }

        ans = Math.max(right - left + 1, ans)

    }
    return ans
};
```
