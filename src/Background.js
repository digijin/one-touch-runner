import * as PIXI from 'pixi.js';

import img from './assets/CricketPitch.jpg';

export default class Background extends PIXI.extras.TilingSprite {
  constructor() {
    const texture = new PIXI.Texture(new PIXI.BaseTexture(img));
    super(texture, 600, 400);
  }

  update(delta) {
    this.tilePosition.x -= delta;
  }
}
