var date = new Date(2021, 6 -1, 17, 11, 10, 30);
var currentDate = new Date();
console.log(date.toLocaleString());
console.log(currentDate.toLocalering());

 
function sumOfThreeNumbers(a, b, c) {
    return a + b + c;
}
console.log(sumOfThreeNumbers(5, 6, ));


function sum(...args) {
    console.log(args)
 let result = 0;
 for (let element of args) {
    result = result + element;
 }
 return result;
}

console.log(sum(5, 11, 52, 100, 4, 9));

const person = {
    firstName: "komal",
   lastName: "kumari",
    age: 19,
    eyecolor: "Brown"
}
console.log(Object.entries(person))


let myPromise = new Promise((myResolve, myReject) => {
    setTimeout(() => {
    myResolve("Hi! I'm komal");
    }, 3000);
});

myPromise.then((value) => {
    console.log(value);
});

 //.then() promise fulfilled
 //.catch() promise was failed


let myPromise2 = new Promise((myResolve, myReject) => {
    let a = 5;
   let b = 6;
   if (a + b > 10) {
        myReject("promise failed!");
   } else{
      myResolve("promise Success!");
  }
});

myPromise2
.then((value) => {
 console.log(value);
})
.catch((value) => {
    console.log(value);
});


