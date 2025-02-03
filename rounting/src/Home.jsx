import React, { useEffect, useState } from 'react'

import './page.css'

export default function Home() {
  const[count ,setCount]= useState(11);
  console.log("home rerendred");
  //constoly function api calls
  useEffect(()=>{
    console.log(" home compoment run..");
    
  },[])
  
  return (
    <div id='page'>
      {count}
      <br/><br/>
      <button onClick={()=>setCount(count+5)}>Home clic</button>
    </div>
  )
}
