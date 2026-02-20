const nums = [4,5,0,1,2,3]
findMin(nums)

function findMin(nums) {
    let res = nums[0]

    let l = 0
    let r = nums.length - 1

    while (l <= r){
        
        if(nums[l] < nums[r]){
            return Math.min(nums[l], res)
        }

        let m = Math.floor((l + r) / 2)

        res = Math.min(nums[m], res)
        
        if(nums[m] >= nums[l]){
            l = m + 1
        }else{
            r = m - 1
        }
    }

    console.log(res);    

    return res

}