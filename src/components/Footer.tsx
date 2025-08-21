import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-16 flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-0 bg-gray-800 p-8 rounded-lg'>
        <div className='flex flex-col gap-4 items-center md:items-start '>
            <Link href="/" className='flex items-center'>
            <Image src="/logo.png" width={36} height={36} alt="logo"/>
            <p className='hidden md:block text-md font-medium tracking-wider text-white'>MiniSHOP</p>
            </Link>
            <p className='text-sm text-gray-400 mt-2'>© 2025 MiniSHOP.</p>
            <p className='text-sm text-gray-400 mt-2'>All rights reserved.</p>
        </div>

         <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start '>
            <p className='text-sm text-amber-50'>Links</p>
            <Link href='/'>Homepage</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>Terms of Service</Link>
            <Link href='/'>Privacy Policy</Link>
         </div>

         <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start '>
            <p className='text-sm text-amber-50'>Products</p>
            <Link href='/'>All Products</Link>
            <Link href='/'>New Arrivals</Link>
            <Link href='/'>Best Sellers</Link>
            <Link href='/'>Sale</Link>
         </div>

         <div className='flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start '>
            <p className='text-sm text-amber-50'>Company</p>
            <Link href='/'>About</Link>
            <Link href='/'>Contact</Link>
            <Link href='/'>Blog</Link>
            <Link href='/'>Affiliate Program</Link>
         </div>
    </div>
  )
}

export default Footer