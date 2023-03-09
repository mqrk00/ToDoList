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
        
        const proj = toDoManager.makeProject(); 
        const index = toDoManager.projectsArray.length-1;
        console.log(index);
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        mainContainer.appendChild(projectDiv);
        addTodoBtn(index,proj); 

    }
   addProjectButton.addEventListener("click",addProject);

    const appendToProject = (index,element)=> {
        const project = document.querySelectorAll(".project");
        project[index].appendChild(element);

    }
    const addTodoBtn = (index,proj)=> {

        const addTodoButton = document.createElement("button");
        addTodoButton.textContent = "ADD TASK";
        addTodoButton.classList.add("addTodoBtn");
        appendToProject(index,addTodoButton);
        addTodoButton.addEventListener("click",()=> addTodo(index,proj));
        
    }


    const addTodo = (index,proj)=>{ 
        toDoManager.addTodoToProject(proj);
        const addTodoButton = document.querySelectorAll(".addTodoBtn");
        const title = document.createElement("p");
        const description = document.createElement("p");

        title.textContent = toDoManager.projectsArray[index].getTodos()[index].getTitle();
        description.textContent = toDoManager.projectsArray[index].getTodos()[index].getDescription();
        
        addTodoButton[index].before(title);
        addTodoButton[index].before(description);   

    }
})();


export {screenController};