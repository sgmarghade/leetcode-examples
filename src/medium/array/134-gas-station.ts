/**
 * There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].
 *
 * You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.
 *
 * Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique
 */

/*
 We will follow greedy approach.
*/

function canCompleteCircuit(gas: number[], cost: number[]): number {
    const totalGas = gas.reduce((sum, gas) => {
        return sum + gas;
    }, 0);

    const totalCost = cost.reduce((sum, cost) => {
        return sum + cost;
    }, 0);

    if (totalGas < totalCost) {
        return -1;
    }
    let current: number = -1;
    let start: number = -1;
    for (let i = 0; i < gas.length; i++) {
        let total: number = 0;
        start = i;
        current = i;
        do {
            total += gas[current] - cost[current];
            current = (current  + 1)% gas.length;
            if (current === i) {
                return start;
            }
            //If total is 0 means we can not move to next step.
            if (total <= 0) {
                total = 0;
                start = -1;
                break;
            }
        }while(current !== i)
    }
    return start;
}