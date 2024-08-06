var isPalindrome = function (s) {
	let ans = []
	let ans2 = []
	for (let char of s) {
		const code = char.charCodeAt(0)
		if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
			ans.push(char)
			ans2.unshift(char)
		} else if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
			ans.push(char.toLowerCase())
			ans2.unshift(char.toLowerCase())
		} else if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
			ans.push(char)
			ans2.unshift(char)
		}
	}
	console.log(ans, ans2)
	return ans.join('') === ans2.join('')
};

isPalindrome('A man, a plan, a canal: Panama')