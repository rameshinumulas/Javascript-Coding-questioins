const checkPalindrome = (useString) => {
    // EXAMPLE - 1
    // let b = useString;
    // if (useString.split('').reverse().join('') === b) {
    //     return 'it is palindrome';
    // } else {
    //     return 'not palindrome';
    // };

    // EXAMPLE - 2
    let a = '';
    let ab = useString.length;
    for (let i = 0; i < useString.length; i++) {
        a += useString[ab - 1];
        ab--;
    }
    if (a === useString) {
        return 'it is palindrome';
    } else {
        return 'not a palindrome';
    }
    return a;
};

let str = 'madam22'
console.log(checkPalindrome(str));