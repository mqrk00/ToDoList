
const toDoManager =  (() => {

    const createTodos = (title, description, dueDate, priority) => {
        const getTitle = () => title;
        const getDescription = () => description;
        const getDueDate = () => dueDate;
        const getPriority = () => priority;
      
        return { getTitle, getDescription, getDueDate, getPriority };
      };
      
      const makeTodo = () => {
        const todo = createTodos("title", "desc", "date", 12);
        return todo;
      };

    let project = [];


  const addToProject = () => {
    project.push(makeTodo());
  };

  let projectsArray = [];

  const addToProjectsArray = () => {
    projectsArray.push(project);
  };

  const getProject = ()=>  project;


  return {createTodos,getProject,addToProject,addToProjectsArray};
})();

export {toDoManager};
