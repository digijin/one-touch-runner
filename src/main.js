import webfontloader from 'webfontloader';
import Game from './Game';

// funny business to ensure font is ready to go before starting game
webfontloader.load({
  custom: {
    families: ['gamefont'],
  },
  active() {
    window.game = new Game(document.getElementById('container'));
  },
});

require('./style.scss');
