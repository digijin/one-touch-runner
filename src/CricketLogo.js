
import * as PIXI from 'pixi.js';
import logo from './assets/CricketLogo.png';
import config from './config';

const PADDING = 10;

export default class CricketLogo extends PIXI.Sprite {
  constructor() {
    super(new PIXI.Texture(new PIXI.BaseTexture(logo)));
    this.anchor = { x: 1, y: 0 };
    this.x = config.stage.width - PADDING;
    this.y = PADDING;
  }
}
