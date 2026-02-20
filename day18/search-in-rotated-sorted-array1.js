const nums = [3,4,5,6,1,2]; 
const target = 3;

// const nums2 = [5,6,1,2,3,4];
// const target2 = 6;

// [3,4]

search(nums, target)

function search(nums, target) {
    let result = -1;

    let l = 0
    let r = nums.length - 1

    while (l <= r){
        // console.log(nums)
        console.log(`left = ${l}, leftvalue = ${nums[l]}`)
        console.log(`right = ${r}, rightvalue = ${nums[r]}`)
        console.log(`target = ${target}`)
        let m = Math.floor((l + r)/2)
        if(nums[m]===target){

            console.log("matching condition")
            result = m
            console.log(result)
            return result
        }

        // left portion sorted
        if(nums[l] <= nums[m]){
            console.log(`target = ${target} is in left portion`)
            if(target >= nums[l] && target < nums[m]){
                r = m - 1
            }else{
                l = m + 1
            }
        }else{
            console.log(`target = ${target} is in right portion`)
            // right portion sorted
            if(target > nums[m] && target <= nums[r]){
                l = m + 1
            }else{
                r = m - 1
            }
        }

        console.log(`----------------------------------------------`)
    }

    console.log(result)
    return result
}

/*
Breaking down your logic (The "Aha!" moment)

Let's look at your two examples and see why the if conditions 
feel like they are "flipping."

Example 1: nums = [3, 4, 5, 6, 1, 2], target = 3
- Find Mid: m is index 2 (value 5).
- Is Left Sorted?: Is nums[m] >= nums[l]? (Is 5 >= 3?) Yes.
    The left side [3, 4, 5] is perfectly sorted.
- Is Target inside that sorted part?:
    Your code says: if(target > nums[m] && target < nums[l]).
    Wait! This logic is slightly backwards. You want to ask: 
    "Is the target between 3 and 5?"
    Correct logic: if (target >= nums[l] && target < nums[m]) 
    → Go Left.

Example 2: nums2 = [5, 6, 1, 2, 3, 4], target2 = 6
- Find Mid: m is index 2 (value 1).
- Is Left Sorted?: Is nums[m] >= nums[l]? (Is 1 >= 5?) No.
    This means the right side [1, 2, 3, 4] is the sorted one.
- Is Target inside that sorted part?:
    Check if target is between nums[m] (1) and nums[r] (4).
    Since 6 is not between 1 and 4, you know it must be in the 
    "messy" left half.
*/