class ToggleThemeView {
  _toggleSwitches = document.querySelectorAll('.btn');
  // _toggleSwitch = document.querySelectorAll('.btn');
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
        if (el.dataset.id === 'theme2') {
          this._body.classList.toggle('body-theme-two');
          this._calcDisplay.classList.toggle('calc-display-theme-two');
          this._calcInput.classList.toggle('calc-input-theme-two');
          this._calcNumbers.classList.toggle('calc-numbers-theme-two');
          // this._toggleSwitch.classList.toggle('toggle-switches-theme-two');
          this._equalsBtn.classList.toggle('equals-btn-theme-two');
          this._resetBtn.classList.toggle('reset-btn-theme-two');
          this._delBtn.classList.toggle('delete-btn-theme-two');
        }

        if (el.dataset.id === 'theme3') {
          this._body.classList.toggle('body-theme-three');
          this._triToggleEl.classList.toggle('tri-toggle-theme-three');
          this._calcDisplay.classList.toggle('calc-display-theme-three');
          this._calcInput.classList.toggle('calc-input-theme-three');
          this._calcBtns.forEach(btn => {
            btn.classList.toggle('calc-button-theme-three');
          });
          this._calcNumbers.classList.toggle('calc-numbers-theme-three');
          // this._toggleSwitch.classList.add('toggle-switches-theme-three');
          // this._toggleSwitch.forEach(btn => {
          //   btn.classList.add('toggle-switches-theme-three');
          // });
          this._equalsBtn.classList.toggle('equals-btn-theme-three');
          this._resetBtn.classList.toggle('reset-btn-theme-three');
          this._delBtn.classList.toggle('delete-btn-theme-three');
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
}

export default new ToggleThemeView();
