let counter = 0 ;
function payDebtWith (n,x,y,z,a,b,c){
    for (let d = 0 ; d <= x ; d++) {
        for (let e = 0; e <= y; e++) {
            for (let f = 0; f <= z; f++) {
                if (a*d + b*e + c*f === n) counter++;
                }
            }
        }
    return counter;
}

console.log(payDebtWith(70000,2,3,1,50000,10000,10000))




