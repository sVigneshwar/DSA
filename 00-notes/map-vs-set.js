// Create a Map → set, has, get, delete, size, keys(), values(), entries(), forEach()
let map = new Map()

map.set("one", 0)
map.set("two", 1)
map.set(10, 2)
map.set(11, 3)
map.set("one", 1) // repeating "one" with index of 1

console.log(map) // {'one' => 1, 'two' => 1, 10 => 2, 11 => 3} // 0 replaced by 1 at first "one"

console.log(map.has("one")) // true // checks left side value
console.log(map.has(0)) // false // checks left side value

console.log(map.get("one")) // 1 // gets right side value // 0 replaced by 1 at first "one"
console.log(map.get("two")) // 1 // gets right side value
console.log(map.get(0)) // undefined

console.log(map.delete("one")) // true // checks left side value
console.log(map.delete(0)) // false // checks left side value
console.log(map) // {'two' => 1, 10 => 2, 11 => 3} // "one" is deleted

console.log(map.size) // 3

console.log(map.keys()) // {'two', 10, 11}
console.log(map.values()) // {1, 2, 3}
console.log(map.entries()) // {'two' => 1, 10 => 2, 11 => 3}

console.log("---------------------------------------------")


// Create a Set → add, has, delete, size, keys(), values(), entries(), forEach()
let set = new Set()

set.add("one")
set.add("two")
set.add(10)
set.add(11)
set.add("one") // no duplicate values allowed

console.log(set) // {'one', 'two', 10, 11}

console.log(set.has("one")) // true

console.log(set.delete("one")) // true
console.log(set) // {'two', 10, 11}

console.log(set.size) // 3

console.log(set.keys()) // {'two', 10, 11}
console.log(set.values()) // {'two', 10, 11}
console.log(set.entries()) // {'two' => 'two', 10 => 10, 11 => 11}
