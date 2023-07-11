import {canvas, c} from '/js/modules/init.js'
export default class Hitbox {
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw(){
        c.fillStyle = 'crimson';
        c.fillRect(this.x, this.y, this.width, this.height)
        console.log('drawing', this.x, this.y, this.width, this.height);
        console.log(c.fillRect);
    }
}