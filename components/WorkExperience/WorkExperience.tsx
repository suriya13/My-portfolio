"use client"
import React from 'react'
import {motion} from 'framer-motion'
import ExperienceCard from '../ExperienceCard/ExperienceCard'

function WorkExperience() {
  return (
    <motion.div
    initial={{
        opacity:0,
    }}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='h-screen flex relative overflow-hidden flex-col text-left 
    md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
       <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>expericence</h2>
       <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
       <ExperienceCard />
       <ExperienceCard />
       <ExperienceCard />
       <ExperienceCard />
       <ExperienceCard />
       <ExperienceCard />
       </div>
        </motion.div>
  )
}

export default WorkExperience