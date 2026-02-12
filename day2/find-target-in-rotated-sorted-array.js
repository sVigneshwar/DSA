const nums = [1];
const target = 1;

search(nums, target)

function search(nums, target) {
    let res = -1
    let map = new Map()

    for (let i = 0; i < nums.length; i++){

        map.set(nums[i], i)

        if(map.has(target)){
            res = map.get(target)
        }
    }

    console.log(res);

    return res
}