import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return(
      <>
        {tasks.map((task, index) => (
            <Task  key={index} task={task} 
             onDelete={onDelete} onToggle={onToggle}/* << they are props that are sent to TASK.JS */  />
        ))}
      </>
  ) 
};

export default Tasks
