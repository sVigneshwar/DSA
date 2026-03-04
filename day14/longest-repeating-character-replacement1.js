const s = "ABABBA", k = 2

function characterReplacement(s, k) {
    let map = new Map()
    let l = 0
    let maxFreq = 0
    let res = 0

    for(let r = 0; r<s.length;r++){
        map.set((map.get(s[r]) || 0) + 1)
        maxFreq = Math.max(maxFreq, map.get(s[r]))

        let windowSize = r - l + 1

        while((windowSize - maxFreq) > k){
            count.set(s[l], count.get(s[l]) - 1)
            l++;
        }

        res = Math.max(res,windowSize)
    }
}


// console.log(`Input: s="${s}", k=${k}\n`);
characterReplacement(s, k) // Output: 5

// r=0: window="A"      count={A:1} maxFreq=1  need=1-1=0 ≤ 2 ✅  res=1
// r=1: window="AB"     count={A:1,B:1} maxFreq=1  need=2-1=1 ≤ 2 ✅  res=2
// r=2: window="ABA"    count={A:2,B:1} maxFreq=2  need=3-2=1 ≤ 2 ✅  res=3
// r=3: window="ABAB"   count={A:2,B:2} maxFreq=2  need=4-2=2 ≤ 2 ✅  res=4
// r=4: window="ABABB"  count={A:2,B:3} maxFreq=3  need=5-3=2 ≤ 2 ✅  res=5
// r=5: window="ABABBA" count={A:3,B:3} maxFreq=3  need=6-3=3 > 2 ❌
//        → shrink: remove s[l]="A" → l=1
//      window="BABBA"  need=5-3=2 ≤ 2 ✅  res still 5

// return 5