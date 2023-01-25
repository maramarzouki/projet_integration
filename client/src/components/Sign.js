import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";

//here
import { useSignup } from '../hooks/useSignup';

function Sign() {
  const [lastName, setLastName]= useState('');
  const [firstName, setfirstName]= useState('');
  const [email, setemail]= useState('');
  const [birthDate, setdate]= useState('');
  const [password, setPassword]= useState('');

//here
const {signup, isLoading, error} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(firstName, lastName, email, password, birthDate)
  }

  return (
<div className='Signup'>
   <img className='sign' src='images/s.png' alt='sign' ></img>

        <section class="form-container">  
       
          <form onSubmit={handleSubmit}>
            <h3>Enter your last name</h3>
            <input type="text" 
            placeholder='last name' 
            className="box"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            />


            <h3>Enter your first name</h3>
            <input type="text" 
            placeholder='first name' 
            className="box"
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
            />


            <h3>Enter your date of birth</h3>
            <input type="date" 
             className="box"
             onChange={(e) => setdate(e.target.value)}
            value={birthDate}
             />

            <h3>Enter your mail</h3>
            <input type="email" 
            placeholder='mail'
             className="box"
             onChange={(e) => setemail(e.target.value)}
            value={email}
             />

            <h3>Enter your password</h3>
            <input type="password" 
             className="box"
             onChange={(e) => setPassword(e.target.value)}
            value={password}
             
             />
            <button disabled={isLoading} type='submit' className = "btn3">Sign up </button>
                <p>already have an account ?</p>
                <Link to="/log" className="btn2">Login now</Link >

              {error && <div className='error'>{error}</div>}
          </form>

       </section>
</div> 
        
        )
}

export default Sign