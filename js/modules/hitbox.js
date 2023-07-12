import {canvas, c} from '/js/modules/init.js'
export default class Hitbox {
    constructor(config){
        this.x = config.x
        this.y = config.y
        this.dx = config.dx
        this.dy = config.dy
        this.width = config.width
        this.height = config.height
    }

    draw(){
        c.fillStyle = 'crimson';
        c.fillRect(this.x, this.y, this.width, this.height)
    }
    gravity(){
        this.dy += 0.5
    }
    move(){
        this.x += this.dx
        this.y += this.dy

    }
    update(){
        // this.gravity()
        this.move()
        this.draw()
    }
}