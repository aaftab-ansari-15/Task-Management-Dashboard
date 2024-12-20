const priorityOrder = { Low: 1, Medium: 2, High: 3 };
export const sortTasksByPriority = (tasks, order) => {
  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => {
    const priorityA = priorityOrder[a.priority] || 0;
    const priorityB = priorityOrder[b.priority] || 0;
    if (order === "asc") {
      return priorityA - priorityB; // Ascending by priority
    } else {
      return priorityB - priorityA; // Descending by priority
    }
  });
  return sortedTasks; // Return the sorted copy
};
export const sortTasksByDueDate = (tasks, order) => {
  const sortedTasks = [...tasks];
  sortedTasks.sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    if (order === "asc") {
      return dateA - dateB; // Ascending order by date
    } else {
      return dateB - dateA; // Descending order by date
    }
  });

  return sortedTasks;
};

export const getSortDetails = (sortOption) => {
  switch (sortOption) {
    case "priority-asc":
      return { sortBy: "priority", sortOrder: "asc" };
    case "priority-desc":
      return { sortBy: "priority", sortOrder: "desc" };
    case "due-date-asc":
      return { sortBy: "dueDate", sortOrder: "asc" };
    case "due-date-desc":
      return { sortBy: "dueDate", sortOrder: "desc" };
    default:
      return { sortBy: "", sortOrder: "" }; 
  }
};