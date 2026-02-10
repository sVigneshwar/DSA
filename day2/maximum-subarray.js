const nums = [2,-3,4,-2,2,1,-1,4]

maxSubArray(nums); // 8

function maxSubArray(nums) {
    let allvalues = []

    for(let i = 0; i< nums.length; i++){

        let eachvalue = 0;

        for(let j = i; j< nums.length; j++){
            eachvalue += nums[j]
            allvalues.push(eachvalue)
        }
    }

    return Math.max(...allvalues)
}