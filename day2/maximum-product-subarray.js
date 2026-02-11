const nums = [1,2,-3,4,-2]
// const nums = [-2,-1]
maxProduct(nums)


function maxProduct(nums){
    let maxSub = Math.max(...nums)
    let maxVal = 1
    let minVal = 1

    for(let num of nums){
        if(num === 0){
            maxVal = 1
            minVal = 1
        }

        let tempMax = maxVal * num
        let tempMin = minVal * num

        maxVal = Math.max(tempMax, tempMin, num) // [3]
        minVal = Math.min(tempMax, tempMin, num) // [-3]
        maxSub = Math.max(maxSub, maxVal)
    }

    console.log(maxSub)
    return maxSub
}