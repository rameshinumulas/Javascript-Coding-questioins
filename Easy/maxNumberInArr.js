const maxArray = (arr) => {
// EXAMPLE-1
    // return Math.max(...arr)
// EXAMPLE-2
    let a = 0;
    for(let i = 0; i<arr.length; i++) {
        if (arr[i] > a) {
            a = arr[i];
        }
    }
    return a;
}
let inputArray = [2, 234, 5, 6, 9, 100]
console.log(maxArray(inputArray))