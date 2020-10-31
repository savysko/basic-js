const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(Direct) {
    this.Direct = (Direct === false);
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error;
    }

    let offset = 0;
    let result = '';

    key = key.repeat(Math.ceil(string.length / key.length));

    for (let i = 0; i < string.length; i++) {
      const char = this.getChar(string[i], key[i - offset], '+');
      
      if (!/[a-z]/ig.test(char)) {
        offset++;
      }

      result += char;
    }

    result = this.Direct ? [...result].reverse().join('') : result;

    return result;
  }

  decrypt(string, key) {
    if (!string || !key) throw new Error;

    let offset = 0;
    let result = '';

    key = key.repeat(Math.ceil(string.length / key.length));

    for (let i = 0; i < string.length; i++) {
      const char = this.getChar(string[i], key[i - offset]);
      if (!/[a-z]/ig.test(char)) {
        offset++;
      }

      result += char;
    }

    result = this.Direct ? [...result].reverse().join('') : result;

    return result;
  }

  getChar(str, k, operator) {
    const strChar = str.toUpperCase().codePointAt(0) - 65;
    const keyChar = k.toUpperCase().codePointAt(0) - 65;

    if (strChar < 0 || strChar > 25) {
      return str.toUpperCase();
    }

    let code = operator === '+' ? strChar + keyChar : strChar - keyChar;
    code = code > 25 ? code - 26 : code < 0 ? code + 26 : code;

    return String.fromCodePoint(code + 65);
  }
}

module.exports = VigenereCipheringMachine;
