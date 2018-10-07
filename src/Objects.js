import * as PIXI from 'pixi.js';

import Enemy from './Enemy';

export default class Objects extends PIXI.Container {
    counter = 0;

    update(delta) {
      this.counter += delta;
      if (this.counter > 100) {
        this.counter = 0;
        this.addChild(new Enemy());
        // let enemy = new PIXI.Sprite(PIXI.Texture.WHITE);
        // enemy.tint = 0xff0000;
        // enemy.x = window.innerWidth;
        // enemy.y = 200;
        // enemy.width = Math.random() * 100;
        // enemy.height = Math.random() * 100;

        // enemies.addChild(enemy);
      }
    }
}
