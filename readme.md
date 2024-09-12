[//]: # "The code structure for the repo: https://pauloe-me.medium.com/typescript-npm-package-publishing-a-beginners-guide-40b95908e69c"

# extract-numbers ![extract-numbers](https://github.com/TalhaAwan/get-numbers/actions/workflows/build.yml/badge.svg)

> Get numbers from a string

## Install

```
$ npm install extract-numbers
```

## Usage

```js
import ExtractNumbers from "extract-numbers";

const extractor = new ExtractNumbers();

let str = "3030 results found";
extractor.extractNumbers(str);
//=> ["3030"]

//multiple
str = "50 out of 100";
extractor.extractNumbers(str);
//=> ["50", "100"]

//with commas
str = "100,000 people shortlisted out of 220,000,000 population";
extractor.extractNumbers(str);
//=> ["100,000", 220,000,000]

//decimals
str = "Your rating is 8.7";
extractor.extractNumbers(str);
//=> ["8.7"]

//decimals with commas
str = "Your balance: $100,000.77, previous month: $90,899.89";
extractor.extractNumbers(str);
//=> ["100,000.77", "90,899.89"]

//negatives and negative decimals
str = "Temperature: -15°C, yesterday: -22°C, day before yesterday: -20.5°C;";
extractor.extractNumbers(str);
//=> ["-15", "-22", "-20.5"]

//negatives with commas
str = "-170,000, -222,987 and -222,987,899.70 respectively.";
extractor.extractNumbers(str);
//=> ["-170,000", "-222,987", "-222,987,899.70"]
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
//=> ["100000000", "90899232.89", "-222987899.9"]
```

---

## License

MIT © Talha Awan
