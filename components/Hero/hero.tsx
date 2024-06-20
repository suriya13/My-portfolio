"use client"
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../BackgroundCircle/BackgroundCircle'
import Link from 'next/link'

function Hero() {
    const [text, count] = useTypewriter({
        words:[
            "Hi, i'm Suriyaraj",
            "Guy who loves coffee.tsx",
            "<ButLovesCodeMore /> "

        ],
        loop:true,
        delaySpeed:2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src='https://avatars.design/wp-content/uploads/2016/09/avatar1b.jpg' alt=''/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 tracking-[8px]'>Associate Software Engineer</h2>
        <h1 className='text-5xl, lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#f7AB0A' />
        </h1>
        <div className='pt-5'>
            <Link href="#About">
            <button className='heroButton'> About </button>
            </Link>
            <Link href="#Experience">
            <button className='heroButton' >Experience</button>
            </Link>
            <Link href="#Skills">
            <button className='heroButton' >Skills</button>
            </Link>
            <Link href='#projects'>
            <button className='heroButton' >Projects</button>
            </Link>
        </div>
        </div>
       
    </div>
  )
}

export default Hero