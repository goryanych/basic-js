const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag;
  }

  encrypt(message, key) {
    if (!key) throw new Error('Error');

    const char = 65;
    const endChar = 90;
    const mod = 26;
    let msgArr = [];
    let temp;
    let tempSecond;
    let count = -1;
    let str = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      temp = message[i].charCodeAt() - char;

      if (temp < 0 || temp > endChar) {
        msgArr.push(temp);
        continue;
      }

      count++;
      if (count >= key.length) count = 0;

      for (let j = count; j < key.length; j++) {
        tempSecond = key[j].charCodeAt() - char;

        if ((temp + tempSecond) >= mod) {
          msgArr.push(temp + tempSecond - mod);
          break;
        }

        msgArr.push(temp + tempSecond);
        break;
      }
    }

    msgArr.forEach(elem => str += String.fromCharCode(elem + char));
    return str;
  }

  decrypt(message, key) {
    if (!key) throw new Error('Error');
    
    const char = 65;
    const endChar = 90;
    const mod = 26;
    let msgArr = [];
    let temp;
    let tempSecond;
    let count = -1;
    let str = '';

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      temp = message[i].charCodeAt() > endChar ? message[i].charCodeAt() : message[i].charCodeAt() - char;

      if (temp < 0 || temp > endChar) {
        msgArr.push(temp);
        continue;
      }

      count++;
      if (count >= key.length) count = 0;

      for (let j = count; j < key.length; j++) {
        tempSecond = key[j].charCodeAt() - char;

        if ((temp < tempSecond)) {
          msgArr.push(temp + mod - tempSecond);
          break;
        }

        msgArr.push(temp - tempSecond);
        break;
      }
    }

    msgArr.forEach(elem => str += String.fromCharCode(elem > endChar ? elem : elem + char));
    return str;
  }
}

// const directMachine = new VigenereCipheringMachine();

// console.log(directMachine.decrypt('^^', 'behappy'));
// console.log(('^'.charCodeAt()));

//`directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'`

module.exports = VigenereCipheringMachine;
