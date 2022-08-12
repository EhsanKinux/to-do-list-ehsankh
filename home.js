
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
    console.log(first);
    first.innerHTML=doing;
    
    //creating the descriptions
    let scond = document.createElement("p");
    scond.innerHTML = description;

    let Todo = document.createElement("div");
    Todo.classList.add("todo")

    let addiv = document.createElement("div");
    addiv.classList.add("add");

    Todo.appendChild(first);
    Todo.appendChild(scond);
    
    //creating dot
    let circl = document.createElement("div");
    circl.classList.add("dot");

    let parentDot = document.createElement("div");
    parentDot.classList.add("Dot");
    parentDot.appendChild(circl);
    // 3 * 62.5
    addiv.appendChild(Todo);
    addiv.appendChild(parentDot);
    // addiv.classList("add");
    console.log(addiv);
    console.log(Add);
    Add.classList("box")
    Add.appendChild(addiv);
}
Task.forEach(element = () =>{
    Creating(element.doing, element.description, element.dot, element.clock);
});

// Task.forEach(Creating);
// const taskData = {};

const addTask = () => {
    window.location.pathname("./add-task");
}