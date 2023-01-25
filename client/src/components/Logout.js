import React from 'react';
import { useHistory }  from "react-router-dom";

function Logout() {
    let history =useHistory();

    function logout()
    {
      localStorage.removeItem("Token");
      history.push("/");
  
    }

  return (
    <div  style={{margin: "10em"}}>
        <h1 style={{textAlign:"center"}}>voulez vous déconnecter ?</h1>
        <button style={{marginLeft:"28rem"}} type="button" className='btn4' onClick={logout}>LOGOUT</button>
    </div>
  );
}

export default Logout;