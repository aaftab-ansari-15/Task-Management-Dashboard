export const filterTasks = (tasks, filters) => {
  const filteredTasks = [...tasks];
  return filteredTasks.filter((task) => {
    return (
      (filters.priority === "" || filters.priority === task.priority) &&
      (filters.category === "" || filters.category === task.category) &&
      (filters.status === "" || filters.status === task.status)
    );
  });
};
export const searchTasks = (tasks, filter) => {
  const searchedTask = [...tasks]
  return searchedTask.filter((task) => {
    return task.title.toLowerCase().includes(filter.toLowerCase());
  });
};
