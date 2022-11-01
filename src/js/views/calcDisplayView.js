class CalcDisplayView {
  _calcDisplay = document.querySelector('.calc-display');
  _calcDisplayValue = document.querySelector('.calc-numbers');
  _calcInputContainer = document.querySelector('.calc-input-container');

  compute() {}
  addComputationRender() {
    this._calcInputContainer.addEventListener('click', e => {
      const calcBtn = e.target.closest('.calcBtn');
      //   if (calcBtn.dataset.id === 'reset') {
      //     this._calcDisplay.innerHTML = '';
      //   }
      if (!calcBtn) return;

      const calcBtnValue = +calcBtn.dataset.id;
      //   const trimmedValue = calcBtnValue.trim();
      //   console.log(trimmedValue);
      const markup = `<h2 class='calc-numbers'>${calcBtnValue}</h2>`;
      this._calcDisplay.insertAdjacentHTML('beforeend', markup);
    });
  }
}

export default new CalcDisplayView();
