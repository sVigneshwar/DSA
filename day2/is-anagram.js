const s = "xx", t = "x"

isAnagram(s, t)

function isAnagram(s, t) {
    if(s.length !== t.length){
        return false
    }

    let a = s.split("").sort().join()
    let b = t.split("").sort().join()

    return a === b
}