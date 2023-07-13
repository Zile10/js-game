export default function animate() {
    requestAnimationFrame(animate)
    canvas.clear()
    player.update()
}