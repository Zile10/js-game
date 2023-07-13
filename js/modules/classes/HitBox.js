import CollisionBox from '/js/modules/classes/CollisionBox.js'

export default class HitBox extends CollisionBox {
    constructor(config){
        super(config)
        this.dx = config.dx
        this.dy = config.dy
    }
    move(){
        this.x += this.dx
        this.y += this.dy

    }
    update(){
        super.update()
        this.move()
    }
}