/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * We will use kind of bruteforce approach. With bottom
 * up approach for each amount store what's the min coins required
 */

function coinChange(coins: number[], amount: number): number {
    const amountCoinCount = new Array(amount + 1).fill(Infinity);
    amountCoinCount[0] = 0;
    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {
        for (let coin of coins) {
            if (currentAmount - coin >= 0) {
                amountCoinCount[currentAmount] = Math.min(amountCoinCount[currentAmount], 1 + amountCoinCount[currentAmount - coin]);
            }
        }
    }

    return amountCoinCount[amount] === Infinity ? -1 : amountCoinCount[amount]
}

console.log(coinChange([1,2,5], 11)); //3
console.log(coinChange([2], 3));//-1
console.log(coinChange([1], 0)); // 0