function rest(...args) {
  let sum = 0;

  for (const total of args) {
    sum += total;
  }
}
const result = rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function sum(initVal, ...rest) {
  let sum = 0;
  for (let number of rest) sum += number;
  return initVal + sum;
}

let x = sum(10, 5); // <-- output "15"

console.log(result);
