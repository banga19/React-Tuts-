
const AddTask = () => {
  return (
    <form className="add-form">
        <div className="form-control">
            <label> TASK </label>
            <input type='text' placeholder='Add a new task' />
        </div>
        <div className="form-control">
            <label> Day $ Time </label>
            <input type='text' placeholder='Add Day & Time' />
        </div>
        <div className='form-control form-control-check'>
            <label> Set Reminder </label>
            <input type='checkbox' />
        </div>form
        <input type='submit'  value='Save Task' className='btn btn-block'/>
    </form>

)};

export default AddTask;
