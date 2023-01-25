import React from 'react'
import styled, { keyframes } from "styled-components"

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
function TextBlock({topic, title, subText, children}) {
  return (
    <Leftblock>
        <Topic>
            <Circle/>   <span>{topic}</span>
        </Topic>

        <Title>{title}</Title>


        <SubText>{subText} </SubText>
        
        {children}
    </Leftblock>
  )
}

export default TextBlock