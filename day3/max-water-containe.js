
const heights = [1,7,2,5,4,7,3,6,7]

// Output: 36

maxArea(heights)

function maxArea(heights) {
    let maximum = 0;
    let area = 1;
    for(let i = 0; i < heights.length; i++){
        for(let j = i + 1; j < heights.length; j++){
            area = (j - i) * Math.min(heights[i], heights[j])
            maximum = Math.max(maximum, area)
        }
    }
    console.log(maximum)
    return maximum
}