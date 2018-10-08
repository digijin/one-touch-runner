import * as PIXI from 'pixi.js';

import config from './config';

import img from './assets/player.png';

export default class Player extends PIXI.Sprite {
    h=0;

    constructor() {
      const baseTexture = new PIXI.BaseTexture(img);
      const texture = new PIXI.Texture(baseTexture);
      super(texture);
      this.width = 100;
      this.height = 200;
      //   this.tint = 0;

      document.addEventListener('mousedown', () => {
        this.h = -20;
      });
    }

    update(delta) {
      this.h += delta;

      this.y += this.h;
      if (this.y > config.ground) {
        this.y = config.ground;
        this.h = 0;
      }
    }
}
