export default class Map {
    constructor(config){
        this.walls = config.walls
        // this.entities = config.entities
        // this.props = config.props
    }
    drawWalls(){
        this.walls.forEach(wall => {
            wall.draw()
        });
    }

    draw(){
        this.drawWalls()
    }
}