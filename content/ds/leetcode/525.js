var findMaxLength = function (nums) {
	let ans = 0
	let map = new Map()
	let curr = 0
	map.set(curr, 1)
	for (let start = 0; start < nums.length; start++) {
		nums[start] === 0 ? curr-- : curr++
		if (map.has(curr)) {
			ans += map.get(curr)
		}
		map.set(curr, (map.get(curr) || 0) + 1)
	}
	return ans
};

console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0, 1]))