const toDoManager = (() => {
  const project = (ProjectName) => {

    let todos = [];

    const getProjectName = () => ProjectName;
    const getTodos = () => todos;

    return { getProjectName, getTodos };
  };


  const makeProject = () => {
    const proj = project("ProjectName");
    addToProjectsArray(proj);
    return proj;
  };

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

  const addTodoToProject = (proj) => {
    proj.getTodos().push(makeTodo());
  };

  let projectsArray = [];

  const addToProjectsArray = (proj) => {
    projectsArray.push(proj);
  };

  return { addTodoToProject, makeProject,projectsArray};
})();

export { toDoManager };
