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
        console.log('X');
    }  
    
}

module.exports = Rectangle;