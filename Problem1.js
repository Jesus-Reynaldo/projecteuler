/***
 * Si enumeramos todos los números naturales por debajo de 10 que son múltiplos de 3 o 5, 
 * obtenemos 3, 5, 6 y 9. La suma de estos múltiplos es 23.
 * Encuentra la suma de todos los múltiplos de 3 o 5 por debajo de 1000.
 */
const addMultiplesThreeOrFive=(number)=>{
  let add=0;
  for(let i=1;i<number;i++){
    if(i%3===0 || i%5===0)
      add+=i;
  }
  return add;
}

console.log(addMultiplesThreeOrFive(1000));