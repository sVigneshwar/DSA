const s = "Was it a car or a cat I saw?"

isPalindrome(s) // true

function isPalindrome(s) {

   let left = 0
   let right = s.length - 1

   while(left < right){
    if(!this.isAlphanumeric(s[left])){
        left++
    }

    if(!this.isAlphanumeric(s[right])){
        right--
    }

    if(s[left].toLowerCase() !== s[right].toLowerCase()){
        return false
    }

    left++
    right--
   }

   return true
    
}