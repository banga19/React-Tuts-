import Task from './Task'

const Tasks = ({ tasks, onDelete }) => {

    return(
      <>
        {tasks.map((task) => (
            <Task  key={task.id} task={task}  onDelete={onDelete}/* << they are props that are sent to TASK.JS */  />
        ))}
      </>
  ) 
};

export default Tasks
