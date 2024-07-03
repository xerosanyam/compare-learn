### 977 Squares of a Sorted Array

[link](https://leetcode.com/problems/squares-of-a-sorted-array/description/)

```
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length - 1
    let ans = []
    for (let i = nums.length - 1; i >= 0; i--) {
        let leftVal = nums[left] * nums[left]
        let rightVal = nums[right] * nums[right]
        if (leftVal < rightVal) {
            ans[i] = rightVal
            right--
        } else {
            ans[i] = leftVal
            left++
        }
    }
    return ans
};
```

### nuances

- input was sorted

#### insight

- the large numbers are on edge. use 2 pointers to compare them
- you need to reduce search space, either from right or from left
- since we are working with larger numbers first, we will start writing the output array from back
- outer loop keeps track of answer array, actual pointers close in on the array

- 2 pointer problem with some interesting cases (outer loop should work according to answer)
- 🔄 Two Pointers
- 🔚 reverse fill the output

### main trick

- reverse fill the output
