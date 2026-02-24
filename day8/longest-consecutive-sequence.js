const nums = [9,1,4,7,3,-1,0,5,8,-1,6]

longestConsecutive(nums) // Output: 7

function longestConsecutive(nums) {
    let set = new Set(nums)
    let longest = 0;

    for(let n of nums){
        if(!set.has(n-1)){
            let length = 1

            while(set.has(n+length)){
                length++;
            }

            longest = Math.max(longest, length)
        }
    }

    console.log(longest);
    return longest
    
}