/*Al enumerar los primeros seis números primos: 2, 3, 5, 7, 11 y 13, 
podemos ver que el sexto primo es 13.
¿Cuál es el número primo 10001? */

const quantityPrime=(quantity)=>{
    let counter=1;
    let number=1;
    while(counter<=quantity){
        let aux=1;
        number++;
        for(let j=2;j<number;j++){
            if(number%j==0){
                aux=0;
                break;
            }
        }
        if(aux){
            counter++;
        }
    }
    return number;
}
console.log(quantityPrime(10001));