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

	return '01001000 01101001 00100000 01100010 01110010 01101111 01110100 01101000 01100101 01110010';
}

if (typeof module === 'object' && module.exports) {
	exports.hello = hello;
	exports.plural = plural;
}
