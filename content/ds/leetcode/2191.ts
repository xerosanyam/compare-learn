var sortJumbled = function (mapping, nums) {
	let ans = []
	for (let num of nums) {
		let str = String(num).split('')
		let temp = []
		for (let char of str) {
			temp.push(mapping[char])
		}
		ans.push({ original: num, updated: Number(temp.join('')) })
	}
	ans = [...ans].sort((a, b) =>
		a.updated - b.updated
	)
	return ans.map((item) => item.original)
};
