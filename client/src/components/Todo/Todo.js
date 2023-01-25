import React from 'react'
import { useState } from 'react'
import './todo.css'
import jwt_decode from 'jwt-decode'
import { useEffect } from 'react';
import axios from 'axios';

function Todo() {
    const [isChecked, setChecked] = useState("false");

    const MakeItChecked = () => {
        setChecked(!isChecked);
    };


    //show to do
    const [todolist, settodotlist] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('Token')
         const id = jwt_decode(token)
        axios.get(`http://localhost:3001/getToDoListTasks/${id._id}`).then((response) => {
            settodotlist(response.data);
        });
        
    }, []);

    const deletetodo = (id) =>{
        if(window.confirm("are you sure you want to delete this todo")) {
            axios.delete(`http://localhost:3001/deleteToDoListTask/${id}`).then( () => {
            window.location.reload(false);
        });
        }
        
       
    };


  return (
    <div className="todo">

        {todolist.map((todo, key) => (

            <div key={key} className= "todo-row" >

            <h1 className={isChecked ? "normal" : "checked"}>{todo.title}</h1>
            <button><i className='fas fa-check' onClick={MakeItChecked}></i></button> 

            <button className='trash'><i className='fas fa-trash' onClick={ () => {deletetodo(todo._id)}}></i></button>
            </div>
        ))}
        
      
        
    </div>
  )
}

export default Todo