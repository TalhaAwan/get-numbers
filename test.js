import test from 'ava';
import m from '.';

test('get numbers', t => {
	t.deepEqual(m('3030 results found'), ['3030']);
	t.deepEqual(m('50 out of 100'), ['50', '100']);
});

test('get numbers with commas', t => {
	t.deepEqual(m('100,000 results found'), ['100,000']);
	t.deepEqual(m('10,000 and 15,000 respectively'), ['10,000', '15,000']);
	t.deepEqual(m('100,000,000,000 is a large amount, and so is 900,000,000,000,000'), ['100,000,000,000', '900,000,000,000,000']);
});

test('get decimals', t => {
	t.deepEqual(m('Your rating is 8.7'), ['8.7']);
	t.deepEqual(m('Your rating is 7.7/10.0'), ['7.7', '10.0']);
});

test('get decimals with comma', t => {
	t.deepEqual(m('Your balance: $100,000.77'), ['100,000.77']);
	t.deepEqual(m('Your balance: $100,000.77, previous month: $90,899.89'), ['100,000.77', '90,899.89']);
	t.deepEqual(m('Your balance: 100,000,000.77, previous month: 90,899,232.89'), ['100,000,000.77', '90,899,232.89']);
});

test('get negative numbers', t => {
	t.deepEqual(m('Temperature: -15'), ['-15']);
	t.deepEqual(m('Temperature: -15&deg;C, yesterday: -22&deg;C'), ['-15', '-22']);
});

test('get negative decimal numbers', t => {
	t.deepEqual(m('Temperature: -15.7'), ['-15.7']);
	t.deepEqual(m('Temperature: -15.7&deg;C, yesterday: -22.33&deg;C'), ['-15.7', '-22.33']);
});

test('get negative numbers with commas', t => {
	t.deepEqual(m('Can\'t think of some -150,000 example, but it should work'), ['-150,000']);
	t.deepEqual(m('-170,000, -222,987 and -222,987,899 work too!'), ['-170,000', '-222,987', '-222,987,899']);
});

test('get negative decimal numbers with commas', t => {
	t.deepEqual(m('-170,000.77, -222,987.66 and -222,987,899.29'), ['-170,000.77', '-222,987.66', '-222,987,899.29']);
});

test('get numbers instead of strings when string:false is passed in options', t => {
	const options = {
		string: false
	};
	t.deepEqual(m('3030 results found', options), [3030]);
	t.deepEqual(m('100,000 results found', options), [100000]);
	t.deepEqual(m('Your rating is 7.7/10.0', options), [7.7, 10]);
	t.deepEqual(m('Your balance: 100,000,000.77, previous month: 90,899,232.89', options), [100000000.77, 90899232.89]);
	t.deepEqual(m('Temperature: -15, yesterday: -22', options), [-15, -22]);
	t.deepEqual(m('Temperature: -15.7', options), [-15.7]);
	t.deepEqual(m('-170,000.77, -222,987.66 and -222,987,899.29', options), [-170000.77, -222987.66, -222987899.29]);
	t.deepEqual(m('-170,000, -222,987 and -222,987,899', options), [-170000, -222987, -222987899]);
});

test('get empty array for anything other than a non-empty string', t => {
	t.deepEqual(m(), []);
	t.deepEqual(m(''), []);
	t.deepEqual(m(null), []);
	t.deepEqual(m(undefined), []);
	t.deepEqual(m({}), []);
	t.deepEqual(m([]), []);
});
