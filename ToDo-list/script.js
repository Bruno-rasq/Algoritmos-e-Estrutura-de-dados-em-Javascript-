// função que adiciona tarefa
function addTask(){
    
    // titulo da tarefa
    const TaskTitle = document.querySelector("#task-title").value;
    
    if(TaskTitle){

        // clonagem do template
        const Template = document.querySelector(".template");
        const NewTask = Template.cloneNode(true);

        // adiciona o titulo
        NewTask.querySelector(".task-title").textContent = TaskTitle;

        // removendo classes desnecessárias 
        NewTask.classList.remove("template");
        NewTask.classList.remove("hide");

        // adicionar tarefa na lista
        const list = document.querySelector("#task-list");

        list.appendChild(NewTask);

        //limpando o texto do input
        document.querySelector("#task-title").value = "";
    }

}


// evento adicionar tarefa
const AddButton = document.querySelector("#add-btn");

AddButton.addEventListener("click", (event) => {

    event.preventDefault();

    addTask();

})