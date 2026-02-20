const s = "racecar", t = "carrace"

isAnagram(s, t)

function isAnagram(s, t) {

    if(s.length !== t.length){
        return false
    }

    let map1 = new Map()
    let map2 = new Map()

    for(let char of s){
        map1.set(char, (map1.get(char) || 0) + 1)
    }

    for(let char of t){
        map2.set(char, (map2.get(char) || 0) + 1)
    }

    for(let [key, value] of map1){
        if(!map2.has(key) || map2.get(key) !== value){
            return false
        }
    }

    return true
    
}