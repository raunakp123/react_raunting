import React, { useState } from 'react'
import './page.css'

export default function About() {
  const [count, setCount]= useState(3);
  return (
    <div id='page'>
      {count}
      <br/> <br/>
      <button onClick={()=>setCount(count+5)}>About click</button>
    </div>
  )
}
