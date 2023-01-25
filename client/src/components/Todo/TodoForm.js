import React from 'react'
import './todo.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import jwt_decode from 'jwt-decode'
function TodoForm() {

const { register, handleSubmit, formState:{ errors}} = useForm({
        defaultValues:{
            title:''
        }
    })

    const createTodo = (values) => {
      const {title} = values
      console.log(values);
      const token = localStorage.getItem('Token')
      const id = jwt_decode(token)

      axios.post('http://localhost:3001/addToDoListTask', {
          title,
          user: id._id
      }).then(()=> {
          window.alert("to do is created ! ");
          window.location.reload(true);

      }).catch((err) => {
          console.log("smth went wrong !!")
      })
  }


  return (
    <div className='form-filter__container'>
        <form className='todo-form'>
        <input 
          type='text' 
          placeholder='Add a todo'
          className='todo-input'
          {...register("title")}
          
        />
        <button className='todo-button' onClick={handleSubmit(createTodo)}> Add</button>
        </form>
        <p>Add a new todo to start planning today 🚀</p>
    </div>
  )
}

export default TodoForm