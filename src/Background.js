import * as PIXI from 'pixi.js';
import config from './config';

import img from './assets/CricketPitch.jpg';

export default class Background extends PIXI.extras.TilingSprite {
  constructor() {
    const texture = new PIXI.Texture(new PIXI.BaseTexture(img));
    super(texture, config.stage.width, config.stage.height);
  }

  update(delta) {
    this.tilePosition.x -= delta * config.scrollSpeed;
  }
}
