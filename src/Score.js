import * as PIXI from 'pixi.js';

export default class Score extends PIXI.Container {
  constructor(app) {
    super();
    this.app = app;
    this.text = new PIXI.Text('Score: 0', {
      fontFamily: 'gamefont', fontSize: 24, fill: 0xff1010, align: 'center',
    });
    this.addChild(this.text);
  }

  update() {
    this.text.text = `Score: ${Math.floor(this.app.offset)}`;
  }
}
