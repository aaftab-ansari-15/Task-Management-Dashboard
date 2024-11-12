//Add
<Button
  variant="outlined"
  color="success"
  onClick={handleAddTaskClick}
  sx={{ backgroundColor: "#14b003", width: "50%", color: "white" }}
>
  <AddIcon /> Task
</Button>;

//Task Add
const handleAddTaskClick = () => {
  dispatch(addTaskFrom(true));
};
