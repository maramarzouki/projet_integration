import React from 'react'
import { Link} from 'react-router-dom';

function AdminUpdate() {
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
                        <div className='menuitem '>
                        <Link to ="/adminusers"><i class="fas fa-users"></i> <span> Users </span></Link>
                        </div>
                    </div>

                   

                    <div className='menu'>
                        <div className='menuitem '>
                        <Link to ="/adminblogs"><i class="fas fa-clipboard"></i>  <span> Blogs </span></Link>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='menuitem active'>
                        <Link to ="/adminprofil"><i class="fas fa-id-card"></i>   <span> Profil </span></Link>
                        </div>
                    </div>
            </div>
            <div className='maindash2'>
            <div className='form-container'>
            <form>
                <h1>Update Admin informations</h1>
                <h3>Enter your name</h3>
                <input type="text" name="name"  class="box" />
                <h3>Enter your old password</h3>
                <input type="password" name="ps1" class="box" />
                <h3>Enter your new password</h3>
                <input type="password" name="ps2" placeholser="enter your password" class="box" />
                <h3>Confirm your new password</h3>
                <input type="password" name="ps3" placeholser="enter your password" class="box" />
                
                
               
                <br/>
                <input type="submit" value="U P D A T E"  class="btn2" name="add"/>
                
              
            </form>  
            </div>
            </div>

        </div>
    </div>
  )
}

export default AdminUpdate