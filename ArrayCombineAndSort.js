const concateAndSortBothArrays = (list1, list2) => {
    let combinedArray = [...list1, ...list2];

    // for (let i=0; i<list1.length; i++) {
    //     combinedArray.push(list1[i]);
    // }
    // for (let j=0; j<list2.length; j++) {
    //     combinedArray.push(list2[j])
    // }

    // Implement a simple sorting algorithm (e.g., bubble sort) without using built-in sort
    for (let i=0; i<combinedArray.length - 1; i++) {
        for (let j=0; j<combinedArray.length - 1-i; j++) {
             // Swap if the current element is greater than the next element
             if (combinedArray[j] > combinedArray[j+1]) {
                const temp = combinedArray[j];
                combinedArray[j] = combinedArray[j+1]
                combinedArray[j+1] = temp;
             }
        }
    }
    return combinedArray;
}


const list1 = [4, 2, 8, 1];
const list2 = [5, 3, 7, 6];

const sortedArray = concateAndSortBothArrays(list1, list2);
console.log(sortedArray);