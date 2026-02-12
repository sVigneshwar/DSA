const nums = [3,4,5,6,1,2]; 
const target = 3;

const nums2 = [5,6,1,2,3,4];
const target2 = 6;

search(nums, target)

function search(nums, target) {
    let res = -1

    let l = 0
    let r = nums.length - 1

    while (l <= r){
        let m = Math.floor((l+r)/2)
        if(nums[m] === target){
            res = m
            console.log(res)
            return
        }

        // nums = 5>3 //nums2 = 1 > 5 
        if(nums[m] >= nums[l]){
            if(target > nums[m] && target < nums[l]){
                l = m + 1
            }else{
                r = m - 1
            }
        }else{
            if(target < nums[m] && target > nums[r]){
                l = m + 1
            }else{
                r = m - 1
            }
        }

    }

    console.log(res)

    return res
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