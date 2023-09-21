#!/usr/bin/node

// a class square that inherits from class Rectangle 

const SquareFive = require('./5-square');

class Square extends SquareFive {
  charPrint(c){
    for (let i = 0; i < this.height; i++) {
        console.log('C'.repeat(this.width));
        }
  }
}

module.exports = Square;