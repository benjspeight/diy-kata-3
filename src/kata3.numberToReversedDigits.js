const numberToReversedDigits = (number) => {
const numArray = number.toString().split("").reverse().map(Number);
  return numArray;
};

module.exports = numberToReversedDigits;
