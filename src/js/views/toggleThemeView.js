class ToggleThemeView {
  _toggleSwitches = document.querySelectorAll('.btn');
  _body = document.querySelector('body');
  _triToggleEl = document.querySelector('.tri-toggle');
  _calcDisplay = document.querySelector('.calc-display');
  _calcInput = document.querySelector('.calc-input-container');
  _calcBtns = document.querySelectorAll('.calcBtn');
  _calcNumbers = document.querySelector('.calc-numbers');
  _equalsBtn = document.querySelector('.equalsBtn');
  _resetBtn = document.querySelector('.resetBtn');
  _delBtn = document.querySelector('.delBtn');
  addHandlerRender(handler) {
    const arr = [...this._toggleSwitches];
    console.log(arr);
    arr.forEach((el, index) => {
      el.addEventListener('click', () => {
        el.style.opacity = '1';
        if (el.dataset.id === 'theme1') {
          this._body.className = 'body-theme-one';

          this._triToggleEl.classList.remove('tri-toggle-theme-two');
          this._triToggleEl.classList.remove('tri-toggle-theme-three');
          this._triToggleEl.classList.add('tri-toggle-theme-one');

          this._toggleSwitches.forEach(el => {
            el.classList.remove('btn-theme-two');
            el.classList.remove('btn-theme-three');
            el.classList.add('btn-theme-one');
          });

          this._calcDisplay.classList.remove('calc-display-theme-two');
          this._calcDisplay.classList.remove('calc-display-theme-three');
          this._calcDisplay.classList.add('calc-display-theme-one');

          this._calcInput.classList.remove('calc-input-container-theme-two');
          this._calcInput.classList.remove('calc-input-container-theme-three');
          this._calcInput.classList.add('calc-input-container-theme-one');

          this._calcNumbers.classList.remove('calc-numbers-theme-two');
          this._calcNumbers.classList.remove('calc-numbers-theme-three');
          this._calcNumbers.classList.add('calc-numbers-theme-one');

          this._calcBtns.forEach(el => {
            el.classList.remove('calcBtn-theme-two');
            el.classList.remove('calcBtn-theme-three');
            el.classList.add('calcBtn-theme-one');
          });

          this._resetBtn.classList.remove('resetBtn-theme-two');
          this._resetBtn.classList.remove('resetBtn-theme-three');
          this._resetBtn.classList.add('resetBtn-theme-one');

          this._delBtn.classList.remove('delBtn-theme-two');
          this._delBtn.classList.remove('delBtn-theme-three');
          this._delBtn.classList.add('delBtn-theme-one');

          this._equalsBtn.classList.remove('equalsBtn-theme-two');
          this._equalsBtn.classList.remove('equalsBtn-theme-three');
          this._equalsBtn.classList.add('equalsBtn-theme-one');
        }
        if (el.dataset.id === 'theme2') {
          this._body.className = 'body-theme-two';

          this._triToggleEl.classList.remove('tri-toggle-theme-one');
          this._triToggleEl.classList.remove('tri-toggle-theme-three');
          this._triToggleEl.classList.add('tri-toggle-theme-two');

          this._toggleSwitches.forEach(el => {
            el.classList.remove('btn-theme-one');
            el.classList.remove('btn-theme-three');
            el.classList.add('btn-theme-two');
          });

          this._calcDisplay.classList.remove('calc-display-theme-one');
          this._calcDisplay.classList.remove('calc-display-theme-three');
          this._calcDisplay.classList.add('calc-display-theme-two');

          this._calcNumbers.classList.remove('calc-numbers-theme-one');
          this._calcNumbers.classList.remove('calc-numbers-theme-three');
          this._calcNumbers.classList.add('calc-numbers-theme-two');

          this._calcInput.classList.remove('calc-input-container-theme-one');
          this._calcInput.classList.remove('calc-input-container-theme-three');
          this._calcInput.classList.add('calc-input-container-theme-two');

          this._calcBtns.forEach(el => {
            el.classList.remove('calcBtn-theme-one');
            el.classList.remove('calcBtn-theme-three');
            el.classList.add('calcBtn-theme-two');
          });

          this._resetBtn.classList.remove('resetBtn-theme-one');
          this._resetBtn.classList.remove('resetBtn-theme-three');
          this._resetBtn.classList.add('resetBtn-theme-two');

          this._delBtn.classList.remove('delBtn-theme-one');
          this._delBtn.classList.remove('delBtn-theme-three');
          this._delBtn.classList.add('delBtn-theme-two');

          this._equalsBtn.classList.remove('equalsBtn-theme-one');
          this._equalsBtn.classList.remove('equalsBtn-theme-three');
          this._equalsBtn.classList.add('equalsBtn-theme-two');
        }

        if (el.dataset.id === 'theme3') {
          this._body.className = 'body-theme-three';

          this._triToggleEl.classList.remove('tri-toggle-theme-one');
          this._triToggleEl.classList.remove('tri-toggle-theme-two');
          this._triToggleEl.classList.add('tri-toggle-theme-three');

          this._toggleSwitches.forEach(el => {
            el.classList.remove('btn-theme-one');
            el.classList.remove('btn-theme-two');
            el.classList.add('btn-theme-three');
          });

          this._calcDisplay.classList.remove('calc-display-theme-one');
          this._calcDisplay.classList.remove('calc-display-theme-two');
          this._calcDisplay.classList.add('calc-display-theme-three');

          this._calcNumbers.classList.remove('calc-numbers-theme-one');
          this._calcNumbers.classList.remove('calc-numbers-theme-two');
          this._calcNumbers.classList.add('calc-numbers-theme-three');

          this._calcInput.classList.remove('calc-input-container-theme-one');
          this._calcInput.classList.remove('calc-input-container-theme-two');
          this._calcInput.classList.add('calc-input-container-theme-three');

          this._calcBtns.forEach(el => {
            el.classList.remove('calcBtn-theme-one');
            el.classList.remove('calcBtn-theme-two');
            el.classList.add('calcBtn-theme-three');
          });

          this._resetBtn.classList.remove('resetBtn-theme-one');
          this._resetBtn.classList.remove('resetBtn-theme-two');
          this._resetBtn.classList.add('resetBtn-theme-three');

          this._delBtn.classList.remove('delBtn-theme-one');
          this._delBtn.classList.remove('delBtn-theme-two');
          this._delBtn.classList.add('delBtn-theme-three');

          this._equalsBtn.classList.remove('equalsBtn-theme-one');
          this._equalsBtn.classList.remove('equalsBtn-theme-two');
          this._equalsBtn.classList.add('equalsBtn-theme-three');
        }
        arr
          .filter(function (item) {
            return item !== el;
          })
          .forEach(item => {
            item.style.opacity = '0';
          });
      });
    });
  }
  setTheme() {}
}

export default new ToggleThemeView();
