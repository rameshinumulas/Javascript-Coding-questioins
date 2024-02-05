const generateSubSequece = (input, current='', index=0) => {
    if (index === input.length) {
        console.log(current)
        return;
    }
    // include current character
    generateSubSequece(input, current + input[index], index + 1);
    // exclude current character
    generateSubSequece(input, current, index + 1);

}

const getSubsequenceString = (useString) => {
    //convert the input string to array and sort it.
    const sortedArray = useString.split().sort().join('');

    //generate subsequences
    generateSubSequece(sortedArray);
}


// To print all subsequences of a string in sorted order using JavaScript,
// you can use a recursive approach. Here's an example code:
const inputString = 'abc';
// console.log(
    getSubsequenceString(inputString)
    // );