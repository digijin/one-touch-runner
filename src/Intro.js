import * as PIXI from 'pixi.js';
import config from './config';


import logo from './assets/logo1.png';

import { PlayerState } from './Game';

export default class Intro extends PIXI.Container {
  constructor(app) {
    super();
    this.app = app;
    this.logo = new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(logo)));
    this.addChild(this.logo);
    this.logo.anchor = { x: 0.5, y: 0.5 };
    this.logo.x = config.stage.width / 2;
    this.logo.y = 185;// config.stage.height / 2;


    this.text = new PIXI.Text('TAP OR CLICK TO START', {
      fontFamily: 'gamefont', fontSize: 48, fill: 0x0, align: 'center',
    });
    this.addChild(this.text);
    this.text.anchor = { x: 0.5, y: 0.5 };
    this.text.x = config.stage.width / 2;
    this.text.y = 315;// config.stage.height / 2;
  }

  update() {
    if (this.app.state === PlayerState.WAIT) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
