import { App } from './js/App';

var house = new App('bebra');

var refs = {
  app: document.querySelector('.app'),
  screen: document.querySelector('.screen-1'),
};

refs.app.addEventListener('click', function (e) {
  refs.screen.classList.add('display');
});
