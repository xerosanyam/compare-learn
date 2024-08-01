var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log(i)
        for (let j = i; j < nums.length; j++) {
            console.log(i, j, nums[i] + nums[j])
            if ((nums[i] + nums[j]) === target)
                return [i, j]
        }
    }
};

twoSum([3, 2, 4], 6)