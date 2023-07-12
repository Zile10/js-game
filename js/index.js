import {canvas, c} from './modules/init.js'
import Player from './modules/player.js'

let player = new Player({
    x: 350,
    y: 350,
    dx: 0,
    dy: 0,
    width: 30,
    height: 50
})

player.draw()

function animate() {
    requestAnimationFrame(animate)
    canvas.clear()
    player.update()
}

animate()