/*La suma de los primos por debajo de 10 es 2 + 3 + 5 + 7 = 17.
Encuentra la suma de todos los primos por debajo de dos millones. */

const sumPrimes=(quantity)=>{
    let sum=0;
    let number=1;
    while(number<quantity){
        let aux=1;
        number++;
        for(let j=2;j<number;j++){
            if(number%j==0){
                aux=0;
                break;
            }
        }
        if(aux){
            sum+=number;
        }
    }
    return sum;
}
console.log(sumPrimes(2000000));