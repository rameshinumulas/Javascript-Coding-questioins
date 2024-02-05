
const getPreprocessedString = (st) => {
    // Insert a unique character (#) between each character and at the beginning and end
    return '#' + st.split('').join('#') + '#';
}
const getPalandromicString = (input) => {
    if (input.length <= 1) {
        return input;
    }
    // preprocess the string to handle even length palandrome;
    const processedString = getPreprocessedString(input);
    const nLength = processedString.length;
    const palandromeLenths = new Array(nLength).fill(0);

    let center = 0; //center of the right most palandrome;
    let right = 0; //Right boundry of the rightmost palandrome;

    for (let i=0; i < n-1; i++) {
        const mirror = 2 * center - i;
        
    }
}
// longest palindromic substring in a given string
const inputString = 'banana';
const result = getPalandromicString(inputString);
console.log(result);