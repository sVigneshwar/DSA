
const nums = [3, 2, 4, 3, 1]

hasDuplicate(nums)

function hasDuplicate(nums) {
    console.log(new Set(nums).size < nums.length)
    return new Set(nums).size < nums.length;
}