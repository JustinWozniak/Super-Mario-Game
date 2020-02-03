import Compositor from './Compositor.js';
import Timer from './Timer.js';
import {loadLevel} from './loaders.js';
import {createFox} from './entities.js';
import {loadBackgroundSprites} from './sprites.js';
import {createBackgroundLayer, createSpriteLayer} from './layers.js';

import Keyboard from './KeyboardState.js';


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

Promise.all([createFox(), loadBackgroundSprites(), loadLevel('1-1'),]).then(([fox, backgroundSprites, level]) => {
    const comp = new Compositor();

    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);

    const gravity = 2000;
    fox.pos.set(64, 180);


    const SPACE = 32;
    const input = new Keyboard();
    input.addMapping(SPACE, keyState => {
        if (keyState) {
            fox.jump.start();
        } else {
            fox.jump.cancel();
        }
    });
    input.listenTo(window);


    const spriteLayer = createSpriteLayer(fox);
    comp.layers.push(spriteLayer);

    const timer = new Timer(1 / 60);
    timer.update = function update(deltaTime) {
        fox.update(deltaTime);

        comp.draw(context);

        fox.vel.y += gravity * deltaTime;
    }

    timer.start();
});
