const prices = [10,1,5, 3, 4 ,6,7,1];

function maxProfit(prices) {
    
    let left = 0
    let right = 1

    let max = 0

    while(right < prices.length){

        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left]

            max = Math.max(max, profit)
            
        }else{
            left = right
        }



        right++;
    }

    console.log(max);
    
    return max
    
}

maxProfit(prices)
// Output: 6
