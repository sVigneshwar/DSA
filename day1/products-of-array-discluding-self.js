const nums = [1,2,4,6]

productExceptSelf(nums) // [48,24,12,8]

function productExceptSelf(nums) {
    let finalArr = []
    for(let i = 0; i< nums.length; i++){
        
        console.log("loop - ", i)
        let result = 1;

        nums.map((val, index) => {
            
            if(index !== i){
                console.log(val);
                result *= val
            }
        })

        finalArr.push(result)
        console.log("----------------------")
    }

    console.log(finalArr);
    return finalArr
    
}