// import * as PIXI from 'pixi.js';

module.exports = function textureLoader(input) {
  // return new PIXI.Texture(new PIXI.BaseTexture(input));
  // let output = "import * as PIXI from 'pixi.js';";
  output = input;
  output += ';module.exports = new PIXI.Texture(new PIXI.BaseTexture(module.exports));';
  return output;
};
