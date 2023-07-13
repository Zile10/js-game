window.collisionBoxes = []
export default class CollisionBox {
    constructor(config){
        this.x = config.x
        this.y = config.y
        this.width = config.width
        this.height = config.height
        collisionBoxes.push(this)
    }
    update(){
       
    }
}