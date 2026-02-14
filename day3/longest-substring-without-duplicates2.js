const s = "pwwkew" // dvdf

// Output: 3

lengthOfLongestSubstring(s);

function lengthOfLongestSubstring(s) {
    let res = 0;
    let l = 0;
    let set = new Set()

    for(let r of s){
        
        
        while(set.has(r)){
            set.delete(s[l])
            l = l + 1;
            // console.log(set)
        }

        set.add(r)
        console.log(set)
        res = Math.max(set.size, res)
    }
    console.log(res)
    return res
}
