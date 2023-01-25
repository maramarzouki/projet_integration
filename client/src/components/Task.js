import React, { useState } from 'react'
import './user.css';

function Task(props) {

  const {addTask, deleteTask, moveTask, task} =props;
  const [urgencyLevel, seturgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  const seturgency = (event) => {
    seturgencyLevel(event.target.attributes.urgency.value);

  }

  const handleSubmit = (event) =>{
      event.preventDefaults();
      if(formAction === "save") {
        if(collapsed) {
          setCollapsed(false);

        } else {
          let newTask = {
            id: task.id,
            title: event.target.elements.title.value,
            description: event.target.elements.description.value,
            urgency: urgencyLevel,
            status: task.status,
            isCollapsed:true,

          };

          addTask(newTask);
          setCollapsed(true);
        };
      };

      if(formAction ==="delete"){
        deleteTask(task.id);
      };

  }

  const handleMoveLeft = () =>{
    let newStatus = "";

    if(task.status === "In progress"){
      newStatus ="Backlog"   
    } else if (task.status === "Done"){
      newStatus = "In Progress";
    }


    if(newStatus !== ""){
      moveTask(task.id, newStatus);

    }


  }

  const handleMoveRight = () => {
    let newStatus = "";

    if(task.status === "Backlog"){
      newStatus ="In progress"   
    } else if (task.status === "In progress"){
      newStatus = "Done";
    }


    if(newStatus !== ""){
      moveTask(task.id, newStatus);
      
    }

  }


  return (
    <div className= { `task ${collapsed ? "collapsedTask" : "" }` }>
      <button onClick={handleMoveLeft} className="btmove">&#171;</button>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <input type="text" className='titleinput' name="title" placeholder='Enter title' disabled={collapsed} defaultValue={task.title}/>
        <textarea rows="2" className='descinput' name='decription' placeholder='Enter description' defaultValue={task.description} />

        <div className="urgencyLabels">
          <label className= {`low ${urgencyLevel === "low" ? "selectedLevel" : ""}`}>
            <input urgency="low"  onChange={seturgency} type="radio" name="urgency" />
            low
          </label>


          <label className= {`medium ${urgencyLevel === "medium" ? "selectedLevel" : ""}`}>
            <input urgency="medium"  onChange={seturgency} type="radio" name="urgency" />
            medium
          </label>

          <label className= {`high ${urgencyLevel === "high" ? "selectedLevel" : ""}`}>
            <input urgency="high"  onChange={seturgency} type="radio" name="urgency" />
            high
          </label>
        </div>
       <button onClick={() => {setFormAction("save")}} className="btn4">
        {collapsed ? "Edit" : "save"}
       </button>

       {collapsed && (<button onClick={() => {setFormAction("delete")}} className="butdelete"
      >X</button> )}

      </form>
      <button onClick={handleMoveRight} className="btmove">&#187;</button>
    </div>
  )
}

export default Task