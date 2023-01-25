import React, {useState} from 'react'
import './user.css';
import { Link } from 'react-router-dom';
import Popuptwo from './Popuptwo';
import { useEffect } from 'react';
import axios from 'axios';



function UserTask() {
    const [isActive, setActive] = useState("false");
    const handleToggle = () =>{
    setActive(!isActive);
    }



// popup task

const[openModal, setopenModal] = useState(false);

const [tasklist, settasklist] = useState([]);

/*const goToDetails = () =>{
    useEffect(() => {
    // setProjectId(searchedProject._id)  
    //localStorage.setItem('ProjectID',"63cb88e765fa439e8c5e4d01") 
    axios.get(`http://localhost:3001/getTasks/63cb88e765fa439e8c5e4d01`).then((response) =>{
        settasklist(response.data);
    then(()=>{
        //console.log(searchedProject);
    })

} )} )}*/





    
  return (
    <div className='UserTask'>
             {openModal && <Popuptwo closeModal={setopenModal}/>}


    <div className="container">
        <div className={isActive ? 'sidebar-menu' : ' sidebar-menu activestate'}>
                <h1 className="heading">SS C H E D I O</h1>
                <ul>
                
                    <li >
                        <Link to={'userdash'} ><i class="fas fa-house-user"></i><span>Dashboard</span></Link>
                    </li>
                
                    
                    <li className=" selected">
                        <Link to={'usertasks'}><i class="fas fa-folder"></i><span>Projects</span></Link>
                    </li>
                    <li>
                        <Link to={'notes'}><i class="fas fa-file"></i><span>Notes</span></Link>
                    </li>
                    <li>
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
                <button className='b1' onClick={() => {setopenModal(true);}  }>create new task</button><br/>


                <div className="mainn">

                <section className='sec'>
                    <div className="status">
                        
                        
                        </div>
                        <div className="task-container">
                        <div className="task">
                            <h3>Doing some research</h3>
                            <p>in google, youtube and ask opinions</p>
                            <p className='priority'>HIGH</p><br/>
                            <div className="actions">

                            <p className='level'>To do</p>
                            <i className="fas fa-pen" ></i>
                            <i className="fas fa-trash" ></i>
                            </div>
                        </div>
                       
                        </div>
                       
                        
                </section>
                </div>



        </div>




    </div>
    </div>
  )
}

export default UserTask