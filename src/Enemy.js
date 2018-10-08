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
  constructor() {
    const img = images[Math.floor(images.length * Math.random())];
    const texture = new PIXI.Texture(new PIXI.BaseTexture(img));

    super(texture);
    // this.tint = 0xff0000;
    this.x = window.innerWidth;
    this.y = config.ground;
    this.width = 100;
    this.height = 100;
    this.anchor = { x: 0.5, y: 1 };
  }

  update(delta) {
    this.x -= config.scrollSpeed * delta;
  }
}
