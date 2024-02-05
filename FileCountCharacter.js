const fs = require('fs');

const getCountOfChars = (usefilePath) => {
    const content = fs.readFileSync(filePath, 'utf-8');
    let countChar = {};
    for (const char of content) {
        countChar[char] = (countChar[char] || 0) + 1
    }
    let mostChar;
    let charCount = 0;
    for (const useChar in countChar) {
        if (countChar[useChar] > charCount) {
            mostChar = useChar;
            charCount = countChar[useChar];
        }
    }
    return { mostChar, charCount }

}
// count the most occurring character in a file using Node.js. Here's an example code:
const filePath = 'useThistest.txt';
console.log(getCountOfChars(filePath));