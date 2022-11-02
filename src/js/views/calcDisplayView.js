class CalcDisplayView {
  _calcDisplay = document.querySelector('.calc-display');
  _calcDisplayValue = document.querySelector('.calc-numbers');
  _calcInputContainer = document.querySelector('.calc-input-container');
  _arr = [];

  findSum(...args) {
    const arr = [];
    arr.push(...args);
    console.log(arr);
    const sum = arr.reduce((acc, cur) => {
      return acc + cur;
    });
    return sum;
  }

  findDifference(...args) {
    const arr = [];
    arr.push(...args);
    console.log(arr);
    const sum = arr.reduce((acc, cur) => {
      return acc - cur;
    });
    return sum;
  }

  findProduct(...args) {
    const arr = [];
    arr.push(...args);
    console.log(arr);
    const sum = arr.reduce((acc, cur) => {
      return acc * cur;
    });
    return sum;
  }

  findQuotient(...args) {
    const arr = [];
    arr.push(...args);
    console.log(arr);
    const sum = arr.reduce((acc, cur) => {
      return acc / cur;
    });
    return sum;
  }

  compute(operator, num1, num2) {}
  addComputationRender() {
    this._calcInputContainer.addEventListener('click', e => {
      const calcBtn = e.target.closest('.calcBtn');
      console.log(calcBtn);
      //   if (calcBtn.dataset.id === 'reset') {
      //     this._calcDisplay.innerHTML = '';
      //   }
      if (!calcBtn) return;
      const calcBtnValue = calcBtn.textContent;
      //   if (calcBtnValue.dataset.id === 'reset') {
      //     console.log('reset');
      //   }
      //   const trimmedValue = calcBtnValue.trim();
      //   console.log(trimmedValue);
      //   console.log(calcBtnValue);
      this._arr.push(calcBtnValue);
      console.log(this._arr);
      const markup = `<h2 class='calc-numbers'>${calcBtnValue}</h2>`;
      this._calcDisplay.insertAdjacentHTML('beforeend', markup);
    });
  }
}

export default new CalcDisplayView();
