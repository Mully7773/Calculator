class ToggleThemeView {
  _toggleSwitches = document.querySelectorAll('.btn');
  _toggleSwitch = document.querySelector('.btn');
  _body = document.querySelector('body');
  _calcDisplay = document.querySelector('.calc-display');
  _calcInput = document.querySelector('.calc-input-container');
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
          this._body.classList.add('body-theme-two');
          this._calcDisplay.classList.add('calc-display-theme-two');
          this._calcInput.classList.add('calc-input-theme-two');
          this._calcNumbers.classList.add('calc-numbers-theme-two');
          this._toggleSwitch.classList.add('toggle-switches-theme-two');
          this._equalsBtn.classList.add('equals-btn-theme-two');
          this._resetBtn.classList.add('reset-btn-theme-two');
          this._delBtn.classList.add('delete-btn-theme-two');
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
