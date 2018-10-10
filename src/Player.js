import * as PIXI from 'pixi.js';

import config from './config';

// import standing from './assets/player.png';

import walk1 from './assets/Shane_Po1.png';
import walk2 from './assets/Shane_Po2.png';
import walk3 from './assets/Shane_Po3.png';

import jump from './assets/ShaneJump.png';

const States = {
  WAIT: 'wait',
  RUN: 'run',
  JUMP: 'jump',
};


const walktextures = [walk1, walk2, walk3]
  .map(i => new PIXI.Texture(new PIXI.BaseTexture(i)));
const jumptextures = [jump]
  .map(i => new PIXI.Texture(new PIXI.BaseTexture(i)));


export default class Player extends PIXI.extras.AnimatedSprite {
    h=0;

    state = States.WAIT;

    constructor() {
      // const baseTexture = new PIXI.BaseTexture(standing);
      // const texture = new PIXI.Texture(baseTexture);
      super(walktextures, false);
      this.width = 100;
      this.height = 200;
      //   this.tint = 0;
      this.anchor = { x: 0.5, y: 1 };
      this.x = 100;
      this.y = config.ground;

      document.addEventListener('mousedown', () => {
        if (this.state !== States.JUMP) {
          this.state = States.JUMP;
          this.h = -20;
          this.textures = jumptextures;
        }
        // this.textures = walktextures;
      });
      // this.gotoAndPlay(1)
      this.animationSpeed = 0.5;
      this.play();
    }

    update(delta) {
      super.update(delta);
      if (this.state === States.JUMP) {
        this.h += delta;
        this.y += this.h;
        if (this.y > config.ground) {
          this.state = States.RUN;
          this.y = config.ground;
          this.textures = walktextures;
          // this.gotoAndPlay(1);
          this.h = 0;
        }
      }
    }
}
