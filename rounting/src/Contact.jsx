import React, { useState } from 'react'
import './page.css'

export default function Contact() {
  const [count, setCount]= useState(7);
  return (
    <div id='page'>
      {count}
      <br/> <br/>
      <button onClick={()=> setCount(count+5)}> contact clic</button>
      
    </div>
  )
}
