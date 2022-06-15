/*Un número palindrómico lee lo mismo en ambos sentidos.
El mayor palindroma hecho del producto de dos números de 2 dígitos es 9009 = 91 x 99.
Encuentre el palíndromo más grande hecho del producto de dos números de 3 dígitos.*/

const lagertPalindromeProduct=(digits)=>{
    let num1=Math.pow(10,digits-1);
    let num2=num1;
    let limit=Math.pow(10,digits);
    let palindrome=[];
    for(let i=num1;i<limit;i++){
        for(let j=num2;j<limit;j++){
            let product=i*j;
            let inverse=inverseNumber(product);
            if(inverse==product){
                palindrome.push(product);
            }
        }
    }
    return Math.max.apply( null, palindrome);;
}
const inverseNumber=(num)=>{
    let inverse=0;
    let residue;
    do{
        residue=num%10;
        inverse= inverse*10 + residue;
        num=Math.floor(num/10);
    }while(num!=0);
    return inverse;
}
console.log(lagertPalindromeProduct(3));
