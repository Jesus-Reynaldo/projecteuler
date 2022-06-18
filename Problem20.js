const factorialSum=(num)=>{
    let factorial=BigInt(1);
    let sum=BigInt(0);
    for(let i =BigInt(1);i<num;i++){
        factorial=BigInt(factorial*i);
    }
    let number= BigInt(factorial);
    do{
        sum+=BigInt(number%10n);
        number=BigInt(number/10n);
    }while(number!=0);
    return sum;
}
console.log(factorialSum(100));