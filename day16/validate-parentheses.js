const s = "[]"
isValid(s)

/// check if close matches the recent open, else return false
/// if the current is open keep pushing into stack, think of like arranging plates
function isValid(s) {
    
    const stack = []
    const closingBracket = {
        "}": "{",
        "]": "[",
        ")": "("
    }


    for(let bracket of s){
        
        if(closingBracket[bracket]){
            if(stack.length > 0 && stack[stack.length - 1] === closingBracket[bracket]){
                stack.pop()
            }else{
                return false
            }
        }else{
            stack.push(bracket)
        }
    }  

    return stack.length === 0
}