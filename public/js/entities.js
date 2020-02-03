import Entity from './Entity.js';
import Jump from './traits/Jump.js';
import Velocity from './traits/Velocity.js';
import {loadFoxSprite} from './sprites.js';

export function createFox() {
    return loadFoxSprite()
    .then(sprite => {
        const fox = new Entity();

        fox.addTrait(new Velocity());
        fox.addTrait(new Jump());

        fox.draw = function drawfox(context) {
            sprite.draw('idle', context, this.pos.x, this.pos.y);
        }

        return fox;
    });
}