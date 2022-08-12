
const times = {
    '0': "8:00-8:30",
    '1': "8:30-9:00",
    '2': "9:30-10:00",
    '3': "10:00-10:30",
    '4': "10:30-11:00",
    '5': "11:00-11:30",
    '6': "11:30-12:00",
}



let Task = [{doing:"Adding new element", description:"WOW", dot:"color", clock:"3"}];

let Add = document.getElementsByClassName("box");
// let addiv = document.getElementById("add");


function Creating(doing, description, dot, clock) {

    let first = document.createElement("h4");
    first.innerHTML(doing)

    let scond = document.createElement("p");
    scond.innerHTML(description)

    let Todo = document.createElement("div");
    Todo.classList.add("todo")

    let addiv = document.createElement("div");
    addiv.classList.add("add");

    Todo.appendChild(first);
    Todo.appendChild(scond);
    
    // 3 * 62.5
    addiv.appendChild(Todo);
    // addiv.classList("add");
    Add.appendChild(addiv);
    Add.classList("box")
}

Task.forEach(Creating);