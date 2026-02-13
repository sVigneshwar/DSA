const s = "pwwkew"

// Output: 3

lengthOfLongestSubstring(s);

function lengthOfLongestSubstring(s) {
    let storedArr = [1];
    let prev = s[0];

    for(let i=1; i<s.length; i++){
        console.log(`storedArr - ${storedArr}`)
        if(s[i] == prev){
            console.log(`same text condition, ${s[i]} == ${prev}`)
            storedArr.push(1)
            console.log(`Pushed new value into - [${storedArr}]`)
        }else{
            console.log(`Not same text condition, ${s[i]} != ${prev}`)
            prev = s[i]
            storedArr[storedArr.length-1] = storedArr[storedArr.length-1] + 1
            console.log(`Incremented last value - [${storedArr}]`)
        }
        // console.log(`storred array - ${storedArr}, prev is ${prev}, current is ${s[i]}`)
        
        console.log(`---------------------------------------------`);
        
    }
    console.log(Math.max(...storedArr))
    return Math.max(...storedArr)
}

/* 

[1]

[2]

[2,1]

[2,2]

[2,3]

[2,4] - ths is wrong due to [wkew] - w came twice but we did not check this scenario

pwwkew

*/