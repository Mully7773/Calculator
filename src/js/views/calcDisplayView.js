class CalcDisplayView {
  _numBtns = document.querySelectorAll('.numBtn');
  _operatorBtns = document.querySelectorAll('.operator');
  _calcDisplay = document.querySelector('.calc-display');
  _calcDisplayValue = document.querySelector('.calc-numbers');
  _calcInputContainer = document.querySelector('.calc-input-container');
  _arr = {
    textValue: [],
    numbers: [],
    operators: [],
  };

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

  compute(operator, num1, num2) {
    if (operator === '+') {
      return this.findSum(num1, num2);
    }
    if (operator === '-') {
      return this.findDifference(num1, num2);
    }
    if (operator === '*') {
      return this.findProduct(num1, num2);
    }
    if (operator === '/') {
      return this.findQuotient(num1, num2);
    }
  }
  addComputationRender() {
    this._numBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!btn) return;
        const calcBtnValue = +btn.textContent;
        console.log(calcBtnValue);
        this._calcDisplayValue.insertAdjacentHTML('beforeend', calcBtnValue);
        this._arr.textValue.push(this._calcDisplayValue);
        const displayText = this._arr.textValue[0].outerText;
        const displayNumber = +displayText;
        console.log(displayNumber);
        this._arr.numbers.push(displayNumber);
        console.log(this._arr);
      });
    });

    this._operatorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!btn) return;
        const operatorBtnValue = btn.dataset.id.trim();
        console.log(operatorBtnValue);
        this._arr.operators.push(operatorBtnValue);
        console.log(this._arr);
      });
    });

    // this._calcInputContainer.addEventListener('click', e => {

    // const calcBtn = e.target.closest('.calcBtn');
    // const operatorBtn = e.target.closest('.operator');

    // if (!calcBtn) return;

    // const calcBtnValue = calcBtn.textContent;
    // this._arr.push(calcBtnValue);
    // console.log(this._arr);
    // const split = this._arr.toString();
    // console.log(split);
    // const fullString = split.replaceAll(',', '');
    // const fullNum = +fullString;
    // console.log(fullNum);
    // if (calcBtnValue === '+') {
    //   const equation = this.compute('+', fullNum);
    //   console.log(equation);
    // }
    // const markup = `<h2 class='calc-numbers'>${calcBtnValue}</h2>`;
    // this._calcDisplay.insertAdjacentHTML('beforeend', markup);
    // });
  }
}

export default new CalcDisplayView();
