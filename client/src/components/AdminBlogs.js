import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link} from 'react-router-dom';

function AdminBlogs() {

    const [bloglist, setbloglist] = useState([]);
    useEffect(() => {
        
        axios.get('http://localhost:3001/getAllBlogs').then((response) => {
            setbloglist(response.data);
        });
        
    }, []);

    const deleteblog = (id) =>{
        if(window.confirm("are you sure you want to delete this blog")) {
            axios.delete(`http://localhost:3001/deleteBlog/${id}`).then( () => {
            window.location.reload(false);
        });
        }
   
    };





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
                        <div className='menuitem active'>
                        <Link to ="/adminblogs"><i class="fas fa-clipboard"></i>  <span> Posts </span></Link>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='menuitem'>
                        <Link to ="/adminprofil"><i class="fas fa-id-card"></i>   <span> Profil </span></Link>
                        </div>
                    </div>
            </div>
            <div className='maindash2'>
                <h1 className="heading"> P O S T S </h1>

                    <div class="box2">
                        <h3>Add a post </h3>
                        <Link to={"adminAddB"} class="btn6">add and post</Link>
                    </div>

                <div className="books-slider" style={{display:"flex", gap:"1rem"}}>
                   {bloglist.map((blog, key) => (
                        <div key={key} className="wrapper">
                            <div className="boxx">
                                <div className="icons">
                                    <Link ><i  className="fas fa-eye"></i></Link>
                                </div>
                                
                                <div className="content">
                                    <h3>{blog.subj}</h3>
                                    <Link  className="btn4" to= {`/adminupbl/${blog._id}`}>update</Link>
                                    <Link  className="btn5" onClick={ () => {deleteblog(blog._id)}}>delete</Link>

                                </div>
                            </div>
                        </div>
                   ))}
                    
                   
                   
                    
                </div>





            </div>
        </div>
    </div>
  )
}

export default AdminBlogs