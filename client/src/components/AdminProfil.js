import React from 'react'
import { Link} from 'react-router-dom';

function AdminProfil() {
  return (
    <div className="dashboard">
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
                <h1 className="heading"> A D M I N </h1>

                <div className='dash'>
                        <div class="box2">
                            <h4>Update admin profil </h4>
                            <Link to={"adminupdate"} class="btn6">update</Link>
                        </div>
                        <div class="box2">
                            <h4>Add new Admin</h4>
                            <Link to={"adminadd"} class="btn6">add</Link>
                        </div>
                </div>
                <br/><br/>
                <h1 className="heading"> List of admins</h1>
                
                <div className="books-slider">
                    <div className="wrapper">
                        
                        <div className="boxx">
                            <div className="content">
                            <i class="fas fa-id-card"></i> <h3>Lee Yubin</h3>
                            <h3>Admin 1</h3>
                            <h3>leeyubin@gmail.com</h3>

                            </div>
                        </div>

                        <div className="boxx">
                            <div className="content">
                            <i class="fas fa-id-card"></i> <h3>Ron wizley</h3>
                            <h3>Admin 2</h3>
                            <h3>ronwizley@gmail.com</h3>

                            </div>
                        </div>



                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default AdminProfil