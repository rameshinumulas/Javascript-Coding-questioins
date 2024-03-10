let nestedArr = [[1, 2, 3], [4, [5, 20, [3, 50]]], 7, [8, 9, 10]];
//MULTI NESTED ARRAY INPUT

const seperateArr = (sep, sepArr=[]) => {
    for (let se=0; se<sep.length; se++) {
        if (sep[se]?.length > 0) {
            return seperateArr(sep[se], sepArr);
        } else {
            sepArr.push(sep[se]);
        }
    }
}

const nestedFun = (arr) => {
    //INITILIZED EMPTY ARRAY
    let newArr = [];
    let max=0;
    for (let i=0; i<arr.length; i++) {
        // IF NESTED ARRAY PRESENT 
        if (arr[i]?.length > 0) {
            //SEPERATE NESTED ARRAY INTO SINGLE ARRAY
            seperateArr(arr[i], newArr);
            // CALLING FUNCTION TO SEPERATE NESTED ARRAY
        } else {
            newArr.push(arr[i]);
        }
    }
    // FINDING LARGERT NUMBER FROM THE NEW SEPERATED ARRAY
    for(let k = 0; k < newArr.length; k++) {
        if (max < newArr[k]) {
            max = newArr[k];
        }
    }
    return max;
}

console.log(nestedFun(nestedArr));

