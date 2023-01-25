import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useForm } from 'react-hook-form';




function Loginadmin() {



    let history = useHistory();
    

    const [alert, setAlert] = useState("");
    const {register, handleSubmit, formState : {errors} } = useForm({
      defaultValues:{
        email:'',
        password:''
      }
    });

    const login = async (values) =>{
      const{email,password} = values;
      console.log(values);
      await axios.post('http://localhost:3001/signAdminIn', {
        email,
        password
      })
      .then(response => {
        if(response.data.auto ===false)
        {
          setAlert(response.data.msg)
        }
        else{
          localStorage.setItem('Token', response.data.token);
          
          if(localStorage.getItem('Token')){
            history.push('/admindash');
            console.log('res', response.data.token);
          }
        }
      })
      .catch((err)=>{
        window.alert("wrong password or username");
      })
    }

    



  return (
    <div className='Login'>
        <section class="form-container">
          <form onSubmit={handleSubmit(login)}>
          <h3>Enter your email</h3>
          <input type="email" name="email" className='box' placeholder='Email' {...register("email", {required:"This field is required!"})}/>
                  <p>{errors.email && errors.email.message}</p>

          <h3>Enter your password</h3>
          <input type="password" name="password" className='box' placeholder='Password' {...register("password", {required:"This field is required!"})}/>
          <p>{errors.password && errors.password.message}</p>

          <button type='submit'  className = "btn2">Log in  </button>
                <p>Don't have an account ?</p>
                <Link to="/signup" class="btn3">sign up now</Link>
                {alert && <p>{alert}</p>}

          </form>
        

       </section>
    </div>
  )
}

export default Loginadmin