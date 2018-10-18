// @flow
import * as PIXI from 'pixi.js';

import config from './config';

import Player from './Player';
import Objects from './Objects';
import Background from './Background';
import Score from './Score';
import Intro from './Intro';
import Outro from './Outro';
import CricketLogo from './CricketLogo';

export const PlayerState = {
  WAIT: 'wait',
  RUN: 'run',
  JUMP: 'jump',
  END: 'end',
};

function setSize() {
  const scale = window.innerWidth / config.stage.width;
  document.querySelector('meta[name="viewport"]').setAttribute('content', `width=${config.stage.width}, initial-scale=${scale}`);
}

class Game extends PIXI.Application {
  state = PlayerState.WAIT;

  offset = 0;

  offsetBest = 0;

  offsetDelta = 0;

  constructor(container) {
    super({
      width: config.stage.width,
      height: config.stage.height,
      transparent: true,
    });

    this.objects = new Objects(this);
    this.player = new Player(this);

    container.appendChild(this.view);
    this.stage.addChild(new Background(this));
    this.stage.addChild(this.objects);
    this.stage.addChild(this.player);
    this.stage.addChild(new Score(this));
    this.stage.addChild(new Intro(this));
    this.stage.addChild(new Outro(this));
    this.stage.addChild(new CricketLogo());
    this.ticker.add(this.update, this);
    setSize();
    // window.addEventListener('resize', this.setSize);
  }


  update(delta) {
    this.offsetBest = Math.max(this.offset, this.offsetBest);
    this.recurseUpdate(this.stage, delta);
  }

  recurseUpdate(node, delta) {
    if (node.update) {
      node.update(delta);
    }
    node.children.forEach((child) => {
      this.recurseUpdate(child, delta);
    });
  }

  restart() {
    this.offset = 0;
    this.offsetDelta = 0;
    this.objects.children.forEach(c => this.objects.removeChild(c));
    this.state = PlayerState.WAIT;
    this.player.init();
  }
}

export default Game;
