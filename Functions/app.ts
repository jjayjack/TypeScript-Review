function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}
printResult(add(5, 12));

// let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(5, 8));
