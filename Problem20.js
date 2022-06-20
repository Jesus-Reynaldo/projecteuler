// n! means n × (n − 1) × ... × 3 × 2 × 1
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Find the sum of the digits in the number 100!
const factorialSum=(num)=>{
    let factorial=BigInt(1);
    let sum=0;
    for(let i =BigInt(1);i<num;i++){
        factorial=BigInt(factorial*i);
    }
    let number= BigInt(factorial).toString();
    let length=number.length;
    for (let i=0;i<length;i++){
        sum+=parseInt(number[i]);
    }
    return sum;
}
console.log(factorialSum(900000));