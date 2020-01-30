import Entity from './Entity.js';
import {loadFoxSprite} from './sprites.js';

export function createFox() {
    return loadFoxSprite()
    .then(sprite => {
        const fox = new Entity();

        fox.draw = function drawFox(context) {
            sprite.draw('idle', context, this.pos.x, this.pos.y);
        }

        fox.update = function updateFox(deltaTime) {
            this.pos.x += this.vel.x * deltaTime;
            this.pos.y += this.vel.y * deltaTime;
        }

        return fox;
    });
}