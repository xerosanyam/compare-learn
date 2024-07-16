
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


const levelTraversal = (head) => {
    const queue = [head]
    let ans = []
    while (queue.length > 0) {
        const curr = queue.shift()
        ans.push(curr.val)
        curr.left && queue.push(curr.left)
        curr.right && queue.push(curr.right)
    }
    return ans
}


var createBinaryTree = function (descriptions) {
    let map = new Map()
    let children = new Set()
    for (let [parent, child, isLeft] of descriptions) {
        let parentNode = map.get(parent) || new TreeNode(parent)

        let childNode = map.get(child) || new TreeNode(child)
        map.set(child, childNode)

        isLeft ? parentNode.left = childNode :
            parentNode.right = childNode
        map.set(parent, parentNode)
        children.add(child)
    }

    let root
    for (let [item, itemNode] of map) {
        if (!children.has(item)) {
            root = itemNode
            break
        }
    }


    let ans = levelTraversal(root)
    return ans

};

console.log(createBinaryTree([[1, 2, 1], [2, 3, 0], [3, 4, 1]]))