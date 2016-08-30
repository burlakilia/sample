let hello = require('./public/main').hello;
let plural = require('./public/main').plural;
let assert = require('assert');

assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural(0), 'Здравствуй дух');
assert.equal(plural(1), 'Рады приветствовать на нашем курсе!');
assert.equal(plural(2), 'Кликай дальше!! Еще осталось 13 раз(а)');
assert.equal(plural(13), 'Кликай дальше!! Еще осталось 2 раз(а)');
assert.equal(plural(100), '110100001011111111010001100000001101000010111000110100001011001011010000101101011101000110000010001000001101000010110001110100011000000011010000101100001101000110000010');
