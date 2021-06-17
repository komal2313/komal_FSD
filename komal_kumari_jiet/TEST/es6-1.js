function SumOfTwoNumbers(a, b){
    return a + b;
}
console.log(SumOfTwoNumbers(5, 6));

var factorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    return n * factorial(n-1);
};

console.log(factorial(5))

var arr =[1,2,3,4,5];
var reverseArray =(arry) => {
    let length = arr.length;
    let start = 0;
    let end = length - 1;
    let mid = length / 2;
    while (start <= mid && end >= mid){
        
    }
}