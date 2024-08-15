function TreeNode(val, left, right) {
	this.val = (val === undefined ? 0 : val)
	this.left = (left === undefined ? null : left)
	this.right = (right === undefined ? null : right)
}

var zigzagLevelOrder = function (root) {
	if (!root) return []
	let level = 0
	let queue = [root]
	let ans = []
	while (queue.length > 0) {
		let temp = []
		let tAns = []
		let increasing = level % 2
		for (let i = 0; i < queue.length; i++) {
			let node = queue[i]
			(node.val && increasing === 0) ? tAns.push(node.val) : tAns.unshift(node.val)
			if (node.left) temp.push(node.left)
			if (node.right) temp.push(node.right)
		}
		ans.push(tAns)
		level++
		queue = temp
	}
	return ans
};

const list = [3, 9, 20, null, null, 15, 7]
let root = new TreeNode(list[0])
let queue = [root]
for (let i = 1; i < list.length; i=i+2) {
	let left = new TreeNode(list[i])
	let right = new TreeNode(list[i+1]||null)
	let parent = queue.shift()
	parent.left = left
	parent.right = right
	queue.push(left)
	queue.push(right)
}
console.log(zigzagLevelOrder(root))