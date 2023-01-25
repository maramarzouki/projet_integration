import React from 'react';
import { Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
function AdminDash() {

  const [nbofusers, setnbofusers] = useState();
  useEffect(() => {
      
      axios.get('http://localhost:3001/getAllUsers').then((response) => {
          setnbofusers(response.data.nbOfUsers);
          console.log(response.data);
      });
      
  }, []);
  return (
   <div className='dashboard'>
 
        <div className='glass'>
            <div className='sidebar'>
                {/* L O G O */}
               <div className='logoa'>
                <h1>S C H E D I O</h1>
                
                </div>
                <h2> A D M I N </h2>

                 {/* M E N U */}
               <div className='menu'>
                    <div className='menuitem active'>
                    <Link to="/admindash"><i class="fas fa-home"></i><span> Dashboard  </span></Link>
                    </div>
                </div>

                <div className='menu'>
                    <div className='menuitem '>
                    <Link to ="/adminusers"><i class="fas fa-users"></i> <span> Users </span></Link>
                    </div>
                </div>

              

                <div className='menu'>
                    <div className='menuitem'>
                    <Link to ="/adminblogs"><i class="fas fa-clipboard"></i>  <span> Posts </span></Link>
                    </div>
                </div>

                <div className='menu'>
                    <div className='menuitem'>
                    <Link to ="/adminprofil"><i class="fas fa-id-card"></i>   <span> Profil </span></Link>
                    </div>
                </div>
                <div className='menu'>
                    <div className='menuitem'>
                    <Link to ="/logout"><i class="fas fa-id-user"></i>   <span> Logout </span></Link>
                    </div>
                </div>
            </div>  

             {/*MAINDASH */}
             <div className='maindash'>
                    <h1>D A S H B O A R D</h1>
                    <br/>
                    <br/>
                    <br/>

                    
                    <div className='cards'>
                        <div className='card1'>
                          <h2>Welcome Admin</h2>
                          
                        </div>
                        <div className='card2'>
                          <div className='contentcard'>
                            <i class="fas fa-user"></i>
                              <h2>Admin 2 </h2> 
                             
                          </div>
                          <h3>is now connecting</h3>
                        </div>
                        <div className='card21'>
                          <div className='contentcard'>
                            <i class="fas fa-user"></i>
                              <h2>Ron wizley </h2> 
                             
                          </div>
                        </div>
                        
                      
                        
                        </div>

                      <div className='users'>
                        <div className='card3'>
                           <h2> Users using this application</h2>
                           <div className='contentcard'>
                           <i class="fas fa-users"></i><h3>{nbofusers}</h3>
                           </div>
                          </div>     
                      </div>
                     
                      <div className='users'>
                        <div className='card5'>
                           <h2>check and add posts  in application</h2>
                           <div className='contentcard'>
                           <i class="fas fa-clipboard"></i><h3></h3>
                           </div>
                          </div>     
                      </div>
                      

                    </div>
                    {/*sidedash */}
                  

        </div>
   </div>
  )
}

export default AdminDash