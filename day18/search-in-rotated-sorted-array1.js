const nums = [3,4,5,6,1,2]; 
const target = 3;

// const nums2 = [5,6,1,2,3,4];
// const target2 = 6;

search(nums, target)

function search(nums, target) {
    let result = -1;

    let l = 0
    let r = nums.length - 1

    while (l <= r){
        let m = Math.floor((l + r)/2)
        if(nums[m]===target){
            result = m
            return result
        }

        // left portion sorted
        if(nums[l] <= nums[m]){
            if(target >= nums[l] && target < nums[m]){
                r = m - 1
            }else{
                l = m + 1
            }
        }else{
            if(target > nums[m] && target <= nums[r]){
                l = m + 1
            }else{
                r = m - 1
            }
        }

        console.log(result)
        return result
    }
}

