import * as PIXI from 'pixi.js';

import config from './config';

// import standing from './assets/player.png';

import walk1 from './assets/Shane_Po1.png';
import walk2 from './assets/Shane_Po2.png';
import walk3 from './assets/Shane_Po3.png';

import jump from './assets/ShaneJump.png';

import fall1 from './assets/ShaneFallOne.png';
import fall2 from './assets/ShaneFallTwo.png';

import { PlayerState } from './Game';

import Rect from './Rect';

// const States = {
//   WAIT: 'wait',
//   RUN: 'run',
//   JUMP: 'jump',
// };


const walktextures = [walk1, walk2, walk3]
  .map(i => new PIXI.Texture(new PIXI.BaseTexture(i)));
const jumptextures = [jump]
  .map(i => new PIXI.Texture(new PIXI.BaseTexture(i)));
const falltextures = [fall1, fall2]
  .map(i => new PIXI.Texture(new PIXI.BaseTexture(i)));


export default class Player extends PIXI.extras.AnimatedSprite {
    h=0;

    // state = PlayerState.WAIT;

    constructor(app) {
      // const baseTexture = new PIXI.BaseTexture(standing);
      // const texture = new PIXI.Texture(baseTexture);
      super([walktextures[0]], false);
      this.app = app;
      this.width = config.player.width;
      this.height = config.player.height;
      //   this.tint = 0;
      this.anchor = { x: 0.5, y: 1 };
      this.x = 100;
      this.y = config.ground;

      document.addEventListener('mousedown', () => {
        if (this.app.state !== PlayerState.JUMP) {
          this.app.state = PlayerState.JUMP;
          this.h = -20;
          this.textures = jumptextures;
        }
        // this.textures = walktextures;
      });
      // this.gotoAndPlay(1)
      this.animationSpeed = config.player.animationSpeed;
      this.play();
    }

    update(delta) {
      super.update(delta);
      if (this.app.state === PlayerState.RUN || this.app.state === PlayerState.JUMP) {
        const scrollspeed = config.scrollSpeed + Math.floor(this.app.offset / 5000);

        this.app.offsetDelta = delta * scrollspeed;
        this.app.offset += this.app.offsetDelta;
      } else {
        this.app.offsetDelta = 0;
      }
      if (this.app.state === PlayerState.JUMP || this.app.state === PlayerState.END) {
        this.h += delta;
        this.y += this.h;
        if (this.y > config.ground) {
          this.h = 0;
          this.y = config.ground;
          if (this.app.state === PlayerState.JUMP) {
            this.app.state = PlayerState.RUN;
            this.textures = walktextures;
          }
          // this.gotoAndPlay(1);
        }
      }

      // collisions
      if (this.app.state !== PlayerState.END) {
        if (this.collides()) {
          this.app.state = PlayerState.END;
          this.textures = falltextures;
        }
      }
    }

    collides() {
      const playerRect = Rect.fromSprite(this);
      const obs = this.app.objects.children;
      if (obs.length > 0) {
        // todo loop over all children not just first
        const obRect = Rect.fromSprite(obs[0]);
        if (obRect.overlaps(playerRect)) {
          return true;
        }
      }
      return false;
    }
}
