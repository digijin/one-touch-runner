// @flow
import * as PIXI from 'pixi.js';

import Player from './Player';

class Game extends PIXI.Application {
  constructor(container) {
    super();
    container.appendChild(this.view);
    this.stage.addChild(new Player());
  }
}

export default Game;
