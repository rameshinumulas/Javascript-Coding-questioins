const readLine = require('readline');

const useReadLine = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
})

const isPalindrome = (string) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const clearStr = string
    .toLowerCase()
    .split('')
    .filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9'))
    .join('')
    console.log(clearStr.split('').reverse().join(''))
    return clearStr === clearStr.split('').reverse().join('');
}


// useReadLine.question('enter string:', (inputString) => {
//     if (isPalindrome(inputString)) {
//         console.log('this is palndrome ', inputString);
//     } else {
//         console.log('not palindrome', inputString)
//     }
// })

// Check given string is palindrome or not
const inputString = 'anana';
if (isPalindrome(inputString)) {
    console.log('this is palndrome ', inputString);
} else {
    console.log('not palindrome', inputString)
}