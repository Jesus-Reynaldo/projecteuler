/*2^15 = 32768 y la suma de sus dígitos es 3 + 2 + 7 + 6 + 8 = 26.
¿Cuál es la suma de los dígitos del número 2^1000? */
const powerDigitSum=(number,power)=>{
    let pow=BigInt(Math.pow(number,power));
    let sum=BigInt(0);
    do{
        sum+=BigInt(pow%10n);
        pow=BigInt(pow/10n);
    }while(pow!=0);
    return sum;
}
console.log(powerDigitSum(2,1000));