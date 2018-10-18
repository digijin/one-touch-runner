import * as PIXI from 'pixi.js';
import config from './config';
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
        this.counter = 500 + Math.random() * 800;

        const scrollspeed = config.scrollSpeed + Math.floor(this.app.offset / 4000);
        const ratio = scrollspeed / config.scrollSpeed;
        this.counter *= ratio;

        this.addChild(new Enemy(this.app));
      }
      // }
    }
}
