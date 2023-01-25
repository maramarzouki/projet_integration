import React from 'react'

function PopupPen({closeModalPen}) {
  return (
    <div className='modalBg'>
      <div className="modalcont">
            <button className="x" onClick={() => closeModalPen(false)}>X</button> 
            <div className="mbody">
                <div className='formcontainer'>
                <form>
                    <h1>Edit Project Details</h1>
                    <h3>Project Name</h3>
                    <input type="text" placeholder='Title'  class="box" />
                    <h3>Description</h3>
                    <textarea type="text"  class="box" rows={5} cols={30} />
                    <h3>Priority</h3>
                    <select className="box" name="pr">
                    <option value="romance">Low</option>
                    <option value="action">Medium</option>
                    <option value="mystery">High</option>
                   
                </select>
                
                <h3>Project end day</h3>
                <input type="date" className='box'/>
                <button className='btn2'>Create</button>

                </form>

                </div>
            
            </div>  
     </div>


    </div>
  )
}

export default PopupPen