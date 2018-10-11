import * as PIXI from 'pixi.js';

import Enemy from './Enemy';
// import { PlayerState } from './Game';

export default class Objects extends PIXI.Container {
    counter = 100;

    constructor(app) {
      super();
      this.app = app;
    }

    update() {
      // if (this.app.state === PlayerState.RUN || this.app.state === PlayerState.JUMP) {
      this.counter -= this.app.offsetDelta;
      if (this.counter < 0) {
        this.counter = 100 + Math.random() * 800;
        this.addChild(new Enemy(this.app));
      }
      // }
    }
}
