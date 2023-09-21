#!/usr/bin/node

// a class square that inherits from class square of 5-square.js:

const SquareFive = require('./5-square');

class Square extends SquareFive {
  charPrint(c){
    if (c === undefined) {
        c = 'X';

    for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
        }
    }
  }
}

module.exports = Square;