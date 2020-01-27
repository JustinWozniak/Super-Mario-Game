import SpriteSheet from './SpriteSheet.js'
import {loadImg} from './loaders.js'


const canvas = document.getElementById('screen')
const context = canvas.getContext('2d')

context.fillRect(0, 0, 50, 50)

loadImg('public/img/tiles.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16)
        sprites.define('ground', 0, 0)
        sprites.draw('ground', context, 45, 62)
    })