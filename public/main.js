function hello(name) {
	return `Привет, ${name}`;
}

function plural(count) {

	if (count === 0) {
		return 'Здравствуй дух';
	}

	if (count === 1) {
		return 'Рады приветствовать на нашем курсе!';
	}

	if (count < 15) {
		return 'Кликай дальше!! Еще осталось ' + (15 - count) + ' раз(а)';
	}

	return '110100001011111111010001100000001101000010111000110100001011001011010000101101011101000110000010001000001101000010110001110100011000000011010000101100001101000110000010';
}

if (typeof module === 'object' && module.exports) {
	exports.hello = hello;
	exports.plural = plural;
}
