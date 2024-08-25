var updateMatrix = function (mat) {
	let ans = Array(mat.length).fill(null).map(() => Array(mat[0].length).fill(-1))
	let floodFill = (i, j) => {
		if (i === -1 || j === -1 || i === mat.length || j === mat[0].length) {
			return Infinity
		}
		if (mat[i][j] === 0) return 1
		if (mat[i][j] === 1) {
			if (ans[i][j] !== -1) {
				return ans[i][j] + 1
			}
			// Math.min(floodFill(i - 1, j)
		}
		// ans[i][j] = Math.min(floodFill(i + 1, j), floodFill(i, j + 1))
		return Math.min(floodFill(i - 1, j), floodFill(i, j - 1))
	}
	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[i].length; j++) {
			if (mat[i][j] === 0) {
				ans[i][j] = 0
				continue;
			}
			ans[i][j] = floodFill(i, j)
		}
	}
	return ans
};

console.log(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]]))