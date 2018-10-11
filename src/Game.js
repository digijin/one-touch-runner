// @flow
import * as PIXI from 'pixi.js';

import Player from './Player';
import Objects from './Objects';
import Background from './Background';

export const PlayerState = {
  WAIT: 'wait',
  RUN: 'run',
  JUMP: 'jump',
};

class Game extends PIXI.Application {
  state = PlayerState.WAIT;

  offset = 0;

  offsetDelta = 0;

  constructor(container) {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
    });
    container.appendChild(this.view);
    this.stage.addChild(new Background(this));
    this.stage.addChild(new Objects(this));
    this.stage.addChild(new Player(this));
    this.ticker.add(this.update, this);
  }

  update(delta) {
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
}

export default Game;
