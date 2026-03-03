let numbers = [1, 2, 1, 3, 4]
solution(numbers)
function solution(numbers) {
    let res = [];
    
    for(let i = 0; i< numbers.length-2;i++){
        console.log(`loop ${i} - ${numbers[i]}, ${numbers[i+1]}, ${numbers[i+2]}`);
        if(numbers[i] > numbers[i+1] && numbers[i+1] < numbers[i+2]){
            console.log("cond1");    
            res.push(1)
        }else if(numbers[i] < numbers[i+1] && numbers[i+1] > numbers[i+2]){
            console.log("cond2");
            res.push(1)
        }
        else{
            console.log("cond3");
            res.push(0)
        }
    }

    console.log(res);
    
    
    return res;
}