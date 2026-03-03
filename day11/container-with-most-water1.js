
const heights = [1,7,2,5,4,7,3,6]

// Output: 36

maxArea(heights)

function maxArea(heights) {
    let max = 0
    let area = 1
    let l = 0
    let r = heights.length - 1

    while(l<r){

        area = (r - l) * Math.min(heights[l], heights[r])
        max = Math.max(max, area)

        if(heights[l] < heights[r]){
            l++
        }else{
            r--
        }
    }


    return max
}