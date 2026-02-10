const users = [
  { name: "Alice", role: "admin" },
  { name: "Bob", role: "user" },
  { name: "Charlie", role: "admin" },
  { name: "David", role: "user" },
  { name: "Eve", role: "guest" }
];

// -----------------------------------------------------------------

/* const obj = {}

users.forEach(user => {
    let currentArr = obj[user.role] || [];
    currentArr.push(user.name)
    obj[user.role] = currentArr;
})

console.log(obj); */

// -----------------------------------------------------------------

const obj = {}

for(const {name, role} of users){
    if(!obj[role]){
        obj[role] = []
    }
    obj[role].push(name)
}

console.log(obj);

// -----------------------------------------------------------------

var output = {
  admin: ["Alice", "Charlie"],
  user: ["Bob", "David"],
  guest: ["Eve"]
}