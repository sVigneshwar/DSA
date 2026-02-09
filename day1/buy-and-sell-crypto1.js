const prices = [10,1,5, 3, 4 ,6,7,1];

function maxProfit(prices) {
        let maxP = 0; // 0
        let minBuy = prices[0]; // 1

        for (let sell of prices) {
            // console.log(`lopping value - ${sell}, maximumProfit - Math.max(${maxP}, ${sell}-${minBuy}) = ${maxP}, minBuy - Math.min(${minBuy}, ${sell}) = ${minBuy}`);
            maxP = Math.max(maxP, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
            
        }
        return maxP;
    }

maxProfit(prices)
// Output: 6
