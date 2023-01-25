import React, {useState} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

function Popupstylo() {


    const[project, setprojects] = useState({
        title: '',
        description:'',
        deadline:''
    });

    const handleChange = (e)=>{
        setprojects((prev) => ({ ...prev, [e.target.name]: e.target.value}));
    }

    const location = useLocation();
    const projectId = location.pathname.split("/")[2];
    const goback = useHistory();
    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.put("http://localhost:3001/updateProject/" + projectId, project);
            alert("the project is edited ! you can go back !");
            goback("/userdash");
        }catch(err){
            console.log(err);
        }
    }

    //edit project
   

  return (
    <div className='modalBg'>
      <div className="modalcont">
           <Link to={"/userdash"}><button className="x">X</button></Link> 
            <div className="mbody">
                <div className='formcontainer'>
                <form>
                    <h1>Edit Project Details</h1>
                    <h3>Project Name</h3>
                    <input type="text" placeholder='Title'  class="box" name="title" onChange={handleChange}/>
                    <h3>Description</h3>
                    <textarea type="text"  class="box"  rows={5} cols={30} name="description" onChange={handleChange}/>
                
                <h3>Project end day</h3>
                <input type="date" className='box'  name="deadline" onChange={handleChange}/>
                <button className='btn2' onClick={handleClick}>Edit</button>

                </form>

                </div>
            
            </div>  
     </div>


    </div>
  )
}

export default Popupstylo