

const nums = [3,5,4,6, 10]
const target = 7

twoSum(nums, target)

function twoSum(nums, target) {
    let result;
    for(let i = 0; i< nums.length; i++){
        if(true){
            let pendingValue = target - nums[i];
            let pendingIndex;        
            if(nums.indexOf(pendingValue, i + 1) !== -1){
                pendingIndex = nums.indexOf(pendingValue, i + 1)
                // console.log("is", pendingValue, "available in ", nums, ":", pendingValue, "is available at", nums.indexOf(pendingValue));
                if(!result){
                    result = [i, pendingIndex]
                }
            }
        }        
    }
    // console.log(result);
    return result
}