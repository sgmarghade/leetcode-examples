/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 *
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 *
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 *
 *
 *
 * Example 1:
 *
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 *
 * Explanation : We can go with sliding window. Keep traack of max
 * profit and if u find any number below current working number
 * use it as start point. Because even if u get bigger number after that
 * profit will be maximum only from lowest value. So slide current
 * reference to that point.
 */

function maxProfit(prices: number[]): number {
    let profit: number = 0;
    let currentPrice: number = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (currentPrice > prices[i]) {
            currentPrice = prices[i];
        } else {
            if (profit < (prices[i] - currentPrice)) {
                profit = prices[i] - currentPrice;
            }
        }
    }
    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));//5
console.log(maxProfit([7, 6, 4, 3, 1]));//0


