import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import Navbar from './Navbar';


function Registration() {
    
    const initialValues ={
        username:"",
        password:"",
        fonction:"",
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(10).required(),
        password: Yup.string().min(4).max(20).required(),
        fonction: Yup.string().required(),
      });
 
 
       const onSubmit = (data) => {
         
            console.log(data);
          
      };
 
    return (
     
    <div className='reg'>
        <Navbar/>
        <br/>
        <br/>
        <section class="form-container">
        <Formik  className ="formik" initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
                <Field 
                    className="box"
                    autoComplete="off"
                    name="username"
                    placeholder="username..."
                /> <br/>
                            <ErrorMessage name="username" component="span" /> <br/>


                <Field 
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="password..."
                /><br/>

                <ErrorMessage name="password" component="h3" /><br/>
                <Field 
                    autoComplete="off"
                    type="text"
                    name="fonction"
                    placeholder="fonction..."
                /><br/>
                <button type='submit' class = "btn3">register user</button>


            </Form>
        </Formik>
        </section>
    </div>
  );
}

export default Registration;