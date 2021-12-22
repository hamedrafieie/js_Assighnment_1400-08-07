function Encrypt(str,k) {
       let swapped = str[str.length-1] + str.substr(0,str.length - 1)
       function letterChange (swapped){
              return swapped.replace(/[a-zA-Z]/g,function(x){
                     return String.fromCharCode(x.charCodeAt(0)+1)
              })}
       let ans = letterChange(swapped)
       k--;
       console.log(ans)
       if (k > 0) Encrypt(ans,k)
}

Encrypt("abcd",5)
// ebcd
// efcd
// efgd
// efgh
// ifgh
Encrypt("dhcb",3)
// ceid
// edfj
// kfeg




