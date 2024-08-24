var findComplement = function (num) {
	let binary = num.toString(2)
	let bitMask = (1 << binary.length) - 1
	return bitMask ^ num
};
console.log(findComplement(5)) // 2

	((1 << ((num.toString(2)).length)) - 1) ^ num