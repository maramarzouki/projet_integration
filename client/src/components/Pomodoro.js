import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Finished from './pomodoro/Finished';
import Form from './pomodoro/Form';
import Timer from './pomodoro/Timer';
function Pomodoro() {
    //showing the bars
        const [isActive, setActive] = useState("false");
        const handleToggle = () =>{
            setActive(!isActive);
        }

    //timer
    const [timeLeft, setTimeLeft] = useState(0);   
    const [isPaused, setIsPaused] =useState(true);

  return (
    <div className='pomodoro'>
       <div className='container'>
         <div className={isActive ? 'sidebar-menu' : ' sidebar-menu activestate'}>
         <h1 className="heading">SS C H E D I O</h1>
                <ul>
                   
                    <li >
                        <Link to={'userdash'} ><i class="fas fa-house-user"></i><span>Dashboard</span></Link>
                    </li>
                  
                    
                    <li>
                        <Link to={'usertask'}><i class="fas fa-folder"></i><span>Projects</span></Link>
                    </li>
                    <li>
                        <Link to={'notes'}><i class="fas fa-file"></i><span>Notes</span></Link>
                    </li>
                    <li>
                        <Link to={'todo'}><i class="fas fa-list"></i><span>To do list</span></Link>
                    </li>
                    <li className=" selected">
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


                <h1>Pomodoro Timer</h1>
                <p>Boost your productivity and focus the right way ⏰</p>

                <div className="mainn">
                  <Form setTimeLeft={setTimeLeft} setIsPaused={setIsPaused} />
                  {timeLeft<0?
                    <Finished setTimeLeft={setTimeLeft} setIsPaused={setIsPaused}/>:
                    <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} 
                    isPaused={isPaused} setIsPaused={setIsPaused}/>
                     
                }
                    
                </div>

    </div>


         </div>
            </div>
        
  )
}

export default Pomodoro