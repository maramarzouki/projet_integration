import React, { useState } from 'react'
import {Link, useHistory} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from 'axios';

function AdminAdd() {

    let history = useHistory();

    const [alert, setAlert] = useState("");
    const creatuser = (values) =>{
  
      
    
      const{firstName, lastName, email, role, password} =values ;
      axios.post('http://localhost:3001/addAdmin', {
        
        firstName,
        lastName,
        email,
        role,
        password
  
      }).then((response) => {
        window.alert('admin created')
  
  
      }).catch((err) => {
        setAlert(err.message);
      })
    };
  
      const initialValues ={
          firstName:"",
          lastName:"",
          email:"",
          role:"",
          password : "",
  
        };
      
      const validationSchema = Yup.object().shape({
          firstName : Yup.string().min(3).max(20).required(),
          lastName :  Yup.string().min(3).max(20).required(),
          email:       Yup.string().email().required(),
          role :  Yup.string().min(3).max(20).required(),
          password :  Yup.string().min(4).max(15).required(),
      });


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
                        <div className='menuitem '>
                        <Link to ="/adminmessages"><i class="fas fa-envelope"></i>  <span> Contacts </span></Link>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='menuitem active'>
                        <Link to ="/adminblogs"><i class="fas fa-clipboard"></i>  <span> Blogs </span></Link>
                        </div>
                    </div>

                    <div className='menu'>
                        <div className='menuitem'>
                        <Link to ="/adminprofil"><i class="fas fa-id-card"></i>   <span> Profil </span></Link>
                        </div>
                    </div>
            </div>
            <div className='maindash2'>
           
            <section class="form-container">

        <Formik className ="formik" initialValues={initialValues} onSubmit={creatuser} validationSchema={validationSchema}>
            <Form>

                <h3>Enter your last name</h3>
                <Field autoComplete="off" type ="text" name="lastName"  className="box"  />
                <ErrorMessage name="lastName" component="h4" />

                 <h3>Enter your first name</h3>
                <Field autoComplete="off" type ="text" name="firstName" className="box"   />
                <ErrorMessage name="firstName" component="h4" />

                <h3>Enter your role</h3>
                <Field autoComplete="off" type ="text" name="role" className="box"   />
                <ErrorMessage name="role" component="h4" />


                <h3>Enter your mail</h3>
                <Field autoComplete="off" type ="email" name="email"   className="box" />
                <ErrorMessage name="mail" component="h4" />


                <h3>Enter your password</h3>
                <Field autoComplete="off" type ="password" name="password"  className="box"  />
                <ErrorMessage name="password" component="h4" /> 

                <button type='submit' className = "btn3">Add admin </button>
             
            </Form>

        </Formik>


        </section>
          
            
            
            
            
            </div>
        
        </div>

    </div>
  )
}

export default AdminAdd