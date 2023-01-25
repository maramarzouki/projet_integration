import React from 'react'
import styled, { keyframes } from "styled-components"



const move = keyframes`
    0% { transform: translateY(-5px); }
    50% { transform: translateY(10px); }
    100% { transform: translateY(-5px); }
`;

const IntroSection = styled.div`
    width: 100vw;
    height: 35vw;
    display: flex;
    justify-content: center;
    position: relative;

    @media only screen and (max-width: 900px){
        height: 70vw;
        display: block;

    }
`;

/* width is how much gap between pic and content */
const MainContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin-top: 10%;

    @media only screen and (max-width: 900px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;

    }
`;

const Leftblock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
    line-height: 1.5;
    

    @media only screen and (max-width: 900px){
        width: 80%;
        text-align: center;
        align-items: center;
        justofy-content: space-around;
        margin-top: calc(2.5rem + 2.5vw);
        filter: drop-shadow(2px 4px 6px black);

    }
`;
const Topic = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #826AED;
    color: #f6f1f1;
    font-weight: 700;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
`;

const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: aqua;
    margin-right: 0.5rem;
    
`;
const Title = styled.h1`
    font-size: calc(2rem +1vw);
   
    padding: 0.5rem 0;
    
`;

const SubText = styled.h3`
    color: #141E25;
`;

const BT = styled.button`
    padding: 0.5rem 1rem;
    filter: drop-shadow(2px 4px 6px black);
    margin-top: 3rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: 700;
    background-color: #826AED;
    color: white;
    margin-left:15%;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;

    

    &:hover{
        transform: scale(1.1);
    }

    &:active{
        transform: scale(0.9);
    }


`;
const Pic = styled.div`
    max-width: 100%;
    width: calc(30% + 20vw);
    z-index: 7;
    height: auto;
    
    padding-left: 10%;
    animation: ${move} 2.5s ease infinite;
    
    @media only screen and (max-width: 900px){
        align-items: flex-start;
        position: absolute;
        bottom: 0;
        opacity: 0.5;


    }
`;

function Intro() {
  return (
    <div className='Intro'>
      <img className=' picintro ' src='images/intro3.png' alt='sch'  width="1325"></img>

        <IntroSection>
            <MainContent>
               <Leftblock>
                    <Topic>
                        <Circle/><span>With this app</span>
                    </Topic>
                    <Title>Remember everything and manage all your projects</Title>
                    <SubText>Tasks and schedules are all in one place</SubText>
                    <BT> Start your journey</BT>
                </Leftblock>
                <Pic>
                   
                      <img src='images/su.png' alt='sch' width="350"></img>
                    
                     
                     </Pic> 
            </MainContent>
        </IntroSection>
    </div>
  )
}

export default Intro