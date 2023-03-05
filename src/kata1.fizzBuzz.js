const fizzBuzz = (number) => {
    const isDivisibleBy3 = (number % 3) === 0
    const isDivisibleBy5 = (number % 5) === 0

    if (isDivisibleBy5 && isDivisibleBy3) {
        return 'FizzBuzz'
    }

    if (isDivisibleBy5) {
        return 'Buzz'
    }

    if (isDivisibleBy3){
        return 'Fizz'
    }

    return number
};
module.exports = fizzBuzz;
