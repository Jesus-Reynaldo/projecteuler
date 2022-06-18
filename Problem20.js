const factorialSum=(num)=>{
    let factorial=1;
    let sum=BigInt(0);
    for(let i =1;i<num;i++){
        factorial*=i;
    }
    let number= BigInt(factorial);
    do{
        sum+=BigInt(number%10n);
        number=BigInt(number/10n);
    }while(factorial!=0);
    return sum;
}
console.log(factorialSum(100));