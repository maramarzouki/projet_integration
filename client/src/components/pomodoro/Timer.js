import React from 'react'
import Block from './Block'
import styled from 'styled-components';
import { useRef } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
`;

const Text = styled.h1`
    font-size: 20px;
`;


function Timer({timeLeft, setTimeLeft, isPaused, setIsPaused }) {

    //convert time left which is in seconds 
    let minutes = Math.floor(timeLeft/60);
   let seconds = Math.floor(timeLeft-60*minutes);
   
  //counting down
  let intervalRef = useRef();

  useEffect(() => {
      const id = setInterval(()=> {
        {
            isPaused? clearInterval(intervalRef.current): setTimeLeft(timeLeft-1)



        }
          
      }, 1000)
      intervalRef.current = id;
      return () => clearInterval(intervalRef.current);
  });
  return (
    <>
    <Container>
        <Block param="Minutes" number={minutes} /> <Text>:</Text>  <Block param="Seconds" number={seconds}   />
    </Container>
    <div style={{textAlign:"center"}}>
    <button className='btn3' onClick={()=>{ setTimeLeft(0); setIsPaused(true); }}>RESET</button>

    </div>
    </>
  )
}

export default Timer