import { maps } from "../classes/_classes.js"
export default function animate() {
    requestAnimationFrame(animate)
    canvas.clear()
    maps[0].draw()
    player.update()
}