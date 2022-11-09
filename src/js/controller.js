import * as model from './model.js';
import toggleThemeView from './views/toggleThemeView.js';
import calcDisplayView from './views/calcDisplayView.js';

const controlTheme = () => {
  toggleThemeView.toggleTheme();
};

const init = () => {
  toggleThemeView.addHandlerRender(controlTheme);
  calcDisplayView.addComputationRender(model.state);
};

init();
