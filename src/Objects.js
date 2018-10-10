import * as PIXI from 'pixi.js';

import Enemy from './Enemy';
import { PlayerState } from './Game';

export default class Objects extends PIXI.Container {
    counter = 100;

    constructor(app) {
      super();
      this.app = app;
    }

    update(delta) {
      if (this.app.state === PlayerState.RUN || this.app.state === PlayerState.JUMP) {
        this.counter -= delta;
        if (this.counter < 0) {
          this.counter = 10 + Math.random() * 80;
          this.addChild(new Enemy());
        }
      }
    }
}
