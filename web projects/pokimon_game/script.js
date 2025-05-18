// let h = document.querySelector("h1")
// //h.innerHTML = "<h1>Shivam jasiwal</h1>"; h1 ka html hai text then uske ander ek h1 create hoga an then uske ander ye change ho rha hai isliya ye bada show kar rha hai. jst like this <h1><h1> </h1></h1>
// //h.innerHTML = "goodbye"; // iske ander mera html hai = text so agar me usko hum change karenge to h1 ka text change hoga 
// // h.innerText = "shivma jasiwal"
// let main = document.querySelector("#main");
// main.innerHTML = "shivam " // main ka html pura h1 hai so ye <h1>This is Shivam Jaiswal</h1> change ho kar only shivam store hoga isliye small in size show kar rha hai mtlb ander ka pura html code hei change ho ja rha hai.
// main.innerHTML = "<h1>Shivam jasiwal</h1>"; // This is the right way to change the whole inner html 

let main = document.querySelector("#main");
let arr = [

 "https://i.pinimg.com/564x/ed/54/76/ed547659c33303e707de0e56957a26d9.jpg",//0
"https://i.pinimg.com/564x/35/e0/be/35e0be005797f7c07dc54ed77d829789.jpg",//1
"https://i.pinimg.com/564x/88/12/6e/88126e18e3dc12b2d6f9c5f1ecacdec6.jpg",//2
"https://i.pinimg.com/564x/42/be/ac/42beac08e215b2e2cb3159036eecaffb.jpg",//3
"https://i.pinimg.com/564x/1c/57/93/1c57937487a39b7e84cdba3fe054eeeb.jpg",//4
"https://i.pinimg.com/564x/40/ac/92/40ac923d23fcf4f988e51d560d33774a.jpg"//5


];
let s = "";
for(let i = 1 ; i<=48; i++){
    let r = Math.floor(Math.random()*6);
    s += `
        <div class="card">
            <img src = ${arr[r]}> 
          
        </div>  `
}
main.innerHTML = s;

//`<div class = "card"><img scr = "https://i.pinimg.com/564x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg"></div>`