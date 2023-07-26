import CollisionBox from '../CollisionBox.js';
import HitBox from './HitBox.js'

export default class Player extends HitBox {
    constructor(config){
        super(config)
        this.controls = {
            forward: 'w',
            left: 'a',
            backward: 's',
            right: 'd',

        } || config.controls
        this.speed = config.speed || 3

    }
    playerControls(){
        let dxStop = false
        // collisionBoxes.forEach(box => {
        //     if (box.x > (this.x + this.dx)) {
        //         dxStop = true
        //     }
        // })
        if (window.key && !dxStop) {
            switch (window.key.toLowerCase()) {
                case this.controls.forward:
                    this.dy = -this.speed
                    break;
                case this.controls.left:
                    this.dx = -this.speed
                    break;
                case this.controls.backward:
                    this.dy = this.speed
                    break;
                case this.controls.right:
                    this.dx = this.speed
                    break;
                default:
                    break;
            }
            
        } else {
            this.dy = this.dy * 0.8; this.dx = this.dx * 0.8;
        }
    }
    draw(){
        c.fillStyle = 'crimson';
        c.fillRect(this.x, this.y, this.width, this.height)
    }
    update(){
        this.playerControls()
        super.update()
        this.draw()
    }
}
