import * as PIXI from 'pixi.js';

import Enemy from './Enemy';

export default class Objects extends PIXI.Container {
    counter = 100;

    update(delta) {
      this.counter -= delta;
      if (this.counter < 0) {
        this.counter = 10 + Math.random() * 80;
        this.addChild(new Enemy());
      }
    }
}
