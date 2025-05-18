let newbtn = document.createElement("button");
newbtn.innerHTML = "click me";
console.log(newbtn);
console.log(newbtn.setAttribute("id" , "btn"));
let body = document.querySelector("body");
body.prepend(newbtn);
console.log(newbtn.getAttribute("id"));
// let p = document.createElement("p");
// p.innerText="this is simple text";
let btn = document.getElementById("btn");
let currmode = "light";

btn.addEventListener("click", () => {
if(currmode === "light"){
    currmode = "dark";

    // body.style.backgroundColor = "black";
    // body.style.color = "white";

                 //OR

    body.classList.add("dark");
    body.classList.remove("light");
    
     
}else{
    currmode = "light";

    // body.style.backgroundColor = "white";
    // body.style.color = "black";

                 //OR

    body.classList.add("light");
    body.classList.remove("dark");
    
}
console.log(currmode);
})

