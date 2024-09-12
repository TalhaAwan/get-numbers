import ExtractNumbers from '../index';

describe('ExtractNumbers', () => {
  test('get numbers', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers('3030 results found')).toEqual(['3030']);
    expect(extractor.extractNumbers('50 out of 100')).toEqual(['50', '100']);
  });

  test('get numbers with commas', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers('100,000 results found')).toEqual(['100,000']);
    expect(extractor.extractNumbers('10,000 and 15,000 respectively')).toEqual(['10,000', '15,000']);
    expect(extractor.extractNumbers('100,000,000,000 is a large amount, and so is 900,000,000,000,000')).toEqual(['100,000,000,000', '900,000,000,000,000']);
  });

  test('get decimals', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers('Your rating is 8.7')).toEqual(['8.7']);
    expect(extractor.extractNumbers('Your rating is 7.7/10.0')).toEqual(['7.7', '10.0']);
  });

  test('get decimals with comma', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers('Your balance: $100,000.77')).toEqual(['100,000.77']);
    expect(extractor.extractNumbers('Your balance: $100,000.77, previous month: $90,899.89')).toEqual(['100,000.77', '90,899.89']);
    expect(extractor.extractNumbers('Your balance: 100,000,000.77, previous month: 90,899,232.89')).toEqual(['100,000,000.77', '90,899,232.89']);
  });

  test('get negative numbers', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers('Temperature: -15')).toEqual(['-15']);
    expect(extractor.extractNumbers('Temperature: -15°C, yesterday: -22°C')).toEqual(['-15', '-22']);
  });

  test('get negative decimal numbers', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers('Temperature: -15.7')).toEqual(['-15.7']);
    expect(extractor.extractNumbers('Temperature: -15.7°C, yesterday: -22.33°C')).toEqual(['-15.7', '-22.33']);
  });

  test('get negative numbers with commas', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers("Can't think of some -150,000 example, but it should work")).toEqual(['-150,000']);
    expect(extractor.extractNumbers('-170,000, -222,987 and -222,987,899 work too!')).toEqual(['-170,000', '-222,987', '-222,987,899']);
  });

  test('get negative decimal numbers with commas', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers('-170,000.77, -222,987.66 and -222,987,899.29')).toEqual(['-170,000.77', '-222,987.66', '-222,987,899.29']);
  });

  test('get empty array when no number is present in the string', () => {
    const extractor = new ExtractNumbers();
    expect(extractor.extractNumbers('No results found!')).toEqual([]);
  });

  test('get numbers instead of strings when `string:false` is passed in options', () => {
    const options = { string: false };
    const extractor = new ExtractNumbers(options);
    expect(extractor.extractNumbers('3030 results found')).toEqual([3030]);
    expect(extractor.extractNumbers('100,000 results found')).toEqual([100000]);
    expect(extractor.extractNumbers('Your rating is 7.7/10.0')).toEqual([7.7, 10]);
    expect(extractor.extractNumbers('Your balance: 100,000,000.77, previous month: 90,899,232.89')).toEqual([100000000.77, 90899232.89]);
    expect(extractor.extractNumbers('Temperature: -15, yesterday: -22')).toEqual([-15, -22]);
    expect(extractor.extractNumbers('Temperature: -15.7')).toEqual([-15.7]);
    expect(extractor.extractNumbers('-170,000.77, -222,987.66 and -222,987,899.29')).toEqual([-170000.77, -222987.66, -222987899.29]);
    expect(extractor.extractNumbers('-170,000, -222,987 and -222,987,899')).toEqual([-170000, -222987, -222987899]);
  });

  test('get numbers as strings with removed commas when `removeCommas:true` is passed in options', () => {
    const options = { removeCommas: true };
    const extractor = new ExtractNumbers(options);
    expect(extractor.extractNumbers('100,000,000 results found')).toEqual(['100000000']);
  });

  test('get empty array for anything other than a non-empty string', () => {
    const extractor = new ExtractNumbers();
    // @ts-ignore
    expect(extractor.extractNumbers()).toEqual([]);
    expect(extractor.extractNumbers('')).toEqual([]);
    // @ts-ignore
    expect(extractor.extractNumbers(null)).toEqual([]);
    // @ts-ignore
    expect(extractor.extractNumbers(undefined)).toEqual([]);
    // @ts-ignore
    expect(extractor.extractNumbers({})).toEqual([]);
    // @ts-ignore
    expect(extractor.extractNumbers([])).toEqual([]);
  });
});
