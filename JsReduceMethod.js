const arr = [10, 30, 40, 50, 90];

//FIND SOME ELEMENTS FROM THE ARRAY USING REDUCE;
const sumArr = arr.reduce((acum, num) => acum + num, 0);
console.log(sumArr, 'dd');

// Cumulative sums, or running totals;

const runningTotals = arr.reduce((acum, num) => [...acum, acum?.length ? acum[acum.length - 1] + num : num], [])
console.log(runningTotals, 'total');
