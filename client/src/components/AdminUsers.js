import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link} from 'react-router-dom';

function AdminUsers() {

    const [user, setuserlist] = useState([{}]);
    useEffect(() => {
        
        axios.get('http://localhost:3001/getAllUsers').then((response) => {
            setuserlist(response.data.userList);
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
                        <div className='menuitem '>
                        <Link to="/admindash"><i class="fas fa-home"></i><span> Dashboard  </span></Link>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='menuitem active'>
                        <Link to ="/adminusers"><i class="fas fa-users"></i> <span> Users </span></Link>
                        </div>
                    </div>


                    <div className='menu'>
                        <div className='menuitem'>
                        <Link to ="/adminblogs"><i class="fas fa-clipboard"></i>  <span> Blogs </span></Link>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='menuitem'>
                        <Link to ="/adminprofil"><i class="fas fa-id-card"></i>   <span> Profil </span></Link>
                        </div>
                    </div>
                </div>

            <div className='maindash2'>
                <h1 className='heading'>Users Accounts</h1>

                
                <div className="box-container">

                {user.map((user, key) => {
                   
                        <div key={key} className="box" >
                                                                
                        <h3>{user.firstName} </h3>
                        <h3>{user.email}</h3>
                       

                        </div>

                })}
                 

                       
              

                     

            

             
           

          </div>
                </div>
        </div>
    </div>
  )
}

export default AdminUsers