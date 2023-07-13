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

    }
    playerControls(){
        if (window.key) {
            switch (window.key.toLowerCase()) {
                case this.controls.forward:
                    this.dy = -5
                    break;
                case this.controls.left:
                    this.dx = -5
                    break;
                case this.controls.backward:
                    this.dy = 5
                    break;
                case this.controls.right:
                    this.dx = 5
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
