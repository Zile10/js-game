import CollisionBox from "/js/modules/classes/CollisionBox.js";

export default class Wall extends CollisionBox {
    constructor(config){
        super(config)
    }
    draw(){
        c.fillStyle = 'crimson';
        c.fillRect(this.x, this.y, this.width, this.height)
    }
    update(){
        this.draw()
    }
}