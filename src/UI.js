import {toDoManager } from "./todoLogic";

const screenController = (()=> {

    const content = document.querySelector("#content");
    const addProjectButton = document.createElement("button");
    const sidebar = document.createElement("div");
    const mainContainer = document.createElement("div");

    const loadPage = ()=> {

        content.appendChild(sidebar);
        content.appendChild(mainContainer);
        sidebar.appendChild(addProjectButton);

        sidebar.setAttribute("id","sidebar");
        mainContainer.setAttribute("id","mainContainer");
        addProjectButton.setAttribute("id","addProjectButton");
        addProjectButton.textContent = "ADD PROJECT";

    }
    loadPage();


    const addProject = ()=> {

        toDoManager.createTodos();
        toDoManager.addToProject();
        const index = toDoManager.getProject().length-1;
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        mainContainer.appendChild(projectDiv);
        addTodoBtn(index); 

    }
   addProjectButton.addEventListener("click",addProject);

    const appendToProject = (index,element)=> {
        const project = document.querySelectorAll(".project");
        project[index].appendChild(element);

    }
    const addTodoBtn = (index)=> {
        const addTodoButton = document.createElement("button");
        addTodoButton.textContent = "ADD TASK";
        addTodoButton.classList.add("addTodoBtn");
        appendToProject(index,addTodoButton);
        addTodoButton.addEventListener("click",()=> addTodo(index));

        
    }


    const addTodo = (index)=>{ 
        const project = document.querySelectorAll(".project");
        const title = document.createElement("p");
        const description = document.createElement("p");

        title.textContent = toDoManager.getProject()[index].getTitle();
        description.textContent = toDoManager.getProject()[index].getDescription();
        
        appendToProject(index,title);
        appendToProject(index,description);

    }
})();


export {screenController};