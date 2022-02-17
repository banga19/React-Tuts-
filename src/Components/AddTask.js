import { useState } from "react";


const AddTask = ( { onAdd } ) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState("fasle") // const [stateName, MethodToChangeTheBehaviorOfTheState] = useState('')


  const onSubmit = (e) => {
    e.preventDefault() //prevents app displaying info on the frontpage

    if(!text) { // for validation  conditional to check if inputted value is equal to text.string
        alert('Please Add a task of your choice')
        return
    }

    onAdd({text, day, reminder})

    // Code below clears the form after user input
    setText('')
    setDay('')
    setReminder(false)

  }

  return ( 
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label> TASK </label>
            <input type='text' placeholder='Add a new task' 
            value={text} 
            onChange={(e) => setText(e.target.value)} />
        </div>
        <div className="form-control">
            <label> Day $ Time </label>
            <input type='text' placeholder='Add Day & Time' 
            value={day} 
            onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label> Set Reminder </label>
            <input type='checkbox' 
            checked={reminder}
            value={reminder} 
            onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>
        <input type='submit'  value='Save Task' className='btn btn-block'/>
    </form>

)};

export default AddTask;
