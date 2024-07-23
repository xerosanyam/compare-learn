var isValid = function (s) {
	let matching = {
		'(': ')',
		'{': '}',
		'[': ']'
	}
	let stack = []
	for (let char of s) {
		const match = matching[char]
		if (match) {
			stack.push(match)
		} else {
			let top = stack.pop()
			if (top !== char) return false
		}
	}

	console.log('isValid ~ stack:', stack)
	return stack.length === 0
};

console.log(isValid('()'))