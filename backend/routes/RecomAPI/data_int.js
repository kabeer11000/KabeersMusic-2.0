const punycode = require("punycode");
var data = [
	{
		input: [1, 2, 3, 3, 3, 3, 3, 5, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 4, 4, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 2, 2, 2, 2, 6, 1, 5, 5, 5, 5],
		output: [5]
	},
	{
		input: [2, 5, 3, 3, 3, 3, 3, 5, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 4, 4, 5, 5, 5, 5, 5, 5, 5, 4, 5, 2, 2, 2, 5, 6, 6, 1],
		output: [3]
	},
	{
		input: [1, 6, 6, 6, 2, 5, 3, 3, 3, 3, 3, 5, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 4, 4, 5, 5, 5, 5, 5, 5, 5, 4, 5, 2, 2, 6, 6, 6, 6],
		output: [6]
	},
	{
		input: [2, 6, 6, 6, 5, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 4, 4, 5, 5, 5, 5, 5, 5, 5, 4, 5, 2, 1, 5, 6],
		output: 6
	},
	{
		input: [4, 4, 5, 5, 4, 4, 4, 5, 5, 5, 5, 5, 5, 4, 4, 4, 5, 5, 5, 6, 6, 5, 5, 5],
		output: [5]
	},
	{
		input: [5, 1, 2, 5, 3, 3, 3, 3, 3, 5, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 4, 4, 5, 5, 5, 5, 5, 5, 5, 4, 5, 5, 2, 2, 2, 2, 6, 1, 5, 6, 6, 5, 5],
		output: [5]
	}
];
var input = "Kabeer_jaffri";
var encoded = punycode.ucs2.decode(input);
console.log("Encoded", encoded);
console.log("Decoded", punycode.ucs2.encode(encoded));
module.exports = data;
