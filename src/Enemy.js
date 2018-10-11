import * as PIXI from 'pixi.js';

import config from './config';

import wickets from './assets/wickets.png';
import esky from './assets/esky.png';
import ball from './assets/ball.png';
import chips from './assets/HotChips.png';

const images = [wickets,
  esky,
  ball,
  chips,
];


export default class Enemy extends PIXI.Sprite {
  constructor(app) {
    const img = images[Math.floor(images.length * Math.random())];
    const texture = new PIXI.Texture(new PIXI.BaseTexture(img));

    super(texture);
    this.app = app;
    this.startOffset = this.app.offset;
    // this.tint = 0xff0000;
    this.x = window.innerWidth;
    this.y = config.ground;
    this.width = config.obstacle.width;
    this.height = config.obstacle.height;
    this.anchor = { x: 0.5, y: 1 };
  }

  update() {
    // this.x -= config.scrollSpeed * delta;
    this.x = config.stage.width + config.obstacle.width + this.startOffset - this.app.offset;
    if (this.x < -config.obstacle.width) {
      this.parent.removeChild(this);
    }
  }
}
