import React, {useState} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

function AdminUpBl() {

    const[blog, setBlogs] = useState({
        subj: '',
        content:''
       
    });


    const handleChange = (e)=>{
        setBlogs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    }

    const location = useLocation();
    const blogId = location.pathname.split("/")[2];

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:3001/updateBlog/" + blogId, blog);
            alert("the post is edited ! you can go back !");
           
        }catch(err){
            console.log(err);
        }
    }


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
            <div className='form-container'>
            <form>
                <h1>Edit a post</h1>
                <h3>Post's title</h3>
                <input type="text" name="subj"  class="box" onChange={handleChange} />

                <h3>content</h3>
                <textarea name="content" class="box" rows={20} cols={20} onChange={handleChange}/>
               
                <br/>
                <button onClick={handleClick}  class="btn2" name="add">edit  </button>
                
              
            </form>  
            </div>
            </div>
        </div>
    </div>
  )
}

export default AdminUpBl