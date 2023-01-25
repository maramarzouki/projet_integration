import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './home.css';
import styled from "styled-components"

const Button = styled.button`
    background-color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    color: #826AED;
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    border-color: aqua;
    transition: all 0.2s ;
    filter: drop-shadow(2px 4px 6px white);

    &:hover{
        transform: scale(1.1);
    }

    &:focus{
        transform: scale(0.9);
    }

`;

const HamburgerBtn = styled.button`
    position: relative;
    background-color: transparent;
    width: 2rem;
    height: 2px;
    cursor:pointer;
    left:0;
    display:none;
 
    @media only screen and (max-width: 900px){
        display: inline-block;
    }

    &::before,&::after{
        content: "";
        background-color: white;
        width: 2rem;
        height: 2px;
        display: inline-block;
        position : absolute;
        left: 0;
        cursor: pointer;
        transition: all 0.3s;
        
    }

    &::before {
        top: ${props =>(props.clicked ? "0" : "-0.5rem")};
        transform: ${props =>(props.clicked ? "rotate(-135deg)" : "rotate(0)"
        )};
    }

    &::after {
        top: ${props =>(props.clicked ? "0" : "0.5rem")};
        transform: ${props =>(props.clicked ? "rotate(135deg)" : "rotate(0)" )};
    }

`;

const MoblieMenu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    position: absolute;
    top: 100%;
    left: 0;
    right:0;
    opacity:${props => (props.clicked ? "1" : "0")};
    visibility:${props => (props.clicked ? "visible" : "hidden")};
    background: #8b75ea;
    border-radius: 20px;
    margin: 0.5rem;
    overflow-x: hidden;

    a{
        color: white;
        font-weight: 600;
        font-size: 1.5rem;
        margin: 1.5rem;
        cursor: pointer;

    }

`;

function Header() {
    const [click, setclick] = useState(false);
    const handleClick = () => setclick(!click);

  return (
    <div className='head'>
           
        <header>
            <div>
                <img className=' logo ' src='images/lg22.png' alt='logo1' width={200}></img>
            </div>
            <nav>
                <Link  to="/">Home</Link>
                <Link  to={"/aboutus"}>About us</Link>
                <Link  to={"/contact"}>Contact us</Link>
                <Link  to={"/blogs"}>Blogs</Link>
                <Link to={"/login"}><Button>LOGIN</Button></Link>
            </nav>
            <HamburgerBtn onClick={()=> handleClick()} clicked ={click}>
               <span/>
            </HamburgerBtn>
            <MoblieMenu clicked={click}>
            <Link  to="/" onClick={()=> handleClick()}>Home</Link>
                <Link  to={"/aboutus"} onClick={()=> handleClick()}>About us</Link>
                <Link  to={"/contact"} onClick={()=> handleClick()}>Contact us</Link>
                <Link  to={"/blogs"} onClick={()=> handleClick()}>Blogs</Link>
                <Link to={"/login"} onClick={()=> handleClick()}><Button>LOGIN</Button></Link>
            </MoblieMenu>
        </header>
    </div>
  )
}

export default Header