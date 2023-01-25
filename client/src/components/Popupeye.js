import React from 'react'

function Popupeye({closeModalEye}) {
  return (
    <div className='modalBg'>
         <div className="modalcont">
         <button className="x" onClick={() => closeModalEye(false)}>X</button> 
         <div className="mbody">
            <div className='formcontainer'>
                <h3 style={{color: "#826AED"}}>Project Name</h3>
                <h3>name</h3>
                <br/>
                <h3 style={{color: "#826AED"}}>Description</h3>
                <h3 >project for this semester, i have to do some design for a website</h3>
                <br/>
                <h3 style={{color: "#826AED"}}>Priority</h3>
                <h3>low</h3>
                <br/>
                <h3 style={{color: "#826AED"}}>Deadline</h3>
                <h3>12/12/2022</h3>


                

                </div>

            </div>
            </div>

    </div>
  )
}

export default Popupeye