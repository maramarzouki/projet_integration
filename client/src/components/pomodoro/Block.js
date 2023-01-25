import React from 'react'


function Block({param, number}) {
  return (
    <div style={{textAlign: "center"}}>
        <h1>{number}</h1>
        <h1>{param}</h1>
    </div>
  )
}

export default Block