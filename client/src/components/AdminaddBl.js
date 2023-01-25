import React from 'react'
import { Link} from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function AdminaddBl() {

    const { register, handleSubmit, formState:{ errors}} = useForm({
        defaultValues:{
            subj:'',
            content:'',
            
        }
    })

    const createBlog = (values) => {
        const {subj, content} = values
        console.log(values);
      

        axios.post('http://localhost:3001/addBlog', {
            subj,
            content
        }).then(()=> {
            window.alert("blog created ! ");
            window.location.reload(true);

        }).catch((err) => {
            console.log("smth went wrong !!")
        })
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
                <h1>Add a post</h1>
                <h3>Post's title</h3>
                <input type="text" name="subj"  class="box" {...register("subj")} />

                <h3>content</h3>
                <textarea name="content" class="box" rows={20} cols={20} {...register("content")}/>
               
                <br/>
                <button onClick={handleSubmit(createBlog)}  class="btn2" name="add">A D D  </button>
                
              
            </form>  
            </div>
            </div>
        </div>
    </div>









  )
}

export default AdminaddBl