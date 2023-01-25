import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode'

function Popup({closeModal}) {

   /* const[project, setprojects] = useState({
        title: '',
        description:'',
        deadline:''
    });*/

    //add project
    /*const createproject = () => {
        const token = localStorage.getItem('Token')
        const id = jwt_decode(token)
        axios.post('http://localhost:3001/addProject', project);
    }*/

    const { register, handleSubmit, formState:{ errors}} = useForm({
        defaultValues:{
            title:'',
            description:'',
            deadline:''
        }
    })
    const createProject = (values) => {
        const {title, description, deadline } = values
        console.log(values);
        const token = localStorage.getItem('Token')
        const id = jwt_decode(token)

        axios.post('http://localhost:3001/addProject', {
            title,
            description,
            deadline,
            user: id._id
        }).then(()=> {
            window.alert("project created ! ");
            window.location.reload(true);

        }).catch((err) => {
            console.log("smth went wrong !!")
        })
    }


  return (
    <div className="modalBg">
        <div className="modalcont">
           <button className="x" onClick={() => closeModal(false)}>X</button> 
            <div className="mbody">
            <div className='formcontainer'>
                <form>
                    <h3>Project Name</h3>
                    <input type="text" placeholder='Title'  class="box" {...register("title")} />
                    <h3>Description</h3>
                    <textarea type="text"  class="box" {...register("description")} rows={5} cols={30}  />
                    
                
                <h3>Project end day</h3>
                <input type="date" className='box' {...register("deadline")}/>
                <button className='btn2' onClick={handleSubmit(createProject)}>Create</button>

                </form>

                </div>

            </div>
        </div>
    </div>

    )
}

export default Popup