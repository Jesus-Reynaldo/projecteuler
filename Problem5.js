/*2520 es el número más pequeño que se puede dividir por cada uno de los números del 1 al 10 sin ningún resto.
¿Cuál es el número positivo más pequeño que es uniformemente divisible por todos los números del 1 al 20?*/
const smallestMultiple=(n)=>{
    let num =1;
    let i=1;
    while(i<=n){
        if(num%i==0){
            i++;
        }
        else{
            num++;
            i=1;
        }
    }
    return num;
}
console.log(smallestMultiple(20));