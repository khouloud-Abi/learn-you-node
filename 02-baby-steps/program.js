const numbers = process.argv.splice(2);

function getSum(numbers) {
  return numbers.reduce((previousNumber, currentNumber) => {
    return Number(previousNumber) + Number(currentNumber);
  });
}

console.log(getSum(numbers));
