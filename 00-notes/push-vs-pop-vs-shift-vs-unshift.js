const arrPush = ["one", "two", "three", "four"]
const push = arrPush.push("five")

console.log(arrPush) // ['one', 'two', 'three', 'four', 'five']
console.log(push) // 5 // return length

const arrPop = ["one", "two", "three", "four"]
const pop = arrPop.pop()


console.log(arrPop) // ['one', 'two', 'three']
console.log(pop) // four // return deleted element


const arrShift = ["one", "two", "three", "four"]
const shift = arrShift.shift()

console.log(arrShift) // ['two', 'three', 'four']
console.log(shift) // one // return deleted element


const arrUnshift = ["one", "two", "three", "four"]
const unshift = arrUnshift.unshift("five")

console.log(arrUnshift) // ['five', 'one', 'two', 'three', 'four']
console.log(unshift) // 5 // return length