import CollisionBox from "/js/modules/classes/CollisionBox.js";

export default class Wall extends CollisionBox {
    constructor(config){
        let tileSize = config.tileSize || 40
        config.x = config.x * tileSize
        config.y = config.y * tileSize
        config.height = config.height * tileSize
        config.width = config.width * tileSize
        super(config)
        
    }
    draw(){
        window.c.fillStyle = 'darkcyan';
        window.c.fillRect(this.x, this.y, this.width, this.height)
    }
    update(){
        this.draw()
    }
}