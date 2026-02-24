// const strs = ["Hello","World"]
// const strs = [","]
const strs = ["", ""]

// Output: ["Hello","World"]

function encode(strs) {
   let str = ''

   for(let s of strs){
        str += s.length.toString() + "#" + s
   }
   console.log(str);
   return str
}
function decode(str) {

    let res = []
    let i = 0;

    while (i<str.length){
        let  j = i

        while(str[j] !== "#"){
            j++
        }

        let length = parseInt(str.substring(i, j));


        let start = j + 1
        let end = j + 1 + length

        res.push(str.substring(start, end))
        i = end
    }
   

    console.log(res);
    

    return res
}

decode(encode(strs))