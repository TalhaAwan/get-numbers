# extract-numbers [![Build Status](https://travis-ci.com/TalhaAwan/get-numbers.svg?branch=master)](https://travis-ci.com/TalhaAwan/get-numbers)

> Get numbers from a string

## Live App

<a href="https://www.techighness.com/app/extract-numbers/" target="_blank">Extract Numbers</a>

## Install

```
$ npm install extract-numbers
```

## Usage

```js
let str = '3030 results found';
extractNumbers(str);
//=> ['3030']

//multiple
str = '50 out of 100'
extractNumbers(str);
//=> ['50', '100']

//with commas
str = '100,000 people shortlisted out of 220,000,000 population'
extractNumbers(str);
//=> ['100,000', 220,000,000]

//decimals
str = 'Your rating is 8.7'
extractNumbers(str);
//=> ['8.7']

//decimals with commas
str = 'Your balance: $100,000.77, previous month: $90,899.89'
extractNumbers(str);
//=> ['100,000.77', '90,899.89']

//negatives and negative decimals
str = 'Temperature: -15°C, yesterday: -22°C, day before yesterday: -20.5°C;'
extractNumbers(str);
//=> ['-15', '-22', '-20.5']

//negatives with commas
str = '-170,000, -222,987 and -222,987,899.70 respectively.'
extractNumbers(str); 
//=> ['-170,000', '-222,987', '-222,987,899.70']
```
___


## API

### extractNumbers(str, options)

Returns an array of numbers.

__

## options

Type: `Object`

## string

Type: `Boolean`
Default: `true`

If set to `false`, remove any commas and convert the whole array to numbers
```js
let str = `The numbers are: 3030, 100,000, 100,000,000, 7.7, 90,899,232.89, 
-22, -15.7, -222,987,899 and -222,987,899.90 `;

extractNumbers(str, {string: false})
//=> [3030, 100000, 100000000, 7.7, 90899232.89, -22, -15.7, -222987899, -222987899.90]
```

___

## Related

- [case-study](https://www.npmjs.com/package/case-study) - a library to find, count or verify uppercase and lowercase words in a string.

## License

MIT © Talha Awan
