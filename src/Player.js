import * as PIXI from 'pixi.js';

import img from './assets/player.png';

export default class Player extends PIXI.Sprite {
    h=0;

    constructor() {
      const baseTexture = new PIXI.BaseTexture(img);
      const texture = new PIXI.Texture(baseTexture);
      super(texture);
      this.width = 100;
      this.height = 100;
      //   this.tint = 0;

      document.addEventListener('mousedown', () => {
        this.h = -20;
      });
    }

    update(delta) {
      this.h += delta;

      this.y += this.h;
      if (this.y > 200) {
        this.y = 200;
        this.h = 0;
      }
    }
}