import React, { useEffect, useState } from 'react'
import UserAuth from './UserAuth'
import { auth } from './firebase'
import Home from './Home';

const App = () => {
  const [current,updata]=useState(null);
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        updata({
          uid:user?.uid,
          email:user?.email
        })
        console.log(current)
      }else{
        updata(null)
      }
    })
  },[])
  return (
    <>
     {current ? <Home current={current}/>:<UserAuth/>}
    </>
  )
}

export default App
