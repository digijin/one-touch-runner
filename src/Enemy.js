import * as PIXI from 'pixi.js';


export default class Enemy extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.WHITE);
    this.tint = 0xff0000;
    this.x = window.innerWidth;
    this.y = 200;
    this.width = Math.random() * 100;
    this.height = Math.random() * 100;
  }

  update(delta) {
    this.x -= 10 * delta;
  }
}
