import {c} from './init.js'
import Hitbox from './hitbox.js'


export default class Player extends Hitbox {
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
        if (global.key) {
            console.log(global.key);
            switch (global.key.toLowerCase()) {
                case this.controls.forward:
                    this.dy = 5
                    global.key = null
                    break;
                case this.controls.left:
                    this.dx = -5
                    break;
                case this.controls.backward:
                    this.dy = -5
                    break;
                case this.controls.right:
                    this.dx = 5
                    break;
                default:
                    this.dy = 0
                    this.dx = 0
                    break;
            }
            
        }
    }
    update(){
        this.playerControls()
        super.update()
    }
}
