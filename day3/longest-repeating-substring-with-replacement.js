const s = "ABABBA", k = 2

console.log(`Input: s="${s}", k=${k}\n`);
characterReplacement(s, k) // Output: 5

function characterReplacement(s, k) {
    let res = 0;
    let charSet = new Set(s);
    
    console.log(`Unique chars: [${Array.from(charSet).join(', ')}]\n`);

    for (let c of charSet) {
        console.log(`\n--- Target: '${c}' ---`);
        let count = 0, l = 0;

        for (let r = 0; r < s.length; r++) {
            if (s[r] === c) count++;

            // Shrink window if too many replacements needed
            while (r - l + 1 - count > k) {
                if (s[l] === c) count--;
                l++;
            }

            const windowLen = r - l + 1;
            console.log(`  Window[${l}..${r}]="${s.substring(l, r + 1)}" | length=${windowLen} | '${c}' count=${count}`);
            
            if (windowLen > res) {
                res = windowLen;
                console.log(`  🌟 New max: ${res}`);
            }
        }
    }
    
    console.log(`\n🏆 Result: ${res}\n`);
    return res;
}