module.exports = (text, options) => {
	let numbers;
	options = options || {};
	if (!text || typeof text !== 'string') {
		return [];
	}
	numbers = text.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g);

	if (options.string === false) {
		numbers = numbers.map(n => Number(n.replace(/,/g, '')));
	}
	return numbers;
};
