import React, { useState, useEffect } from 'react'
import './user.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

function User() {
    //showing the bars
    const [isActive, setActive] = useState("false");
    const handleToggle = () =>{
        setActive(!isActive);
    }

    //get user details
    const [lastName, setlastName] = useState('')
    const [firstName, setfirstName] = useState('')
    const [email, setemail] = useState('')
    const [id, setid] = useState('')

    useEffect(() => {
        const getDetails = () =>{
            const token = localStorage.getItem('Token')
            const id = jwt_decode(token)
           
            axios.get(`http://localhost:3001/getOneUser/${id._id}`)
            .then(user =>{
                setid(user.data._id)
                setlastName(user.data.lastName)
                setfirstName(user.data.firstName)
                setemail(user.data.email)
            } )

        }
        getDetails();  
    })






  return (
    <div className='user'>
        <div className='container'>
            <div className={isActive ? 'sidebar-menu' : ' sidebar-menu activestate'}>
                <h1 className="heading">SS C H E D I O</h1>
                <ul>
                   
                    <li className=" selected">
                        <Link to={'user'} ><i class="fas fa-house-user"></i><span>Dashboard</span></Link>
                    </li>
                  
                    
                    <li>
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

                <div className="mainn">
                <h1>Welcome to your dashboard</h1>
                    
                    
                    
                    <div className="mbody">
                    <div className='formcontainer'>
                    <i style={{fontSize:"40px", marginBottom:"5px"}} className="fas fa-user-circle"></i>

                        <h3 style={{color: "#826AED"}}>First name</h3>
                        <h3>{firstName}</h3>
                        <br/>
                        <h3 style={{color: "#826AED"}}>Last name</h3>
                        <h3 >{lastName}</h3>
                        <br/>
                        <h3 style={{color: "#826AED"}}>mail</h3>
                        <h3>{email}</h3>
                        <br/>
                       
                        <Link to={`/userprofil/${id}`} className="btn4">Update profile</Link >
                        <Link className='btn5' to={'/logout'}>LOGOUT</Link>
                        


                

                </div>
                       </div>
                       <div className="mbody">
                       <div className='formcontainer'>
                         <p>Make your projects, tasks, and to do list,
                             you can also have a concentration session with pomododro 

                         </p>
                         </div>
                        </div>                     

                </div>
              

               




            </div>



        </div>
    </div>
  )
}

export default User