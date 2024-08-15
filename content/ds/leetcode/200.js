var numIslands = function (grid) {
	const visited = Array(grid.length).fill(0).map(() => Array(grid[0].length).fill(false))

	const isIsland = (x, y) => {
		if (x === grid.length || y === grid[0].length || x === -1 || y === -1) return false
		if (visited[x][y] === true) return false
		visited[x][y] = true
		if (grid[x][y] === '0') return false
		isIsland(x, y + 1)
		isIsland(x + 1, y)
		isIsland(x - 1, y)
		isIsland(x, y - 1)
		return true
	}
	let islands = 0
	for (let i = 0; i < visited.length; i++) {
		for (let j = 0; j < visited[0].length; j++) {
			if (isIsland(i, j)) islands++
		}
	}
	return islands
};

console.log(numIslands([
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"]
])) //expected 3
console.log(numIslands([
	["1", "1", "1"],
	["0", "1", "0"],
	["1", "1", "1"]])) //expected 1