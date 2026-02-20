const s = "racecar", t = "carrace"

isAnagram(s, t)

function isAnagram(s, t) {

    if(s.length !== t.length){
        return false
    }

    let map = new Map()

    for(let char of s){
        map.set(char, (map.get(char) || 0) + 1)
    }

    for(let char of t){
        map.set(char, (map.get(char) || 0) - 1)

        if(map.get(char) === 0){
            map.delete(char)
        }
    }
    return map.size === 0   
}