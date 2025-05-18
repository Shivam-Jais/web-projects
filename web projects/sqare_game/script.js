let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");

s1.addEventListener("mouseenter" , () => {
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`
    
});
s1.addEventListener("mouseleave" , () => {
    s1.innerHTML = "<h1>1</h1>";
});

let clr = "green"
s2.addEventListener("mouseenter" , () => {
 
 if(clr == "green"){
    s2.style.backgroundColor = "green";
    clr = "red";
 }else if(clr == "red"){
    s2.style.backgroundColor = "red";
    clr = "blue";
 } else{
   s2.style.backgroundColor = "blue";
   clr = "green";

 }
});
s2.addEventListener("mouseleave" , () => {
    s2.style.backgroundColor = "white";
});

//square 3
let s3 = document.getElementById("sq3");

s3.addEventListener("mouseenter" , () => {
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`; 
    
});
s3.addEventListener("mouseleave" , () => {
    s3.style.backgroundColor = "white";
});

//square 4 
let s4 = document.getElementById("sq4");

s4.addEventListener("click" , () => {
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);


    // s3.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    // s2.style.backgroundColor = `rgb(${r1},${r2},${r3})`;  // same color 3no me 
    // s1.style.backgroundColor = `rgb(${r1},${r2},${r3})`;
    s3.style.backgroundColor = `rgb(${r1},255,255)`; 
    s2.style.backgroundColor = `rgb(255,${r2},255)`; 
    s1.style.backgroundColor = `rgb(255,255,${r3})`; 

    
});
s4.addEventListener("mouseleave" , () => {
    s4.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s1.style.backgroundColor = "white";
});