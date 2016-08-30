let hello = require('./public/main').hello;
let plural = require('./public/main').plural;
let assert = require('assert');

assert.equal(hello('Test'), 'Привет, Test');

assert.equal(plural(0), 'Здравствуй дух');
assert.equal(plural(1), 'Рады приветствовать на нашем курсе!');
assert.equal(plural(2), 'Кликай дальше!! Еще осталось 13 раз(а)');
assert.equal(plural(13), 'Кликай дальше!! Еще осталось 2 раз(а)');
assert.equal(plural(100), '01001000 01101001 00100000 01100010 01110010 01101111 01110100 01101000 01100101 01110010');
