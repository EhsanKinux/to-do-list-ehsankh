
document.querySelector(".typs")
.forEach(ele => ele.addEventListener('click', e => (e.target.innerHTML)));


document.querySelector("#").addEventListener("click", () =>{
    timeIndex = document.querySelector("#time").value;
    taskName = document.querySelector().value;
    taskDesctiption = document.querySelector().value;
    taskType = document.querySelector().innerHTML;

    localStorage.setItem("tasks", localStorage.tasks 
                                ? localStorage.tasks + 
                                `${timeIndex}-${taskName}-${taskDesctiption}-${taskType}#`
                                : `${timeIndex}-${taskName}-${taskDesctiption}-${taskType}#`);
});



const saveTask = data =>{

}