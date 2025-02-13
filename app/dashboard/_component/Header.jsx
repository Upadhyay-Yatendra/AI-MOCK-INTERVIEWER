"use client"
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { dark } from '@clerk/themes'

export const Header = () => {
    const path=usePathname()
    useEffect(()=>{
        console.log(path);
    })
  return (
    <div className='flex p-4 items-center justify-between shadow-sm'>
    
        <Image src={'/logo.png'} alt='logo' width={80} height={80} style={{ maxWidth: "100%", height: "auto" , borderRadius: "50%",}} />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:text-rose-100 hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-amber-600 font-bold'}`}>Dashboard</li>
            <li className={`hover:text-rose-100 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-amber-600 font-bold'}`}>Questions</li>
            <li className={`hover:text-rose-100 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-amber-600 font-bold'}`}>Upgrade</li>
            <li className={`hover:text-rose-100 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/how' && 'text-amber-600 font-bold'}`}>How it works?</li>
        </ul>
        <UserButton 
                appearance={{
                    elements: {
                        userButtonAvatarBox: {
                            width: '70px',
                            height: '70px'
                        }
                    }
                }} 
            />
    </div>
  )
}