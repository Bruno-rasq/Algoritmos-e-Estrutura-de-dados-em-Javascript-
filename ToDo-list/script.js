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

        //adicionando evento de remover
        const removerBtn = NewTask.querySelector("#remove-btn").addEventListener("click", function() {
            removeTask(this);
        });

        //adicionando evento de concluir tarefa
        const doneBtn = NewTask.querySelector("#done-btn").addEventListener("click", function() {
            doneTask(this);
        });
    }

};

//função de remover tarefa
function removeTask(task){
   task.parentNode.remove(true);
}

//função de concluir tarefa
function doneTask(task){
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle("done");
}


// evento adicionar tarefa
const AddButton = document.querySelector("#add-btn");

AddButton.addEventListener("click", (event) => {

    event.preventDefault();

    addTask();

})