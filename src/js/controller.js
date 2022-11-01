// import * as model from "./model.js";
// import calcGridView from "./views/calcGridView.js";
import toggleThemeView from "./views/toggleThemeView.js";

// const controlGridCells = () => {
//   calcGridView.renderGridCells(model.state.grid);
//   calcGridView.handleTest();
// };
// controlGridCells();

const controlTheme = () => {
  toggleThemeView.toggleTheme();
};

const init = () => {
  toggleThemeView.addHandlerRender(controlTheme);
};

init();
