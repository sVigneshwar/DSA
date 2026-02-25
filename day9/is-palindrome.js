const s = "Was it a car or a cat I saw?"

isPalindrome(s) // true

function isPalindrome(s) {

    let original = s.toLowerCase().replace(/ /g,'').replace(/[^a-zA-Z0-9]/g, '')
    let reversed = s.split("").reverse().join("").toLowerCase().replace(/ /g,'').replace(/[^a-zA-Z0-9]/g, '')

    console.log(original);
    console.log(reversed);
    console.log(original == reversed);

    return original == reversed
    
}