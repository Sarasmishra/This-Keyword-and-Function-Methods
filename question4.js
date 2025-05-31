function deepClone(obj){
    let res = JSON.parse(JSON.stringify(obj))
    const newHobby  = "coding"
    res.hobbies.push(newHobby)
    return res
}


let original = { name: "Alice", hobbies: ["reading", "traveling"] }
let clone = deepClone(original)

console.log(original)
console.log(clone)