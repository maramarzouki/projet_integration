import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

import jwt_decode from 'jwt-decode'
function Userprofil() {
  //showing the bars
  const [isActive, setActive] = useState("false");
  const handleToggle = () =>{
      setActive(!isActive);
  }

  const {register, handleSubmit, formState : {errors} } = useForm({
    defaultValues:{
      FN:'',
      LN:'',
      email:'',
      password:''
    }
  });


//   const[user, setuser] = useState({
//     lastName:'',
//     firstName:'',
//     email:'',
//     password:''
// });

// const handleChange = (e)=>{
//   setuser((prev) => ({ ...prev, [e.target.name]: e.target.value}));
// }
// const location = useLocation();
// const userId = location.pathname.split("/")[2];

  
const handleClick = async (values) => {
    const {newFN,newLN,email,password} = values
  //console.log(userId)
  try{
    const token = localStorage.getItem('Token')
            const id = jwt_decode(token)
      await axios.put(`http://localhost:3001/updateUser/${id._id}`,{FN:newFN,LN:newLN,email:email,password:password});
      alert("your informations have been updated");
      
      
  }catch(err){

      console.log(err);
  }
}


  return (
    <div className='user'>
        <div className='container'>
        <div className={isActive ? 'sidebar-menu' : ' sidebar-menu activestate'}>
                <h1 className="heading">SS C H E D I O</h1>
                <ul>
                   
                    <li className=" selected">
                        <Link to={'user'} ><i class="fas fa-house-user"></i><span>Dashboard</span></Link>
                    </li>
                  
                    
                    <li>
                        <Link to={'usertask'}><i class="fas fa-folder"></i><span>Projects</span></Link>
                    </li>
                    <li>
                        <Link to={'notes'}><i class="fas fa-file"></i><span>Notes</span></Link>
                    </li>
                    <li>
                        <Link to={'todo'}><i class="fas fa-list"></i><span>To do list</span></Link>
                    </li>
                    <li>
                        <Link to={'pomodoro'}><i class="fas fa-clock"></i><span>Pomodoro</span></Link>
                    </li>
                    <li>
                        <Link to={'calendar'}><i class="fas fa-calendar-check"></i><span>Calendar</span></Link>
                    </li>
                </ul>
            </div>
            <div className={isActive ? "main" : "main activ"}>
                <div className="topbar">
                    <div className = {isActive ? "toggle" : " activestate" }>
                    <i class="fas fa-bars" onClick={ handleToggle }></i>

                    </div>
                
                </div>

                <div className="mainn">
                  <h1>update your profile</h1>
                  <div className="mbody">
                    <div className='formcontainer'>
                <form>
                        <h3 style={{color: "#826AED"}}>Last name</h3>
                        <input type="text" name="lastName" className='box' placeholder='last name' {...register("LN")} />
                     
                        <h3 style={{color: "#826AED"}}>first name</h3>
                        <input type="text" name="firstName" className='box' placeholder='first name'  {...register("FN")}/>

                     
                        <h3 style={{color: "#826AED"}}>mail</h3>
                        <input type="email" name="email" className='box' placeholder='Email' {...register("email")} />

                        <h3 style={{color: "#826AED"}}>password</h3>
                        <input type="password" name="password" className='box' placeholder='Password'{...register("password")} />

                        <button className='btn2' onClick={handleSubmit}>update</button>


                      
                        
              </form>

                

                </div>
                       </div>
                </div>
        </div>
        </div>
        </div>
    

  )
}

export default Userprofil