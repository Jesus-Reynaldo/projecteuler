/*2^15 = 32768 y la suma de sus dígitos es 3 + 2 + 7 + 6 + 8 = 26.
¿Cuál es la suma de los dígitos del número 2^1000? */
const powerDigitSum=(number,power)=>{
    let pow=BigInt(Math.pow(number,power)).toString();
    let len=pow.length;
    let sum=0;
    for (let i=0; i<len; i++){
        sum+=parseInt(pow[i]);
    }
    return sum;
}
console.log(powerDigitSum(2,1000));