"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import SearchBar from './searchBar'

import { useRouter } from 'next/navigation'



export const NavBar = (Props: any): React.JSX.Element => {
  const [value, setValue] = useState('')
  const route = useRouter()
  

  return (
    <div className='flex box-border h-12 w-full border items-center'>
      <div className="logo flex items-center h-full mx-4 cursor-pointer">
        <Image src={"/favicon.ico"}
        style={{rotate:'90deg'}}
         height={28} width={28} alt='Logo' />
      </div>
      <SearchBar />
    </div>

  )
}


