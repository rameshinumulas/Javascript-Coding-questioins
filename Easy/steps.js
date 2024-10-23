// function climbStairs(n) {
//     if (n === 1) {
//         return 1; // If there's only one step, there's only one way to climb it
//     }

//     let dp = new Array(n + 1);
//     dp[0] = 0;
//     dp[1] = 1;
//     dp[2] = 2;

//     for (let i = 3; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2];
//         // Number of ways to reach current step is sum of ways to reach previous two steps
//     }

//     return dp[dp.length-1];
// }

// // Example usage
// const n = 5;
// console.log(`Number of distinct ways to climb ${n} steps:`, climbStairs(n));


// // let a = 9;

// // const useFun = () => {
// //     let a =8;
// //     console.log(a);
// // }

// // console.log(a);
// // console.log(useFun());




// A Javascript program to count 
// number of ways to reach 
// n'th stair when a person
// can climb 1, 2, ..m stairs 
// at a time. 

// A simple recursive
// function to find n'th 
// fibonacci number
function fib(n)
{
if (n <= 1)
    return n;
return fib(n - 1) + 
       fib(n - 2);
}

// Returns number of 
// ways to reach s'th stair
function countWays(s)
{
    let va = fib(s+1)
    console.log(va)
    return va
    // return fib(s + 1);
}

// Driver Code
let s = 5;
console.log("Number of ways = " + countWays(s));

// This code is contributed
// by _saurabh_jaiswal