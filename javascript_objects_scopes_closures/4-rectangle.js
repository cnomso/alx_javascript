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
    rotate(){
        const rot = this.height;
        this.height = this.width;
        this.width = rot; 

    }

    double(){
        this.width *= 2;
        this.height *= 2;

    }
}

module.exports = Rectangle;