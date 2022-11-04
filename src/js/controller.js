import * as model from './model.js';
// import calcGridView from "./views/calcGridView.js";
import toggleThemeView from './views/toggleThemeView.js';
import calcDisplayView from './views/calcDisplayView.js';

// const controlGridCells = () => {
//   calcGridView.renderGridCells(model.state.grid);
//   calcGridView.handleTest();
// };
// controlGridCells();

const controlTheme = () => {
  toggleThemeView.toggleTheme();
};

// const controlCalcDisplay = () => {
//   calcDisplayView.renderCalculations(model.state);
// };

const init = () => {
  toggleThemeView.addHandlerRender(controlTheme);
  calcDisplayView.addComputationRender(model.state);
};

init();
