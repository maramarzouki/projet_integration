import React from 'react'
import styled, { keyframes } from "styled-components"

const DiscoverSection = styled.div`
    width: 100vw;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`;

const Waves = styled.div`
    
        width: 100%;
        position: absolute;
        top: -1rem;

    

`;
const Topic = styled.div`
    background-color: #B494E8ff;
    position: relative;
    bottom: -17rem;
    width: 100%;

`;
const Title = styled.h1`
    text-align: center;
    font-size: 3rem;
    color: white;
    padding-top:7%;
  
   

`; 

const SubTitle = styled.h2`
    text-align: center;
    
    
`; 
const Pic = styled.div`
    background-color: #B494E8ff;
    position: absolute;
    bottom: -31.5rem;
    width: 100%;
    height: auto;
   

    img{
        padding-left: 30%;
    }
    
`; 



const Main = styled.div`
    margin: 0 15rem;
    margin-top : 53rem;
    display: flex;
    justify-content: center;
    flex-direction: column;


`;
const Titletwo = styled.h1`
    display: inline-block;
    font-size: 2rem;

`;

const CurvedLine = styled.div`
    width: 7rem;
    height: 2rem;
    border: 5px solid #826AED;
    border-color: #826AED transparent transparent transparent;
    border-radius: 150%/60px 70px 0 0;
`;

/*************************************** */
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const One = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
   
   
`;
const SpecialText = styled.div`
    position: relative;
    width: 50%;

`;
const Two = styled.div`
    width: 50%;
    position: absolute;
    right: 0;
    bottom: 100%;
`;


const Text = styled.h4`
    font-size: calc(0.5rem + 1vw);
    color: #212529;
 
`;

const Circle = styled.span`
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: black;
    margin-right: 0.5rem;
    margin-top: 1rem;
 
`;
/******************************************* */

const Three = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;

   
`;


function Discover() {
  return (
    <DiscoverSection>
        <Waves>
        <img src='images/wave.svg' alt='wave' width="1325"  ></img>

        </Waves>
        <Topic>
            <Title>Discover Schedio</Title>
            
            <SubTitle>
                <br/>
                    SCHEDIO is an online software for effective time management, <br/> week planning,
                    task tracking and scheduling.
            </SubTitle>
            <Pic>
                 <img src='images/data.png' alt='data' ></img>
            </Pic>
            
        </Topic>

        <Main>
            <div>
                <Titletwo> What makes Schedio special ?   </Titletwo>
                <CurvedLine/>
            </div>
            <Content>
                <One> <img src='images/asana.png' alt='asana' width={500}></img></One>
                <SpecialText>
                    <Two><img src='images/innov.png' alt='manage' width={400}></img></Two>
                    <Text>
                       <h1 style={{color: "#826AED"}}>1</h1> 
                        <br/>
                        All your work in one place <br/>
                        Tasks, projects, calendars, goals, <br/>
                        notes and more, to help you stay organized !
                    </Text>
                    <div>
                        <Circle style={{backgroundColor: "#826AED"}}/>
                        <Circle style={{backgroundColor: "#ff4d6d"}}/>
                        <Circle style={{backgroundColor: "#00b4d8"}} />
                    </div>

                    
                </SpecialText>
                
                
                
            </Content>
            {/**** ********************************/}
            <Content>
            <Three> <img src='images/cool.png' alt='cool' width={350}></img></Three>
            <SpecialText>
                    <Text>
                       <h1 style={{color: "#ff4d6d"}}>2</h1> 
                        <br/>
                            Simple, efficient and powerful ! <br/>
                            Enjoy the cool design and make your work more enjoyable.
                    </Text>
                    <div>
                        <Circle style={{backgroundColor: "#826AED"}}/>
                        <Circle style={{backgroundColor: "#ff4d6d"}}/>
                        <Circle style={{backgroundColor: "#00b4d8"}} />
                    </div>

            </SpecialText>
           </Content>


            {/**** ********************************/}
            <Content>
            <Three> <img src='images/achiv.png' alt='achiv' width={500}></img></Three>
            <SpecialText>
                    <Text>
                       <h1 style={{color: "#00b4d8"}}>3</h1> 
                        <br/>
                            It's 100% free <br/>
                            ALL  these cool features for free!
                            <br/>  So what are you waiting for to try it out?
                    </Text>
                    <div>
                        <Circle style={{backgroundColor: "#826AED"}}/>
                        <Circle style={{backgroundColor: "#ff4d6d"}}/>
                        <Circle style={{backgroundColor: "#00b4d8"}} />
                    </div>

            </SpecialText>
           </Content>
        </Main>

        


    </DiscoverSection>
    
  )
}

export default Discover