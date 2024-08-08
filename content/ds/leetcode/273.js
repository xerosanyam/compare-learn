var numberToWords = function (num) {
	let ans = ''
	let map = {
		0: "Zero",
		1: "One",
		2: "Two",
		3: "Three",
		4: "Four",
		5: "Five",
		6: "Six",
		7: "Seven",
		8: "Eight",
		9: "Nine",
		10: "Ten",
		11: "Eleven",
		12: "Twelve",
		13: "Thirteen",
		14: "Fourteen",
		15: "Fifteen",
		16: "Sixteen",
		17: "Seventeen",
		18: "Eighteen",
		19: "Nineteen",
		20: "Twenty",
		30: "Thirty",
		40: "Forty",
		50: "Fifty",
		60: "Sixty",
		70: "Seventy",
		80: "Eighty",
		90: "Ninety",
		100: "Hundred",
		1000: "Thousand",
		1000000: "Million",
		1000000000: "Billion"
	}
	let lessThanTwentyOne = (num) => {
		return map[num]
	}
	let lessThanHundred = num => {
		const [quotient, remainder] = prefix(num, 10)
		return `${map[quotient * 10]} ${remainder > 0 ? numberToWords(remainder) : ''}`
	}
	let lessThanThousand = num => {
		const [quotient, remainder] = prefix(num, 100)
		console.log('lessThanThousand ~ quotient, remainder:', quotient, remainder)
		return `${numberToWords(quotient)} Hundred ${remainder > 0 ? numberToWords(remainder) : ''}`
	}
	let lessThanMillion = num => {
		const [quotient, remainder] = prefix(num, Math.pow(10, 3))
		return `${numberToWords(quotient)} Thousand ${remainder > 0 ? numberToWords(remainder) : ''}`
	}
	let lessThanBillion = num => {
		const [quotient, remainder] = prefix(num, Math.pow(10, 6))
		return `${numberToWords(quotient)} Million ${remainder > 0 ? numberToWords(remainder) : ''}`
	}
	let greaterThanBillion = (num) => {
		const [quotient, remainder] = prefix(num, Math.pow(10, 9))
		return `${numberToWords(quotient)} Billion ${remainder > 0 ? numberToWords(remainder) : ''}`
	}

	let prefix = (num, divisor) => {
		let quotient = Math.floor(num / divisor)
		let remainder = num % divisor
		return [quotient, remainder]
	}

	if (num < 21) {
		console.log('numberToWords ~ num:', num)
		ans = lessThanTwentyOne(num)
	} else if (num < 100) {
		ans = lessThanHundred(num)
	}
	else if (num < 1000) {
		console.log('numberToWords ~ num:', num)
		ans = lessThanThousand(num)
	}
	else if (num < Math.pow(10, 6)) {
		ans = lessThanMillion(num)
	} else if (num < Math.pow(10, 9)) {
		ans = lessThanBillion(num)
	} else {
		ans = greaterThanBillion(num)
	}
	return ans.trim()
};

console.log(numberToWords(999999991))