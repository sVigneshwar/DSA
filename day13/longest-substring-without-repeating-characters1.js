const s = "abcabcbb" // dvdf

// Output: 3

lengthOfLongestSubstring(s);

function lengthOfLongestSubstring(s) {
    let res = 0
    let set = []
    for(let i=0;i<s.length;i++){
        if(set[0] === s[i]){
            set.shift()
        }else if(set.includes(s[i])){
            set = []
        }
        set.push(s[i])
        console.log(set)
        res = Math.max(res, set.length)
    }
    console.log(res)
    return res
}
