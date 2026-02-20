
const heights = [1,7,2,5,4,7,3,6]

// Output: 36

maxArea(heights)

function maxArea(heights) {
    let maximum = 0;
    let area = 1;
    let l = 0
    let r = heights.length - 1

    while(l < r){
        area = (r - l) * Math.min(heights[l], heights[r])
        maximum = Math.max(maximum, area)

        if(heights[l] < heights[r]){
            l += 1
        }else{
            r -= 1
        }
    }

    console.log(maximum)
    return maximum
}