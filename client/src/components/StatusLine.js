import React from 'react'
import Task from './Task';
import './user.css';

function StatusLine(props) {
    const {status, tasks, addTask, deleteTask, addEmptyTask, moveTask} = props;
    let taskList, tasksForStatus;

    const handleAddEmpty = () =>{
        addEmptyTask(status);
    }

    if(tasks){
        tasksForStatus = tasks.filter((task) => {
            return task.status === status;
        });
    }

    if(tasksForStatus) {
        taskList = tasksForStatus.map((task) => {
            return(
                <Task
                addTask={(task) => addTask(task)}
                deleteTask={(id) => deleteTask(id)}
                moveTask={(id, status) => moveTask(id, status)}
                key ={task.id}
                task={task}
                />
            );
        });
    }
  



    return (
    <div className='StatusLine'>
        <h3>{status}</h3>
       
        <button onClick={handleAddEmpty} className='butadd'>+</button>

    </div>
  )
}

export default StatusLine;