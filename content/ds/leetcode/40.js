var combinationSum2 = function (candidates, target) {
	let map = new Map()
	let ans = []
	candidates.sort((a, b) => a - b)
	let backtrack = (curr, sum, i) => {
		if (sum === target) {
			ans.push(curr)
			return
		}
		let seen = new Set()
		for (; i < candidates.length; i++) {
			const candidate = candidates[i]
			if (seen.has(candidate)) continue
			seen.add(candidate)
			curr.push(candidate)
			backtrack([...curr], sum + candidate, i + 1)
			curr.pop()
		}
	}
	backtrack([], 0, 0)
	return ans
};

console.log(combinationSum2([14, 6, 25, 9, 30, 20, 33, 34, 28, 30, 16, 12, 31, 9, 9, 12, 34, 16, 25, 32, 8, 7, 30, 12, 33, 20, 21, 29, 24, 17, 27, 34, 11, 17, 30, 6, 32, 21, 27, 17, 16, 8, 24, 12, 12, 28, 11, 33, 10, 32, 22, 13, 34, 18, 12]))

