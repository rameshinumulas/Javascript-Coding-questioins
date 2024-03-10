function climbStairs(n) {
    if (n === 1) {
        return 1; // If there's only one step, there's only one way to climb it
    }

    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        // Number of ways to reach current step is sum of ways to reach previous two steps
    }

    return dp;
}

// Example usage
const n = 20;
console.log(`Number of distinct ways to climb ${n} steps:`, climbStairs(n));
