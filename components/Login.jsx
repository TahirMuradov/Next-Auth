"use client"
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Login = () => {
    var session= useSession()
if (session?.user?.data) {
   
    return (
        <>
        <button onClick={()=>signOut()} >signOut</button>
        </>
      )
}
  return (
    <>
    <button onClick={()=>signIn()} >singIn</button>
    </>
  )
}

export default Login