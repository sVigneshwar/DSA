

const nums = [3,5,4,6, 10]
const target = 7

twoSum(nums, target)

function twoSum(nums, target) {
    const map = new Map()

    for(let i =0; i < nums.length; i++){      
        let diff = target - nums[i]
        // console.log(map.keys())
        // console.log(`target is 7, looping item ${i}, looping number is ${nums[i]}, differece is ${diff},if map has difference - ${map.has(diff)}`);
        if(map.has(diff)){
            return [map.get(diff), i]
        }
        map.set(nums[i], i)
    }
}

/* 
loop 0 has no value - it returns
loop 1 has value 3 - but difference not match
loop 2 has value 3, 5 - difference match with 4 i,e (7 - 4) = 3, so we return index of 3 and current index [0, 2]
*/