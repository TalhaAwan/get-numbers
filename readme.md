# extract-numbers

[![npm version](https://img.shields.io/npm/v/extract-numbers)](https://www.npmjs.com/package/extract-numbers)
[![CI](https://github.com/TalhaAwan/get-numbers/actions/workflows/ci.yml/badge.svg)](https://github.com/TalhaAwan/get-numbers/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TalhaAwan/get-numbers/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/extract-numbers)](https://www.npmjs.com/package/extract-numbers)
[![Node.js >=12](https://img.shields.io/badge/node-%3E%3D12-blue)](https://www.npmjs.com/package/extract-numbers)
[![Supports modern browsers](https://img.shields.io/badge/browser-support-brightgreen)](https://www.npmjs.com/package/extract-numbers)

Get numbers from a string.

## Install

```
$ npm install extract-numbers
```

## Usage

### ES Module

```js
import ExtractNumbers from 'extract-numbers';
```

### CommonJS

```js
const ExtractNumbers = require('extract-numbers').default;
```

## Examples

```js
import ExtractNumbers from 'extract-numbers';

const extractor = new ExtractNumbers();

let str = '3030 results found';
extractor.extractNumbers(str);
//=> ['3030']

//multiple
str = '50 out of 100';
extractor.extractNumbers(str);
//=> ['50', '100']

//with commas
str = '100,000 people shortlisted out of 220,000,000 population';
extractor.extractNumbers(str);
//=> ['100,000', '220,000,000']

//decimals
str = 'Your rating is 8.7';
extractor.extractNumbers(str);
//=> ['8.7']

//decimals with commas
str = 'Your balance: $100,000.77, previous month: $90,899.89';
extractor.extractNumbers(str);
//=> ['100,000.77', '90,899.89']

//negatives and negative decimals
str = 'Temperature: -15°C, yesterday: -22°C, day before yesterday: -20.5°C;';
extractor.extractNumbers(str);
//=> ['-15', '-22', '-20.5']

//negatives with commas
str = '-170,000, -222,987 and -222,987,899.70 respectively.';
extractor.extractNumbers(str);
//=> ['-170,000', '-222,987', '-222,987,899.70']
```

---

### Options

Type: `Object`

## string

Type: `Boolean`
Default: `true`

If set to `false`, convert the whole array to numbers.

```js
const extractor = new ExtractNumbers({ string: false });

const str = `7.7, 3030, 90,899,232.89 and -222,987,899.9`;

extractor.extractNumbers(str);
//=> [7.7, 3030, 90899232.89, -222987899.9]
```

## removeCommas

Type: `Boolean`
Default: `false`

Keep the extracted numbers as strings but remove commas.

```js
const extractor = new ExtractNumbers({ removeCommas: true });

const str = `100,000,000, 90,899,232.89 and -222,987,899.9!`;

extractor.extractNumbers(str);
//=> ['100000000', '90899232.89', '-222987899.9']
```

---

## Other Packages

- [randomcoords](https://www.npmjs.com/package/randomcoords) – The Node.js client for the [RandomCoords](https://www.randomcoords.com) API to fetch random geographic coordinates worldwide.

---

## License

MIT © Talha Awan
