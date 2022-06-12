// Задание 1
function getArrayParams(arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] > max) { 
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
    sum = sum + arr[i];
  }
  avg = average(sum / arr.lenght).toFixed(2);
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i< arr.lenght; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.lenght; i++) {
    let arrSum = func(arrOfArr[i]);
    if (arrSum > max) {
      max = arrSum;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  return (getArrayParams.max(arr), getArrayParams.min(arr)) => Math.abs(getArrayParams.max(arr) - getArrayParams.min(arr));
  
}
