const firstUpperLetterFun = (str) => {
    // CONVERT EVERY WORD FIRST LETTER INTO CAPITAL
    // ex-1
    let newStr='';
    let strArr = str.split(' ');
    console.log(strArr)
    for (let st of strArr) {
        if (st) {
            newStr+= st.charAt(0)?.toUpperCase() + st.slice(1, st.length) + ' ';
        }
    }
    return newStr
}

let str = 'hello ramesh you are doing coding.'
console.log(firstUpperLetterFun(str));
// out put - Hello Ramesh You Are Doing Coding.
// Write a JavaScript program to convert a string to title
// case (capitalize the first letter of each word)