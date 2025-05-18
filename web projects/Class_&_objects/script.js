// function sum(a,b){
//     console.log(a+b);
//      return a+b;
// }
// function cal(a, b ,sum ){
//     let total =  a + b +sum;
//     console.log(total);

// }
// cal(1,2,sum(2,5));

// // function cal(a,b,sum){
// //     sum(a,b);
// // }
// // cal(1,2,(a,b)=>{
// // console.log(a+b);
//  });


// const hello = () => {
//     console.log("hello");
// }
// setTimeout(() => {
    
//     console.log("shivam");
    
// }, 2000);


// function getData(dataid,getNextDate){
//     setTimeout(() => {
//         console.log("data" , dataid);
//         if(getNextDate){
//             getNextDate();
//         }
//     }, 2000);
// }
// getData(2,() => {
//     getData(3 , () => {
//         getData(4);
//     });
// });



// promises started here and it use to slove the callback hell problmes
let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("success");
});
