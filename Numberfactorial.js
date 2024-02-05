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