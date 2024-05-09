### Squares of a Sorted Array

```
var sortedSquares = function(nums) {
    let left = 0
    let right = nums.length - 1
    let ans = []
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            ans[i] = nums[right] * nums[right]
            right--
        } else {
            ans[i] = nums[left] * nums[left]
            left++
        }
    }
    return ans
};
```

#### insight
- the large numbers are on edge. use 2 pointers to compare them
- you need to reduce search space, either from right or from left
- if you split the array, its better to write them on piece of paper to have more clarity
- don't think of solving problem inplace until required
- since large numbers are on edge, we will start writing the output array from behind
- outer loop keeps track of answer array, actual pointers close in on the array

- 2 pointer problem with some interesting cases (outer loop should work according to answer)