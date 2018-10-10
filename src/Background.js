import * as PIXI from 'pixi.js';
import config from './config';

import img from './assets/CricketPitch.jpg';

import { PlayerState } from './Game';

export default class Background extends PIXI.extras.TilingSprite {
  constructor(app) {
    const texture = new PIXI.Texture(new PIXI.BaseTexture(img));
    super(texture, config.stage.width, config.stage.height);
    this.app = app;
    // this.tint = 0xff0000;
  }

  update(delta) {
    if (this.app.state === PlayerState.RUN || this.app.state === PlayerState.JUMP) {
      this.tilePosition.x -= delta * config.scrollSpeed;
    }
  }
}
