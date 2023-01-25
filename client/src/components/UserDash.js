import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import Popupeye from './Popupeye';
import PopupPen from './PopupPen';
import jwt_decode from 'jwt-decode'
import {useHistory} from 'react-router-dom';

import './user.css';





function UserDash() {
    let history = useHistory();

//show projects
const [projectlist, setprojectlist] = useState([]);
useEffect(() => {
    const token = localStorage.getItem('Token')
     const id = jwt_decode(token)
    axios.get(`http://localhost:3001/getAllProjects/${id._id}`).then((response) => {
        setprojectlist(response.data);
    });
    
}, []);

const deleteproject = (id) =>{
    if(window.confirm("are you sure you want to delete this project")) {
        axios.delete(`http://localhost:3001/deleteProject/${id}`).then( () => {
        window.location.reload(false);
    });
    }
    
   
};


/*const gotoTasks = () =>{
    let projectId = lis*
    localStorage.setItem('projectId', projectId)
    axios.get(`http://localhost:3001/getProject/${projectId}`)
    .then(()=>{
        history.push(`/usertask/${projectId}`)
        console.log(projectId)

    })
}*/


//showing the bars
const [isActive, setActive] = useState("false");
const handleToggle = () =>{
    setActive(!isActive);
}


//Modal , popup
const[openModal, setopenModal] = useState(false);

//popup eye
const[openModalEye, setopenModalEye] =useState(false);

//popup pen
const[openModalPen, setopenModalPen]= useState(false);






  return (
    <div className='userdash'>
                    {openModal && <Popup closeModal={setopenModal}/>}
                    {openModalEye && <Popupeye closeModalEye={setopenModalEye}/>}
                    {openModalPen && <PopupPen closeModalPen={setopenModalPen}/>}

        <div className='container'>
            <div className={isActive ? 'sidebar-menu' : ' sidebar-menu activestate'}>
                <h1 className="heading">SS C H E D I O</h1>
                <ul>
                   
                    <li >
                        <Link to={'user'} ><i class="fas fa-house-user"></i><span>Dashboard</span></Link>
                    </li>
                  
                    
                    <li className=" selected">
                        <Link to={'userdash'}><i class="fas fa-folder"></i><span>Projects</span></Link>
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
                {/* C A R D S */}
                <div className="cardbox">
                    <div className="cardd">
                        <div className="concard">
                            <div className="numbers">3</div>
                            <div className="cardname">Your projects</div>
                        </div> 
                        <div className="icon">
                             <i class="fas fa-folder"></i>
                        </div>                   
                    </div>
                </div>
                <button className='b1' onClick={() => {setopenModal(true);}  } >create new project</button><br/>

                {/* P R O J E C T   L I S T */}

               <div className="containerprojects">
                {projectlist.map((project, key) => (
                        <div key={key} className="projectcard"> 
                        <div className="phead">
                            <i class="fas fa-clipboard"></i>
                            <div className="rounded">
                                <span className="circle"></span>
                            </div>
                      </div>
                        <div className="pbody">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <p> for :{project.deadline}</p>
                            <div className="actions">
                            <i className="fas fa-eye" onClick={() => {setopenModalEye(true);}  }></i>
                            <Link to= {`/popupstylo/${project._id}`} className="pen"><i className="fas fa-pen"></i></Link>
                            <i className="fas fa-trash" onClick={ () => {deleteproject(project._id)}}></i>
    
                            </div>
                            <br/>
                           <Link to={`/usertask/${project._id}`}><button className='btn2' >check tasks</button></Link> 
                        </div>
                    
                    
                    </div>

                ))}
                
                
                
               </div>

               




            </div>
        </div>
    </div>
  )
}

export default UserDash