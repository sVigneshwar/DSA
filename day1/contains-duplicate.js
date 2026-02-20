
const nums = [3, 2, 4, 3, 1]

hasDuplicate(nums)

function hasDuplicate(nums) {
    const map = new Map()
    let match = false

    for(let i = 0; i< nums.length; i++){
        if(map.has(nums[i])){
            match = true
        }

        map.set(nums[i], i)
    }

    console.log(match)
    return match
}