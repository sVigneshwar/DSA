const nums = [1,2,4,6]

productExceptSelf(nums) // [48,24,12,8]

function productExceptSelf(nums) {
    let totalValue = 1;
    let zeros = 0;
    
    for(let num of nums){
        if(num !== 0){
            totalValue *= num
        }else{
            zeros++
        }
    }

    if(zeros > 1){
        return new Array(nums.length).fill(0)
    }

    const arr = new Array(nums.length)
    for(let i=0; i<nums.length;i++){

        if(zeros > 0){
            arr[i] = nums[i] === 0 ? totalValue : 0
        }else{
            arr[i] = totalValue / nums[i]
        }
    }
    console.log(arr)
    return arr;
}