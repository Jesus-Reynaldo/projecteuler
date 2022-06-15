const sumSquareDifference =(n) => {
    let sumSquare = 0;
    let squareSum = 0;
    for(let i=1;i<=n;i++){
        sumSquare +=Math.pow(i,2);
        squareSum += i;
    }
    return Math.abs(sumSquare-Math.pow(squareSum,2));
}
console.log(sumSquareDifference(100));
