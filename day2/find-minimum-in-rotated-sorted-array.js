const nums = [3,4,5,6,1,2]
findMin(nums)

function findMin(nums) {
    let res = nums[0];
    let l = 0;
    let r = nums.length - 1;

    while (l <= r){
        console.log("test");
        
        if(nums[l] < nums[r]){
            res = nums[l] 
            return
        }

        let m = nums.length / 2;
        res = Math.min(res, nums[m])
        if(nums[m] >= nums[l]){
            l = m + 1
        }else{
            r = m - 1
        }
    }

    console.log("test");
    console.log(res);
    
    return res
}