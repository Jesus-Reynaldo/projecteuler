/*Un triplete pitagórico es un conjunto de tres números naturales, a < b < c, para los cuales,
a^2 + b^2 = c^2
Por ejemplo, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
Existe exactamente un trillizo pitagórico para el cual a + b + c = 1000.
Encuentra el producto abc. */

const pythagoreanTriplet=(result)=>{
    let a,b,c,m=2,num=0;
    while(num!=result){
        for(let n=1;n<m;n++){
            a=Math.pow(m,2)-Math.pow(n,2);
            b=2*m*n;
            c=Math.pow(m,2)+Math.pow(n,2);
            num=a+b+c;
            if(num==result){
                break;
            }
        }
        m++;
    }
    return a*b*c;
}
console.log(pythagoreanTriplet(1000));