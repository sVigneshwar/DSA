const nums = [-1,0,1,2,-1,-4]

threeSum(nums)

function threeSum(nums) {
    let res = []
    let arr = nums.sort((a,b) => a - b)

    for(let i = 0; i< arr.length;i++){
        let currentIndex = arr[i]
        let previousIndex = arr[i - 1]
        if(i > 0 && currentIndex === previousIndex){ continue}

        let left = i + 1
        let right = arr.length - 1

        while(left < right){
            let total = currentIndex + arr[left] + arr[right]

            if(total > 0){
                right--
            }else if(total < 0){
                left++
            }else{
                res.push([currentIndex, arr[left], arr[right]])
                left++
                while(arr[left] === arr[left-1] && left<right){
                    left++
                }
            }
        }
    }
    console.log(res);
    
    return res
}