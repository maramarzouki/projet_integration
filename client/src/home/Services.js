import React from 'react'
import styled, { keyframes } from "styled-components"
import TextBlock from './TextBlock';


const ServiceSection = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 20rem;
    position: relative;
    color: white;
`;


const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: auto;
    background-color: #B494E8ff;
    background-size: auto 100vh;
    z-index: -1;


`;


const Title = styled.h1`
    display: inline-block;
    font-size: 2rem;
    margin-top: 1rem;
    position: relative;

    &::before{
        content: "";
        height: 1px;
        width: 100%;
        position: absolute;
        left: 50%;
        bottom: 0;
        border-bottom: 2px solid #00b4d8;
        transform: translate(-50%);

    }

`;


const Line = styled.span`
    border-left: 4px solid black;
    height: 15rem;
    margin-top: 2rem;
    border-radius: 20px 20px 0 0;
`;


const Triangle = styled.span`
    width: 0;
    height: 0;
    border-left: 1.2rem solid transparent;
    border-right: 1.2rem solid transparent;
    border-top: 1.2rem solid black;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80vw;
    margin-top: 5%;

`;
const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  position: relative;

`;



function Services() {
  return (
    <ServiceSection>
        <Background>
            <Title>How Schedio Works ?</Title>
            <Line/>
            <Triangle/>

        </Background>

        <Content>
            <TextBlock
                title="Manage your projects"
                subText="Create your projects and organize them, set due dates and estimates. Work on both personal and professional projects"

            />

            <RightBlock>
                <img src="images/freelancer.png" alt="services" width={400}/>
            </RightBlock>
        </Content>
        {/********** */}
        <Content>
            <TextBlock
                title="Plan your tasks"
                subText="Create tasks, select due date for better time management. Compare estimated vs actual time to get better at futur planning.  "
            />

            <RightBlock>
                <img src="images/task.png" alt="services" width={500}/>
            </RightBlock>
        </Content>
        {/********** */}
        <Content>
            <TextBlock
                title="Make your to do List"
                subText=" Add what you want to do ! Mark them once you compleate them.  It will help you feel accomplished and productive  "
            />

            <RightBlock>
                <img src="images/todo2.png" alt="services" width={500}/>
            </RightBlock>
        </Content>
        {/********** */}
        <Content>
            <TextBlock
                title="Scheduel events on a specefic day in the calendar"
                subText=" Plan your week in advance, every minute you spend in planning saves 10 minutes in execution!"
            />

            <RightBlock>
                <img src="images/pr.png" alt="services" width={500}/>
            </RightBlock>
        </Content>
        {/********** */}
        <Content>
            <TextBlock
                title="An online Pomodoro Timer to boost your productivity"
                subText=" Schedio offers a customizable pomodoro timer to help you focus on any task you're working on such as study, writing or coding"
            />

            <RightBlock>
                <img src="images/time.png" alt="services" width={500}/>
            </RightBlock>
        </Content>
    </ServiceSection>
  )
}

export default Services