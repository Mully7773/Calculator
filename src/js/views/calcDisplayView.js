class CalcDisplayView {
  _state;
  _numBtns = document.querySelectorAll('.numBtn');
  _operatorBtns = document.querySelectorAll('.operator');
  _resetBtn = document.querySelector('.resetBtn');
  _delBtn = document.querySelector('.delBtn');
  _decimalBtn = document.querySelector('.decimalBtn');
  _equalsBtn = document.querySelector('.equalsBtn');
  _calcDisplay = document.querySelector('.calc-display');
  _calcDisplayValue = document.querySelector('.calc-numbers');
  _calcInputContainer = document.querySelector('.calc-input-container');
  _calcOn = true;

  findSum(...args) {
    const arr = [];
    arr.push(...args);
    // console.log(arr);
    const sum = arr.reduce((acc, cur) => {
      const equation = acc + cur;
      return Math.round(equation * 100) / 100;
    });
    return sum;
  }

  findDifference(...args) {
    const arr = [];
    arr.push(...args);
    // console.log(arr);
    const sum = arr.reduce((acc, cur) => {
      const equation = acc - cur;
      return Math.round(equation * 100) / 100;
    });
    return sum;
  }

  findProduct(...args) {
    const arr = [];
    arr.push(...args);
    // console.log(arr);
    const sum = arr.reduce((acc, cur) => {
      const equation = acc * cur;
      return Math.round(equation * 100) / 100;
    });
    return sum;
  }

  findQuotient(...args) {
    const arr = [];
    arr.push(...args);
    // console.log(arr);
    const sum = arr.reduce((acc, cur) => {
      if (acc === 0 || cur === 0) {
        // This could be improved...prevent tabbed inputs, remove eventListeners, etc. Perhaps change key divs to buttons and toggle disable attribute
        this._state.calcOn = false;
        if (!this._state.calcOn) {
          this._numBtns.forEach(btn => {
            btn.classList.add('disable-keys');
          });
          this._operatorBtns.forEach(btn => {
            btn.classList.add('disable-keys');
          });
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        }
        console.log(this._state);
        this._calcDisplayValue.style.fontSize = '2.2rem';
        return `Can't divide by '0'. Resetting...`;
      }
      const equation = acc / cur;
      return Math.round(equation * 100) / 100;
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
    this._numBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this._operatorBtns.forEach(btn => {
          // Like pattern for dividing by zero, this is not a perfect solution - keyboard events are still accessible...however, it prevents preemptive operand selection bugs - keep '=' disabled until one of the other operands are selected
          if (btn.dataset.id !== '=') {
            btn.classList.remove('disable-keys');
          }
        });
        this._delBtn.classList.remove('disable-keys');

        const calcBtnValue = btn.textContent.trim();
        this._state.lastClicked.push(calcBtnValue);

        this._state.displayText.push(calcBtnValue);

        const joined = this._state.displayText.join('');
        this._calcDisplayValue.textContent = joined;

        console.log(this._state);
      });
    });

    this._operatorBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        this._operatorBtns.forEach(btn =>
          btn.classList.remove('active-operand')
        );
        e.target.classList.toggle('active-operand');

        // Prevent user from deleting solutions - disable button after clicking any operand
        this._delBtn.classList.add('disable-keys');
        const operatorBtnValue = btn.dataset.id.trim();

        this._state.lastClicked.push(operatorBtnValue);
        this._state.operand.push(operatorBtnValue);

        // Remove '=' from operand array
        const equals = this._state.operand.indexOf('=');
        if (equals > -1) {
          this._state.operand.splice(equals, 1);
        }

        // Prevent early access to equals btn (e.g. '2', '=')
        if (this._state.operand.length >= 1) {
          this._equalsBtn.classList.remove('disable-keys');
        }

        const displayNumber = +this._state.displayText.join('');

        // Conditional necessary for multiplying by zero and preventing displayNumber from becoming 0 after consecutively selecting two operands (e.g. '=' => 'x') - if the preceding equation was 2 * 3, for example, selecting 'x' after '=' would result in the displayText being set to '0' because result was multiplied by zero and zero was saved from display = [] (reset)
        if (
          this._state.lastClicked[this._state.lastClicked.length - 2] !== '0' &&
          displayNumber === 0
        ) {
          return;
        }

        this._state.leftOperand.push(displayNumber);
        console.log(displayNumber);

        if (this._state.leftOperand.length > 1) {
          this._state.rightOperand.push(+this._state.displayText.join(''));
        }
        if (this._state.leftOperand.length > 1) {
          this._state.leftOperand.pop();
        }

        if (
          this._state.operand.length > 1 &&
          this._state.lastClicked[this._state.lastClicked.length - 1] !== '='
        ) {
          const chainSolution = this.compute(
            this._state.operand[this._state.operand.length - 2],
            this._state.leftOperand[0],
            this._state.rightOperand[this._state.rightOperand.length - 1]
          );
          this._calcDisplayValue.textContent = chainSolution;
          this._state.leftOperand = [chainSolution];
        }

        if (
          this._state.lastClicked[this._state.lastClicked.length - 1] === '='
        ) {
          const rightOperand = +this._state.displayText.join('');
          console.log('rightOperand', rightOperand);
          const solution = this.compute(
            this._state.operand[this._state.operand.length - 1],
            this._state.leftOperand[0],
            this._state.rightOperand[this._state.rightOperand.length - 1]
          );
          this._calcDisplayValue.textContent = solution;
          this._state.leftOperand = [solution];
          this._state.solutions.push(solution);

          console.log(this._state);
        }

        this._state.displayText = [];
      });
    });
    this._resetBtn.addEventListener('click', () => {
      console.log(this._state);
      // Fresh state
      this._state.displayText = [];
      this._state.equals = [];
      this._state.lastClicked = [];
      this._state.leftOperand = [];
      this._state.operand = [];
      this._state.rightOperand = [];
      this._state.solutions = [];
      this._calcDisplayValue.innerHTML = ``;
      this._calcDisplayValue.innerHTML = `&nbsp;`;
      // Re-disable operand keys and remove active class from them
      this._operatorBtns.forEach(btn => {
        btn.classList.add('disable-keys');
        btn.classList.remove('active-operand');
      });
    });
    this._delBtn.addEventListener('click', () => {
      console.log('test');
      console.log(this._calcDisplay.textContent);
      this._state.displayText.pop();
      this._state.lastClicked.pop();
      const newStr = this._calcDisplayValue.textContent.trim().slice(0, -1);
      console.log(newStr);
      this._calcDisplayValue.textContent = newStr;
      if (newStr === '') {
        this._calcDisplayValue.innerHTML = ``;
        this._calcDisplayValue.innerHTML = `&nbsp;`;
      }
    });

    // Prevents multiple decimal points
    this._decimalBtn.addEventListener('click', () => {
      this._delBtn.classList.remove('disable-keys');
      const decimal = this._decimalBtn.textContent.trim();
      console.log(decimal);
      console.log(this._state);
      this._state.lastClicked.push(decimal);
      if (!this._state.displayText.includes(decimal)) {
        this._state.displayText.push(decimal);
        const joined = this._state.displayText.join('');
        this._calcDisplayValue.textContent = joined;
      }
    });
  }
}

export default new CalcDisplayView();
