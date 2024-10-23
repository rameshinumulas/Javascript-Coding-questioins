const printDate = new Date();
//  YYYY-MM-DD;
const formatDate = printDate.toISOString().split('T')[0];
// TOMORROW DATE
let nextDay = printDate.setDate(printDate.getDay() + 1);

console.log(printDate, 'print');
console.log(formatDate, 'formatDate');
console.log(nextDay, 'nextDay');