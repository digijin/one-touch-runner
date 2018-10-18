import * as PIXI from 'pixi.js';
import config from './config';
import reload from './assets/reload.png';

import { PlayerState } from './Game';

export default class Outro extends PIXI.Container {
  constructor(app) {
    super();
    this.app = app;

    this.bg = new PIXI.Sprite(PIXI.Texture.WHITE);
    this.bg.tint = 0;
    this.bg.width = config.stage.width;
    this.bg.height = config.stage.height;
    this.bg.alpha = 0.5;
    this.addChild(this.bg);

    this.title = new PIXI.Text('GAME OVER', {
      fontFamily: 'gamefont', fontSize: 96, fill: 0xffffff, align: 'center',
    });
    this.addChild(this.title);
    this.title.anchor = { x: 0.5, y: 0.5 };
    this.title.x = config.stage.width / 2;
    this.title.y = 160;// config.stage.height / 2;


    this.text = new PIXI.Text('Your score is x', {
      fontFamily: 'gamefont', fontSize: 36, fill: 0xffffff, align: 'center',
    });
    this.addChild(this.text);
    this.text.anchor = { x: 0.5, y: 0.5 };
    this.text.x = config.stage.width / 2;
    this.text.y = 280;// config.stage.height / 2;

    this.restart = new PIXI.Sprite(new PIXI.Texture(new PIXI.BaseTexture(reload)));
    this.addChild(this.restart);
    this.restart.anchor = { x: 0.5, y: 0.5 };
    this.restart.x = config.stage.width / 2;
    this.restart.y = 400;

    this.restart.interactive = true;
    this.restart.buttonMode = true;
    // this.restart.click = () => {
    //   this.app.restart();
    // };

    this.restart.on('pointerdown', () => {
      this.app.restart();
    });
  }

  update() {
    this.text.text = `Your score was ${Math.floor(this.app.offset)}\n press replay to try again`;

    if (this.app.state === PlayerState.END) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }
}
