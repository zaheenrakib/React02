 "use client"
import Context from '@/Helper/Context'
 import React, { useContext } from 'react'
 import { MyContext } from '@/Helper/Context'


const Header = (props) => {
  Context
  const user = useContext(MyContext)
  return (
    <>
    <h1 className='bg-red-500'>{user}</h1>
    </>
  )
}

export default Header