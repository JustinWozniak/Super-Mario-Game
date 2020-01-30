import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';



export function loadFoxSprite() {
    return loadImage('/img/foxSprite.png').then(image => {
        const fox = new SpriteSheet(image, 25, 25);
        fox.define('idle', 2, 295, 49, 60);
        return fox;
    });
}

export function loadBackgroundSprites() {
    return loadImage('/img/tiles.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.defineTile('ground', 0, 0);
        sprites.defineTile('sky', 3, 23);
        return sprites;
    });
}
