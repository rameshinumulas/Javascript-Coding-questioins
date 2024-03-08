
//  5. Write a JavaScript function that takes an array of numbers
//  and returns a new array with only the even numbers. 
 
 const evenFun = (arr) => {
    let evenArr = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]%2 === 0) {
        evenArr.push(arr[i]);
        }
    console.log('coimng', arr[i]%2);
    }
    return evenArr;
 }

let givenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(evenFun(givenArr));