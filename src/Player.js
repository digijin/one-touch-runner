import * as PIXI from 'pixi.js';

export default class Player extends PIXI.Sprite {
  constructor() {
    super(PIXI.Texture.WHITE);
    this.width = 100;
    this.height = 100;
  }
}
