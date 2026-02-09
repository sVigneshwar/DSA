const prices = [10,1,5, 3, 4 ,6,7,1];

function maxProfit(prices) {
    
    let left = 0;
    let right = 1;
    let maximumProfit = 0;

    while(right < prices.length){

        console.log(`checking index ${left} and ${right}, checking values are ${prices[left]} and ${prices[right]} of array [${prices}]`)

        if(prices[left] < prices[right]){

            let profit = prices[right] - prices[left]

            maximumProfit = Math.max(profit, maximumProfit)

        }else{
            left = right
        }

        right++

    }

    console.log(maximumProfit);
    
    return maximumProfit;
    
}

maxProfit(prices)
// Output: 6
