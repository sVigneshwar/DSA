const strs = ["act","pots","tops","cat","stop","hat"]

groupAnagrams(strs) // Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]


// if(strs.length === 1){
    //     res.push(strs[0])
    //     return res
    // }

function groupAnagrams(strs) {
    let res = {}
    
    for(let s of strs){
        const sortedS = s.split("").sort().join("");

        if(!res[sortedS]){
            res[sortedS] = []
        }

        res[sortedS].push(s)

        console.log(res)
    }
    console.log(Object.values(res))
    return Object.values(res)
}