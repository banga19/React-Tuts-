import {FaTimes} from 'react-icons/fa' // << module containing react icons 

const Task = ({task, onDelete} /* << props recieved from TASKS.JS */) => {
  return(
    <div className='task'> 
        <h3>{task.text }  <FaTimes style={{ color:'red', cursor:'pointer' }}
         onClick={() => onDelete(task.id)}/> </h3>
        <h3>{task.day }</h3>
    </div>
  )
};

export default Task;
