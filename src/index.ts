interface Options {
  string?: boolean;
  removeCommas?: boolean;
}

class ExtractNumbers {
  private options: Options
  constructor(options: Options = {}) {
    this.options = options!;
  }

  extractNumbers(text: string) {
    const { string = true, removeCommas = false } = this.options;
    let numbers: (string | number)[];

    if (!text || typeof text !== 'string') {
      return [];
    }

    numbers = text.match(/(-\d+|\d+)(,\d+)*(\.\d+)*/g) || [];

    if (string && removeCommas) {
      numbers = numbers.map(n => (n as string).replace(/,/g, ''));
    }
    if (string === false) {
      numbers = numbers.map(n => Number((n as string).replace(/,/g, '')));
    }

    return numbers;
  }
};

export default ExtractNumbers;