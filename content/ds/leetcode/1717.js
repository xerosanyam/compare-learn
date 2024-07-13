let str1 = 'ab'
let str2 = 'ba'
let map = new Map()
const find = (s, xPoint, yPoint) => {
	if (!s || s.length < 2) return 0
	if (map.has(s)) return map.get(s)
	let x = 0
	let y = 0
	let tempx = ''
	let tempy = ''
	if (s.length >= str1.length) {
		const index = s.indexOf(str1)
		if (index !== -1) {
			x += xPoint
			tempx = s.slice(0, index) + s.slice(index + str1.length)
		}
	}
	if (s.length >= str2.length) {
		const index = s.indexOf(str2)
		if (index !== -1) {
			y += yPoint
			tempy = s.slice(0, index) + s.slice(index + str2.length)
		}
	}
	let countX = find(tempx, xPoint, yPoint)
	map.set(tempx, countX)
	let countY = find(tempy, xPoint, yPoint)
	map.set(tempy, countY)
	const count = Math.max(x + countX, y + countY)
	map.set(s, count)
	return count
}

var maximumGain = function (s, x, y) {
	if (!s || s.length < 2) return 0
	return find(s, x, y)
};
