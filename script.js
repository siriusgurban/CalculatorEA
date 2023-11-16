let inp1 = document.querySelector("#inp1");
let inp2 = document.querySelector("#inp2");
let result = document.querySelector("#result");
let topla = document.querySelector("#topla");
let cix = document.querySelector("#cix");
let vur = document.querySelector("#vur");
let bol = document.querySelector("#bol");
let clr = document.querySelector("#clr");


topla.addEventListener("click", () => {
    result.innerHTML = Number(inp1.value) + Number(inp2.value);
})

cix.addEventListener("click", () => {
    result.innerHTML = Number(inp1.value) - Number(inp2.value);
})

vur.addEventListener("click", () => {
    result.innerHTML = Number(inp1.value) * Number(inp2.value);
})

bol.addEventListener("click", () => {
    result.innerHTML = Number(inp1.value) / Number(inp2.value);
})

clr.addEventListener("click", () => {
    inp1.value = "";
    inp2.value = "";
    result.innerHTML = "Result";    
})