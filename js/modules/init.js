// Importing My 'Pure JS Styling' library, from the web
import {style} from 'https://rawcdn.githack.com/Zile10/pure-js/47ac233ec73ebfdd422bdaa0588bb57a19cd00d6/public/styles/styleUtils.js'
import {animate, resizeCanvas} from '/js/modules/functions/_functions.js'

// Global Variables
window.canvas = document.querySelector('canvas')
window.c = canvas.getContext('2d') 
window.key = null
window.heldKeys = []

canvas.clear = () => {
    c.clearRect(0, 0, canvas.width, canvas.height)
}

import {Player} from '/js/modules/classes/_classes.js'
window.player = new Player({
    x: 350,
    y: 350,
    dx: 0,
    dy: 0,
    width: 30,
    height: 50
})

style('*', {
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    overflow: 'hidden',
})
style('body', {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#333'
})
style(canvas, {
    background: 'white',
    border: '1px solid black',
})

window.addEventListener('keydown', (e) => {
    window.key = e.key
    if (!window.heldKeys.includes(e.key)) {
        window.heldKeys.push(e.key)
        console.log(window.heldKeys);
    }
})
window.addEventListener('keyup', (e) => {
    window.key == e.key ? window.key = null : window.key = window.key
    if (window.heldKeys.includes(e.key)) {
        let index = window.heldKeys.indexOf(e.key)
        window.heldKeys.splice(index)
        console.log(window.heldKeys);
    }
})

resizeCanvas(20*40, 14*40)
animate()