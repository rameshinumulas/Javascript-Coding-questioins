// Factorial of a positive integer (number)
// is the sum of multiplication of all the integers smaller than that positive integer.
// For example, factorial of 5 is 5 * 4 * 3 * 2 * 1 which equals to 120
const getFactorial = (givenNum) => {
    if (givenNum === 0) {
        return 1;
    }
    console.log(givenNum, 'hello')
    return givenNum * getFactorial(givenNum - 1);
}

// factorial of given number
const givenNum = 5;
const result = getFactorial(givenNum);
console.log(result)