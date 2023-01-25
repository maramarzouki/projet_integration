import React from 'react';
import { Link} from 'react-router-dom';

function AdminMessages() {
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
                        <div className='menuitem'>
                        <Link to ="/adminusers"><i class="fas fa-users"></i> <span> Users </span></Link>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='menuitem active '>
                        <Link to ="/adminmessages"><i class="fas fa-envelope"></i>  <span> Contacts </span></Link>
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
                    <h1 className='heading'>Messages From Users</h1>
                    <div className='box-container'>
                        <div className='box'>
                            <h3><span>User id :</span> 1</h3>
                            <h3><span>User name : </span>foulen </h3>
                            <h3><span>email:</span> foulen@gmail.com</h3>
                            <h3><span>Message :</span></h3> 
                            <br/> 
                            <p>
                            hey how are you ?

                            </p>
                            <br/>
                            <Link to={""} className="btn5">delete Message</Link>
                        </div>



                </div>
         </div>
    </div>
    </div>
  )
}

export default AdminMessages;