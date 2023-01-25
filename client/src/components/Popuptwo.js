import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';


function Popuptwo({closeModal}) {
    const { register, handleSubmit, formState:{ errors}} = useForm({
        defaultValues:{
            title:'',
            desc:'',
            status:'',
            priority:''
        }
    })



   /* const createTask = (values) => {
        const {title, desc, status, priority } = values
        console.log(values);
         
        
        axios.post('http://localhost:3001/addTask', {
            title,
            desc,
            status,
            priority,
            project: id._id
        }).then(()=> {
            window.alert("task created ! ");
            window.location.reload(true);

        }).catch((err) => {
            console.log("smth went wrong !!")
        })
    }*/




  return (
    <div className="modalBg">
        <div className="modalcont">
           <button className="x" onClick={() => closeModal(false)}>X</button> 
            <div className="mbody">
            <div className='formcontainer'>
                <h1 style={{color:"#ff5883"}}>Create your task</h1>
                <form>
                    <h3>Task Name</h3>
                    <input type="text" placeholder='Title'  class="box"  {...register("title")}/>
                    <h3>Description</h3>
                    <textarea type="text"  class="box" rows={5} cols={30}  {...register("desc")}/>
                    <h3>Priority</h3>
                    <select className="box" name="pr" {...register("status")}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                   
                </select>
                <select className="box" name="level" {...register("priority")}>
                    <option value="todo">To do</option>
                    <option value="inprogress">In progress</option>
                    <option value="done">Done</option>
                   
                </select>
                
               
                <button className='btn2' >Create</button>

                </form>

                </div>

            </div>
        </div>
    </div>

    )
}

export default Popuptwo