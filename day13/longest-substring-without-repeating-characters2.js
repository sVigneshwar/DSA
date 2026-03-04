const s = "pwwkew" // dvdf

// Output: 3

lengthOfLongestSubstring(s);

function lengthOfLongestSubstring(s) {
    let res = 0;
    let left = 0
    let set = new Set()


    for(let string of s){

        while(set.has(string)){
            set.delete(string)
            left++
        }

        set.add(string)
        res = Math.max(res, set.size)
    }
    return res
}
