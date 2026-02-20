const nums = [1,3,3,3, 2,2], k = 2

// Output: [2,3]

topKFrequent(nums, k)

function topKFrequent(nums, k) {
    let map = new Map()
    
    for(let n of nums){
        map.set(n, (map.get(n) || 0) + 1)
    }

    let arr = [...map].sort((a, b) => b[1] - a[1])
    var res = []

    for(let i=0;i<k;i++){
        res.push(arr[i][0])
    }

    console.log(res.sort());
    
    return res.sort()

}