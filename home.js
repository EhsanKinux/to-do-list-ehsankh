let Task = [{todo:"Adding new element", description:"WOW", dot:"color", clock:"3"}];

let Add = document.getElementsByClassName("box");
let addiv = document.getElementById("add");


function Creating() {
    
    let first = document.createElement("h4");
    let scond = document.createElement("p");
    let third = document.createElement("div");

    
    // 3 * 62.5
    addiv.appendChild(first, scond, third);
    addiv.classList("add");
    Add.appendChild(addiv);
    Add.classList("box")
}

Task.forEach(Creating);