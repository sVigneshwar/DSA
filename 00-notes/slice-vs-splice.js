// SLICE
const arr = [1,2,3,4,5]

arr.slice(1,2) // does not do anything to original array, since slice needs a variable to store value

const newArr = arr.slice(1,2) // (first is index, second is also index but it gets value up until that index, like if second is 3, it gets value before index 3 that is 2)

console.log(arr); // [ 1, 2, 3, 4, 5 ]
console.log(newArr); // [ 2 ]



// SPLICE

let months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb') // ['Jan', 'Feb', 'March', 'April', 'June'];
//(starting index, deleting number (like how much next values to be deleted), replacing value)

let splicedMonths = months.splice(4, 1, 'May')

console.log(months); // [ 'Jan', 'Feb', 'March', 'April', 'May' ]
console.log(splicedMonths); // [ 'June' ]

// splice always updates value
// stored splice variables always return deleted values