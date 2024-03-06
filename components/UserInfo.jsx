"use client"
import { signOut } from 'next-auth/react';
import React from 'react'
import { useSession } from 'next-auth/react';

const UserInfo = () => {
  const {data:session}=useSession()
 //console.log("data:",session)
  return (
    <div className=' flex flex-col w-screen h-screen items-center justify-center'>
        
        <h1 className=' lg:text-4xl text-2xl font-bold mb-5 '>User information</h1>
        {session?.user&& <div>
        <p>Name: <span>{session?.user.name}</span> </p>
        <p>Email: <span>{session?.user.email}</span> </p>
        <p>Role: <span>{session?.user.role}</span> </p>
        <p>Address: <span>Agargon Dhaka Bangladesh</span> </p>
        </div>}
        <button onClick={()=>signOut()} className=' mt-5 px-5 py-2 bg-rose-800 rounded-sm text-white font-semibold '>Log out</button>
        
    </div>
  )
}

export default UserInfo;