import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Todo from './Todo/Todo';
import TodoForm from './Todo/TodoForm';

import './user.css';

function UserTodo() {
    //showing the bars
        const [isActive, setActive] = useState("false");
        const handleToggle = () =>{
            setActive(!isActive);
        }


    //todo
   

  return (

    <div className='UserTodo'>
        <div className='container'>
          <div className={isActive ? 'sidebar-menu' : ' sidebar-menu activestate'}>
                <h1 className="heading">SS C H E D I O</h1>
                <ul>
                
                    <li >
                        <Link to={'user'} ><i class="fas fa-house-user"></i><span>Dashboard</span></Link>
                    </li>
                
                    
                    <li >
                        <Link to={'userdash'}><i class="fas fa-folder"></i><span>Projects</span></Link>
                    </li>
                    <li>
                        <Link to={'notes'}><i class="fas fa-file"></i><span>Notes</span></Link>
                    </li>
                    <li className=" selected">
                        <Link to={'todo'}><i class="fas fa-list"></i><span>To do list</span></Link>
                    </li>
                    <li>
                        <Link to={'pomodoro'}><i class="fas fa-clock"></i><span>Pomodoro</span></Link>
                    </li>
                    <li>
                        <Link to={'calendar'}><i class="fas fa-calendar-check"></i><span>Calendar</span></Link>
                    </li>
                </ul>
            </div>
            <div className={isActive ? "main" : "main activ"}>
                <div className="topbar">
                    <div className = {isActive ? "toggle" : " activestate" }>
                    <i class="fas fa-bars" onClick={ handleToggle }></i>

                    </div>
                
                </div>
                <h1> Your To do List !</h1>

                <div className="mainn">
                    <TodoForm/>
                    <Todo></Todo> 
                </div>


        </div>
    </div>

    </div>
  )
}

export default UserTodo