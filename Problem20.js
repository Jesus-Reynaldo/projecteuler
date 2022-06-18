// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!
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