// Importing My 'Pure JS Styling' library, from the web
import {style} from 'https://rawcdn.githack.com/Zile10/pure-js/47ac233ec73ebfdd422bdaa0588bb57a19cd00d6/public/styles/styleUtils.js'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d') 
canvas.width = innerWidth; canvas.height = innerHeight

canvas.clear = () => {
    c.clearRect(0, 0, canvas.width, canvas.height)
}

style('*', {
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
    overflow: 'hidden'
})
style(canvas, {
    border: '1px solid black',
})

global.key = null

window.addEventListener('keydown', (e) => {
    global.key = e.key
})

export {canvas, c}
