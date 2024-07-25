var equalPairs = function (grid) {
	let map = new Map()
	let ans = 0
	for (let row = 0; row < grid.length; row++) {
		let str = []
		for (let col = 0; col < grid[row].length; col++) {
			str.push(grid[row][col])
		}
		map.set(row, str.join(','))
	}
	console.log('equalPairs ~ map:', map)
	for (let col = 0; col < grid[0].length; col++) {
		let str = []
		for (let row = 0; row < grid.length; row++) {
			str.push(grid[row][col])
		}
		console.log('equalPairs ~ str:', str)
		if (map.get(col) === str.join(',')) ans++
	}
	return ans
};

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]))