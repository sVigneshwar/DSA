// const nums = [0,0,0]

const nums = [0,1,1]

// Output: [[-1,-1,2],[-1,0,1]]

threeSum(nums)

function threeSum(nums) {
    let res = []
    if(nums.length === 3){
        let total = 0;
        nums.map(val => total+=val)
        if(total === 0){
            res = [[...nums]]
            console.log(res);
            return res
        }else{
            return res
        }
    }else{
        for(let i = 0; i< nums.length; i++){
            for(let j = i+1; j< nums.length; j++){
                for(let k = j+1; k< nums.length; k++){

                    if(nums[i]+nums[j]+nums[k] === 0){
                        res.push([nums[i],nums[j],nums[k]].sort((a, b) => a - b))
                    }
                }
            }
        }
        const uniquearray = Array.from(new Set(res.map(JSON.stringify)), JSON.parse)

        console.log(uniquearray);
        
        return uniquearray
    }
}