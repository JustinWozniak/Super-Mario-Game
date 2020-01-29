import Compositor from './Compositor.js';
import {loadLevel} from './loaders.js';
import {loadFoxSprite, loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer} from './layers.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


function createSpriteLayer(sprite, pos) {
    return function drawSpriteLayer(context) {
        sprite.draw('idle', context, pos.x, pos.y);
    };
}

class Vec2 {
    constructor(x,y){
        this.x = x,
        this.y = y
    }

}


Promise.all([loadFoxSprite(), loadBackgroundSprites(), loadLevel('1-1'),]).then(([foxSprite, backgroundSprites, level]) => {
    console.log('Level loader', level);

    const comp = new Compositor();
    comp.layers.push(createBackgroundLayer(level.backgrounds, backgroundSprites));

    const pos = new Vec2(64, 180)
    const velocity = new Vec2(2, -10)

    // const pos = {
    //     x: 64,
    //     y: 180
    // };

    // const velocity = {
    //     x: 2,
    //     y: -10
    // };

    comp.layers.push(createSpriteLayer(foxSprite, pos));

    const GRAVITY = 0.5

    function update() {
        comp.draw(context);
        // pos moves sprite across the screen
        pos.x += velocity.x;
        pos.y += velocity.y;
        velocity.y += GRAVITY
        requestAnimationFrame(update);
    }

    update();
});
