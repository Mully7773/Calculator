// 'use strict';

// // Variables:
// const numBtns = document.querySelectorAll('.numBtn');
// const operatorBtns = document.querySelectorAll('.operator');
// const calcDisplay = document.querySelector('.calc-display');
// const calcDisplayValue = document.querySelector('.calc-numbers');
// const calcInputContainer = document.querySelector('.calc-input-container');

// let num = [];
// let equateNum = [];
// let operators = [];
// let otherNum;

// const renderNumbers = () => {
//   numBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const btnText = btn.textContent;
//       num.push(btnText);
//       const split = num.toString();
//       const fullString = split.replaceAll(',', '');
//       const fullNum = +fullString;
//       console.log(fullNum);
//       console.log(num);
//       calcDisplayValue.innerHTML = fullNum;
//       otherNum = fullNum;
//     });
//   });
// };
// renderNumbers();

// const beginOperate = () => {
//   operatorBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//       const operatorBtnValue = btn.dataset.id;
//       operators.push(operatorBtnValue);
//       equateNum.push(otherNum);

//     });
//   });
// };

// beginOperate();
