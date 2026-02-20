const s = "abcabcbb" // dvdf

// Output: 3

lengthOfLongestSubstring(s);

function lengthOfLongestSubstring(s) {
    let res = 0;
    for(let i = 0; i<s.length; i++){
        let set = new Set()
        for(let j = i; j<s.length; j++){
            if(set.has(s[j])){
                break
            }
            set.add(s[j])
        }
        res = Math.max(res, set.size)
    }

    console.log(res)
    return res
}
