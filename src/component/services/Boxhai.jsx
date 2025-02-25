'use client'
import React from 'react'
import { Globe,Handshake } from 'lucide-react';
import Input from '@/component/UI/services/Input';
import Servicesboxes from '@/component/UI/services/Servicesboxes';
const head = () => {
  return (
    <>
    {/* Fake Nav */}
    <div className='h-20 bg-black'></div>
    <div className='h-full w-full servicegradient bg-gradient-to-b from-black via-[#1E1E1E] to-black'>
  <div className='flex flex-col lg:flex-row relative'>
   <div className='h-full w-full sm:pt-10 sm:px-16 px-6 py-5 justify-center flex flex-col gap-8'>
  <div>
   <h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4 inline'>OUR SERVICES</h1>
    <img src="/services/Removed.png" alt="Removed" className='float-right m-4 relative sm:w-[50%] md:w-[50%] lg:w-[37%]'/>
    <p className='text-white font-light text-lg tracking-wider md:text-2xl lg:text-xl w-full paragraph mt-20'>
    Careertronic Global Services provides customized solutions for individuals, businesses, and institutions, helping them thrive in the digital era. We offer career development programs, skill training, and job placement for professionals, while businesses benefit from process optimization, automation, and software integration to enhance efficiency and growth. Institutions gain access to digital transformation strategies and innovative technologies to improve operations. With a focus on innovation, efficiency, and success, we empower our clients to stay competitive and achieve their goals in an evolving digital landscape.
    </p>
           <Input />
        <div className='flex gap-4 mt-10'>
        <div className='flex gap-2'>
        <Globe />
        <h1 >Globally Recognize </h1>
        </div>
        <div className='flex gap-2'>
        <Handshake />
        <h1>No Commitment</h1>
        </div>
        </div>
  </div>
       {/* <div className=''></div> */}
   </div>
   {/* <div className='h-full lg:w-[50%] w-full py-10 px-16 flex items-center justify-center'></div> */}
    </div>
    <div className='h-auto w-full flex p-6 items-center justify-around flex-wrap gap-2'>
    <h1 className=''>Trusted By <br /> 600+ Companies  </h1>
    <h1 className=''>Google</h1>
    <h1 className=''>Facebook</h1>
    <h1 className=''>Meta</h1>
    <h1 className=''>Amazone </h1>
    <h1 className=''>Tata</h1>
    <h1 className=''>Techno</h1>
    <h1>Accenture</h1>
    </div>
    </div>
     {/* SECONE PART OF THE PAGE  */}
<div className='h-auto w-full  mt-28'>
<div className='flex justify-center' >
<div className='w-[80%] h-[80px] bg-red-600 flex  justify-center align-middle rounded-full rounded-tl-md rounded-br-sm bg-gradient-to-r from-[#D31C1F] to-[#AD0003] ' >
<h1 className='text-white sm:text-3xl flex items-center text-xl' > Careertronic services</h1>
</div>
</div>
<div className='flex flex-wrap justify-center gap-12 p-16 content-center'>
   <Servicesboxes
     title="SOFTWARE DEVELOPMENT & EXPORT SERVICES"
     bgUrl="/image%2021.png"
     shifturl="/services/first"
   />
   <Servicesboxes
     title="IT TRAINING & CERTIFICATION"
     bgUrl="/div2.png"
      shifturl="/services/first"
   />
   <Servicesboxes
     title="CLOUD SOLUTIONS & MIGRATION"
     bgUrl="/div3.png"
      shifturl="/services/first"
   />
   <Servicesboxes
     title="CYBERSECURITY SERVICES"
     bgUrl="/div4.png"
      shifturl="/services/first"
   />
   <Servicesboxes
     title="Study Abroad"
     bgUrl="/div5.png"
      shifturl="/services/first"
   />
   <Servicesboxes
     title="Work Abroad"
     bgUrl="/div6.png"
      shifturl="/services/first"
   />
   <Servicesboxes
     title="E-COMMERCE SOLUTIONS"
     bgUrl="/div7.png"
      shifturl="/services/first"
   />
   <Servicesboxes
     title="UI/UX DESIGN SERVICES"
     bgUrl="/div8.png"
      shifturl="/services/first"
   />
   <Servicesboxes
     title="IT INFRASTRUCTURE MANAGEMENT"
     bgUrl="/div9.png"
      shifturl="/services/first"
   />
</div>
</div>
  </>
  )
}
export default head