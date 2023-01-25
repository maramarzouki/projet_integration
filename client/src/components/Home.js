import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
  return (
    <div className='home'>
       <Navbar/>
        <br/>
       <div className='container'>
            <div className='introContainer'>
              <div className='intro'>
                  <img src="images/org2.png" alt="intro" width="1325"></img>
                  <Link to="/signup" className="btnInt"> Start your journey</Link>
              </div>
            </div>  

            <div className='cont2'>
              <h1>Discover SCHEDIO</h1>
              <h2>SCHEDIO is an online software for effective time management, week planning,
                task tracking and scheduling</h2>

                <br/><br/><br/>
              
            </div>

            <div className='cont3'>
               <img src="images/todo2.png" alt="todo" width="280" height="250"></img>
               <div className='text'>
                  <h1>Make your To Do list</h1>
                  <br/>
                  <br/>
                  <p>add your tasks and once you compleate them, <br/>mark them. It will help you feel accomplished <br/>and productive</p>
               </div>
            </div>

            <div className='cont3'>
               <img src="images/prm2.png" alt="todo" width="280" height="250"></img>
               <div className='text'>
                  <h1>Manage your projects</h1>
                  <br/>
                  <br/>
                  <p>create tasks and mark them as in progress,or done <br/>  </p>
               </div>
            </div>

        </div>

      
    </div>
  )
}

export default Home