import * as PIXI from 'pixi.js'

class Game extends PIXI.Application{
    constructor(container){
        super();
        container.appendChild(this.view);
    }
}

export default Game;