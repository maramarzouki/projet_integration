import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [extendNav, setExtendNav] = useState(false);




  return (
    <nav className='NavItems'>
     <div className='navInnerCont'>
        <div className='leftcont'>
         <img className=' logo ' src='images/lg22.png' alt='logo1' ></img>
         <img className=' logo ' src='images/lg11.png' alt='logo1' height="75"></img>
        </div>
        <div className='rightcont'> 
             <button className='openLinkBut' onClick={() => { setExtendNav((curr) => !curr);}}>  {extendNav ? <> &#10005;</>  : <> &#8801;</>} </button>
              <Link >Home</Link>
              <Link >About us</Link>
              <Link >Contact us</Link>
              <Link >Blogs</Link>
              
          
          </div>
          <div className='logBut'>
            <Link to="/login">Login</Link>
          </div>
      </div>

      {extendNav && (
      <div className='navExtended'>

      
              <Link >Home</Link>
              <Link >About us</Link>
              <Link >Contact us</Link>
              <Link >Blogs</Link>
      </div>
      )}
        </nav>
  );
}

export default Navbar;