#!/usr/bin/node

// a class Rectangle that defines a rectangle

class Rectangle {
    constructor(w,h){
        if (w > 0 && h > 0) {
            let object = {}
        
            this.width = w;
            this.height = h; 
        }  
     
    }
    print() {
        for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
        }
    }  
    
}

module.exports = Rectangle;

// for (let i = 0; i < this.height; i++) {
//     console.log('X'.repeat(this.width));