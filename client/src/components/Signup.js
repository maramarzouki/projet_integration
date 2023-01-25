import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from 'axios';





function Signup() {
  let history = useHistory();

  const [alert, setAlert] = useState("");
  const creatuser = (values) =>{

    
  
    const{lastName, firstName, email, password} =values ;
    axios.post('http://localhost:3001/signUp', {
      lastName,
      firstName,
      email,
      password

    }).then((response) => {
      history.push("/login");


    }).catch((err) => {
      setAlert(err.message);
    })
  };

    const initialValues ={
        firstName:"",
        lastName:"",
        email:"",
        password : "",

      };
    
    const validationSchema = Yup.object().shape({
        firstName : Yup.string().min(3).max(20).required(),
        lastName :  Yup.string().min(3).max(20).required(),
        email:       Yup.string().email().required(),
        password :  Yup.string().min(4).max(15).required(),
    });
  


  return (
    <div className='Signup'>
                <img className='sign' src='images/s.png' alt='sign' ></img>

        <section class="form-container">

        <Formik className ="formik" initialValues={initialValues} onSubmit={creatuser} validationSchema={validationSchema}>
            <Form>

                <h3>Enter your last name</h3>
                <Field autoComplete="off" type ="text" name="lastName"  className="box"  />
                <ErrorMessage name="lastName" component="h4" />

                 <h3>Enter your first name</h3>
                <Field autoComplete="off" type ="text" name="firstName" className="box"   />
                <ErrorMessage name="firstName" component="h4" />

               


                <h3>Enter your mail</h3>
                <Field autoComplete="off" type ="email" name="email"   className="box" />
                <ErrorMessage name="mail" component="h4" />


                <h3>Enter your password</h3>
                <Field autoComplete="off" type ="password" name="password"  className="box"  />
                <ErrorMessage name="password" component="h4" /> 

                <button type='submit' className = "btn3">Sign up </button>
                <p>already have an account ?</p>
                <Link to="/login" className="btn2">Login now</Link >
            </Form>

        </Formik>


        </section>
    </div>
  )
}

export default Signup