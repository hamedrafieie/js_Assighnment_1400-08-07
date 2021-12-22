function goalValidation (a,b,minutes){
    const firstHalf = 45;
    const secondHalf = 90;
    for (let i=0 ; i< minutes.length ; i++){
        if ( minutes[i] > firstHalf + a){
            if( minutes[i] > minutes[i+1])
                return 'NO'
            if ( minutes[i] > secondHalf + b)
                return 'NO'
        }
    }
    return 'YES'
}
console.log(goalValidation(3,2,[8,48,45,70,81,94] ))
console.log(goalValidation(6,3,[2,8,48,45,70,81,94]))