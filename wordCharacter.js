const getCharcterCount = (input) => {
    let charCountObj = {};
    for (const char of input){
        charCountObj[char] = (charCountObj[char] || 0) + 1;
    }
    return { charCountObj }
}

// Write program to count characters in word
const inputString = 'hello';
console.log(getCharcterCount(inputString));  