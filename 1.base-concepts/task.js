"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  if (a === 0) {
    arr[0] = -c / b;
    return arr;
  }

  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant > 0) {
    arr[0] = parseInt((( -b + Math.sqrt(discriminant)) / (2 * a)).toFixed);
    arr[1] = parseInt((( -b + Math.sqrt(discriminant)) / (2 * a)).toFixed);
  }
  else if (discriminant === 0) {
    arr[0] = -b / (2 * a);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
