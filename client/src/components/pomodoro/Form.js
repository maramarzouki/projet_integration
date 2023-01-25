import React from 'react'
import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import * as $ from 'jquery';

import "../user.css";

const Container = styled.div`
   
    justify-content: center;
`;

const Text = styled.p`
   margin: 0px 0px ;

`;

function Form({setTimeLeft, setIsPaused}) {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data =>{
        console.log(data.minutes);
        $('pomo-form').trigger("reset");
        setTimeLeft(data.minutes*60);
        setIsPaused(false);
    };

  


  return (
    <div>
    <Container>
        
        <div className="form-container">
        <Text>minutes</Text>
        <form noValidate onSubmit={handleSubmit(onSubmit)} id='pomo-form'>
            <input type="number" 
             name='minutes'
             className='box'
             id='minutes-input'
             {...register ("minutes", {
                required: {value: true, message:"please enter the number you would to study for"},
                min: {value: .01, message:"please enter a number between .01 and 100"},
                max: {value: 100, message:"please enter a number between .01 and 100"}

            })}
             />
             <p style={{color:"blue", fontSize:"15px", marginTop:"5%"}}>{errors.minutes && errors.minutes.message}</p>


            <input type="submit" value={"send"} className='btn2' />


        </form>
        </div>

    </Container>
    </div>
  )
}

export default Form