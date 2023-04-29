let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

function getMax(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[sorted.length - 1]
}

function getMin(arr) {
  let sorted = arr.sort((a, b) => a - b)
  return sorted[0]
}

class Process {
  static toJSON (arg1){
    let jsonString = JSON.stringify(arg1);
    return jsonString;
  }

  static fromJSON (jsonString){
    let arg1 = JSON.parse(jsonString);
    return arg1;
  }
}

// let result = Process.toJSON(dataArr);
// console.log(result);

// let answer = Process.fromJSON(result);
// console.log(answer);

function converter(data) {
  let parsed= Process.fromJSON(data);
  console.log(parsed);
}

function callFunc1(arg2, callback1) {
  let str=Process.toJSON(arg2);
  callback1(str);
}

callFunc1(dataArr, converter);

function double(el) {
  return el * 2;
}

function doubler(arg3) {
  let parsed= Process.fromJSON(arg3);
  let doubled= parsed.map(double);
  console.log(doubled);
}

function onlyEven(arg4) {
  let parsed= Process.fromJSON(arg4);
  let result= parsed.filter((elem) => elem % 2 === 0);
  console.log(result);
}

callFunc1(dataArr, doubler);
callFunc1(dataArr, onlyEven);

function callFunc2(data, cb) {
  let str= Process.toJSON(data);
  setTimeout(() => {
    cb(str)
  }, 2000);
}

function convertJ2(arg) {
  console.log(arg);
  console.log(typeof arg);
}

callFunc2(dataArr, convertJ2);









