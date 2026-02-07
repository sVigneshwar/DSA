const array = [2, 4, 1, 10, 12, 5, 7, 9, 20, 17]

function mergeSort(arr){
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right)
}

function merge(left, right){
    let result = []
    while (left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right]
}

console.log(mergeSort(array));