function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}
// Advantage TS knows what the result will be and we are able to immediately manipulate what we want out of the function without having to worry about type
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(5, 8));
addAndHandle(10, 20, (result) => {
  console.log(result);
});
