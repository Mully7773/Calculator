class CalcDisplayView {
  _state;
  _numBtns = document.querySelectorAll('.numBtn');
  _operatorBtns = document.querySelectorAll('.operator');
  _calcDisplay = document.querySelector('.calc-display');
  _calcDisplayValue = document.querySelector('.calc-numbers');
  _calcInputContainer = document.querySelector('.calc-input-container');
  _num;
  _arr = {
    number: 0,
    textValue: [],
    numbers: [],
    operators: [],
    solutions: [],
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

  compute(operator, ...nums) {
    if (operator === '+') {
      return this.findSum(...nums);
    }
    if (operator === '-') {
      return this.findDifference(...nums);
    }
    if (operator === '*') {
      return this.findProduct(...nums);
    }
    if (operator === '/') {
      return this.findQuotient(...nums);
    }
  }

  addComputationRender(state) {
    this._state = state;
    // this._calcDisplayValue.innerHTML = this._state.initial;
    // console.log(this._state);
    this._numBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // RETRIEVE NUMBER VIA DISPLAY
        // if (!btn) return;
        // this._calcDisplayValue.innerHTML = '';
        // !const calcBtnValue = +btn.textContent;
        // console.log(calcBtnValue);
        // this._calcDisplayValue.value = calcBtnValue;
        //   !this._calcDisplayValue.insertAdjacentHTML('beforeend', calcBtnValue);
        // this._calcDisplayValue.innerHTML += calcBtnValue;
        // this._calcDisplayValue.innerHTML = calcBtnValue;
        // !this._state.lastClicked.push(calcBtnValue);

        // !console.log(this._calcDisplayValue.textContent);

        // !this._arr.textValue.push(this._calcDisplayValue);
        // this._state.leftOperand.push(this._calcDisplayValue);

        // !console.log(this._state);

        // RETRIEVE NUMBER VIA CLICKS
        const calcBtnValue = btn.textContent;
        //  console.log(this._arr);
        // this._arr.textValue.push(calcBtnValue);
        this._state.displayText.push(calcBtnValue);

        // const joined = this._arr.textValue.join('');
        const joined = this._state.displayText.join('');
        // this._calcDisplayValue.textContent = this._arr.textValue.join('');
        this._calcDisplayValue.textContent = joined;

        console.log(this._state);

        // const split = this._arr.textValue.toString();
        // const fullString = split.replaceAll(',', '');
        // const fullNum = +fullString;
        // console.log(fullNum);
        // this._state.equals.push(fullNum);
        // this._calcDisplayValue.textContent = this._state.equals.slice(-1);
        // console.log(this._state);

        // // this._arr.numbers.push(fullNum);
        // this._arr.number = fullNum;
        // // this._num = fullNum;
        // this._calcDisplayValue.innerHTML = fullNum;
      });
    });

    this._operatorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // if (!btn) return;
        const operatorBtnValue = btn.dataset.id.trim();
        console.log(operatorBtnValue);

        if (operatorBtnValue === '=') {
          this._state.equals.push(operatorBtnValue);
        }

        this._state.lastClicked.push(operatorBtnValue);
        this._state.operand.push(operatorBtnValue);

        // Remove '=' from operand array
        // const equals = this._state.operand.indexOf('=');
        // if (equals > -1) {
        //   this._state.operand.splice(equals, 1);
        // }
        // this._state.operand = [operatorBtnValue];

        this._state.leftOperand.push(+this._state.displayText.join(''));
        if (this._state.leftOperand.length > 1) {
          this._state.rightOperand.push(+this._state.displayText.join(''));
        }
        if (this._state.leftOperand.length > 1) {
          this._state.leftOperand.pop();
        }
        // if (this._state.rightOperand.length > 1) {
        //   this._state.rightOperand.pop();
        // }

        if (
          this._state.operand.length > 1 &&
          this._state.operand[this._state.operand.length - 1] !== '='
        ) {
          const chainSolution = this.compute(
            // operatorBtnValue,
            this._state.operand[this._state.operand.length - 2],
            // this._state.lastClicked[this._state.lastClicked.length - 2] === '='
            //   ? this._state.operand[this._state.operand.length - 3]
            //   : this._state.operand[this._state.operand.length - 2],
            // this._state.operand[0],
            this._state.leftOperand[0],
            this._state.rightOperand[this._state.rightOperand.length - 1]
          );
          this._calcDisplayValue.textContent = chainSolution;
          this._state.leftOperand = [chainSolution];
        }

        this._state.displayText = [];
        console.table(this._state);
        // this._calcDisplayValue.textContent = this._state.equals.slice(-1);

        // !const displayText = this._arr.textValue[0].outerText;
        // !const displayNumber = +displayText;
        // !console.log(displayNumber);
        // !this._arr.numbers.push(displayNumber);
        // !this._state.leftOperand.push(displayNumber);

        // !const [...number] = this._arr.numbers;
        // !console.log(number);

        // let displayNumber = this._arr.number;

        // this._calcDisplayValue.innerHTML = displayNumber;
        // this._calcDisplayValue.innerHTML = '&nbsp';
        //   this._arr.numbers[this._arr.numbers.length - 1];

        // const solution = this.compute(
        //   this._arr.operators[this._arr.operators.length - 1],
        //   this._arr.numbers[this._arr.numbers.length - 1]
        // );

        // console.log(solution);
        // this._calcDisplayValue.innerHTML = solution;
        // this._arr.numbers.push(solution);
        // this._arr.solutions.push(solution);

        // FIX EQUALS CONDITION

        // if (this._state.operand[this._state.operand.length - 1] === '=') {
        if (
          this._state.lastClicked[this._state.lastClicked.length - 1] === '='
        ) {
          const rightOperand = +this._state.displayText.join();
          console.log('rightOperand', rightOperand);
          const solution = this.compute(
            // this._state.operand[0],
            this._state.operand[this._state.operand.length - 2],
            this._state.leftOperand[0],
            // this._state.leftOperand[1]
            this._state.rightOperand[this._state.rightOperand.length - 1]
          );
          this._calcDisplayValue.textContent = solution;
          this._state.leftOperand = [solution];
          this._state.solutions.push(solution);
          console.log(this._state);
        }

        // if (operatorBtnValue === '=') {
        //   // const solution = this.compute(
        //   //   this._arr.operators[0],
        //   //   this._arr.numbers[0],
        //   //   this._arr.numbers[1]
        //   // );
        //   const solution = this.compute(
        //     this._arr.operators[0],
        //     this._arr.numbers[0],
        //     this._arr.numbers[this._arr.numbers.length - 1]
        //   );
        //   // const solution = this.compute(this._arr.operators[0], ...number);
        //   this._calcDisplayValue.innerHTML = solution;
        //   this._arr.numbers.push(solution);
        //   this._arr.solutions.push(solution);
        //   this._arr.numbers = this._arr.numbers.slice(-1);
        //   console.log(this._arr);
        // }
      });
    });
  }
}

export default new CalcDisplayView();
