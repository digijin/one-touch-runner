import * as PIXI from 'pixi.js';
import config from './config';

import img from './assets/Crowd.png';
import imgBg from './assets/cloudSky.jpg';

// import { PlayerState } from './Game';


class Front extends PIXI.extras.TilingSprite {
  constructor(app) {
    const texture = new PIXI.Texture(new PIXI.BaseTexture(img));
    super(texture, config.stage.width, config.stage.height);
    this.app = app;
  }

  update() {
    this.tilePosition.x = -this.app.offset;
  }
}

class Back extends PIXI.extras.TilingSprite {
  constructor(app) {
    const texture = new PIXI.Texture(new PIXI.BaseTexture(imgBg));
    super(texture, config.stage.width, config.stage.height);
    this.app = app;
  }

  update() {
    this.tilePosition.x = -this.app.offset / 2;
  }
}


export default class Background extends PIXI.Container {
  constructor(app) {
    super();
    this.app = app;
    this.back = new Back(app);
    this.addChild(this.back);
    this.front = new Front(app);
    this.addChild(this.front);
  }
}
