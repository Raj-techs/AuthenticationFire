import React from 'react'
import { auth } from './firebase'

const Home = ({current}) => {
  return (
    <div>
      <center>
        <h1>welcome to {current.email}</h1>
        <button onClick={()=>{auth.signOut()}}>SignOut</button>
      </center>
    </div>
  )
}

export default Home
