var combinationSum3 = function (k, n) {
	let ans = []
	const backtrack = (curr, sum) => {
		if (sum > n) return
		if (sum === n) {
			if (curr.length === k) {
				const key = curr.sort((a, b) => a - b).join('')
				for (let list of ans) {
					if (list.sort((a, b) => a - b).join('') === key) return
				}
				console.log('backtrack ~ curr:', curr, sum, n)
				ans.push([...curr])
			}
			return
		}
		for (let i = 1; i <= 9; i++) {
			if (curr.includes(i)) { continue }
			sum += i
			curr.push(i)
			backtrack([...curr], sum)
			curr.pop()
			sum -= i
		}
	}

	backtrack([], 0)
	return ans
};

console.log(combinationSum3(3, 7))