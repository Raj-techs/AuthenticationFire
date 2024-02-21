import React, { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword} from "./firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'

const UserAuth = () => {
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const {email,password}=data

  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const SignIn=e=>{
    e.preventDefault()
    signInWithEmailAndPassword(getAuth(),email,password).then(user=>{console.log(user.user)}).catch(err=>{console.log(err.message)})
  }
  const SignUp=e=>{
    e.preventDefault()
    createUserWithEmailAndPassword(getAuth(),email,password).then(user=>{console.log(user.user)}).catch(err=>{console.log(err.message)})
  }
  return (
    <div>
      <center>
        <form autoComplete='off'>
          <h1>Authentication</h1>
      <input placeholder='Email' value={email} name='email' onChange={changeHandler}/><br/><br/>
      <input placeholder='Password' value={password} name='password' onChange={changeHandler}/><br/><br/>
      <button onClick={SignIn}>SignIn</button> &nbsp; &nbsp;
      <button onClick={SignUp}>SignUp</button>
        </form>
      </center>
    </div>
  )
}

export default UserAuth
