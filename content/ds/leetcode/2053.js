var kthDistinct = function (arr, k) {
	let seen = new Set()
	let ans = []
	for (let num of arr) {
		if (seen.has(num)) {
			ans = ans.filter((item) => item === num)
		} else {
			seen.add(num)
			ans.push(num)
		}
	}
	console.log(ans)
	if (ans.length < k) return ''
	return ans[k - 1]
};
console.log('output is ', kthDistinct(["d", "b", "c", "b", "c", "a"], 2))