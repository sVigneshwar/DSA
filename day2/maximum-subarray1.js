const nums = [2,-3,4,-2,2,1,-1,4]

maxSubArray(nums); // 8

function maxSubArray(nums) {
    let maxSub = nums[0]
    let currentSum = 0

    console.log(nums);
    

    for(let num of nums){

        if (currentSum < 0) {
            currentSum = 0;
        }

        currentSum += num

        maxSub = Math.max(maxSub, currentSum)
        console.log("looping number -", num , "current maximum -", currentSum, "maxSub -", maxSub);
    }

    console.log(maxSub);
    
    return maxSub
}