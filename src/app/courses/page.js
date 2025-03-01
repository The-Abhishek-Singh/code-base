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
   <div className='h-full w-full md:pt-4 sm:px-24 px-6 py-5 justify-center flex flex-col gap-8'>
  <div className='relative py-6 md:p-0'>
   <h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-14 inline-block'>OUR SERVICES</h1>
    <img src="/services/Removed.png" alt="Removed" className='float-right m-4 relative sm:w-[50%] md:w-[50%] lg:w-[500px] lg:-top-20 hidden sm:block'/>
    <p className='text-white font-light text-lg tracking-wider md:text-2xl lg:text-xl w-full paragraph mt-2 mb-2 lg:mb-10 lg:leading-[2vw] lg:w-[65%]'>
    Careertronic Global Services provides customized solutions for individuals, businesses, and institutions, helping them thrive in the digital era. We offer career development programs, skill training, and job placement for professionals, while businesses benefit from process optimization, automation, and software integration to enhance efficiency and growth. Institutions gain access to digital transformation strategies and innovative technologies to improve operations. With a focus on innovation, efficiency, and success, we empower our clients to stay competitive and achieve their goals in an evolving digital landscape.
    </p>
           <Input />
        <div className='flex gap-4 mt-[3vw]'>
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
    <div className='h-auto w-full flex  px-6 sm:px-16 lg:px-24 py-6 items-center justify-between flex-wrap gap-2'>
    <h1 className=''>Trusted By <br className='md:inline hidden'/>600+ Companies <span className='md:hidden inline'>:</span>  </h1>
      <h1 className='md:block hidden flex-shrink-0'>Google</h1>
      <h1 className='md:block hidden flex-shrink-0'>Facebook</h1>
      <h1 className='md:block hidden flex-shrink-0'>Meta</h1>
      <h1 className='md:block hidden flex-shrink-0'>Amazone </h1>
      <h1 className='md:block hidden flex-shrink-0'>Tata</h1>
      <h1 className='md:block hidden flex-shrink-0'>Techno</h1>
      <h1 className='md:block hidden flex-shrink-0'>Accenture</h1>
    <div className='md:hidden flex flex-wrap gap-4'>
      <h1>Google</h1>
      <h1>Facebook</h1>
      <h1>Meta</h1>
      <h1>Amazone </h1>
      <h1>Tata</h1>
      <h1>Techno</h1>
      <h1>Accenture</h1>
    </div>
    </div>
    </div>
     {/* SECONE PART OF THE PAGE  */}
<div className='h-auto w-full  mt-28'>
<div className='flex justify-center' >
<div className='w-[80%] h-[80px] bg-red-600 flex  justify-center align-middle rounded-full rounded-tl-md rounded-br-sm bg-gradient-to-r from-[#D31C1F] to-[#AD0003] ' >
<h1 className='text-white sm:text-3xl flex items-center text-xl' > Our Courses</h1>
</div>
</div>
<div className='w-[90%] mx-auto md:gap-20 lg:gap-16 gap-12 p-16 flex flex-wrap justify-center lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-x-0'>
   <Servicesboxes
     title="SOFTWARE DEVELOPMENT & EXPORT SERVICES"
     bgUrl="/services/image%2021.png"
     shifturl="/services/SOFTWARE-DEVELOPMENT-&-EXPORT-SERVICES"
   />
   <Servicesboxes
     title="IT TRAINING & CERTIFICATION"
     bgUrl="/services/div2.png"
      shifturl="/services/IT-TRAINING-&-CERTIFICATION"
   />
   <Servicesboxes
     title="CLOUD SOLUTIONS & MIGRATION"
     bgUrl="/services/div3.png"
      shifturl="/services/CLOUD-SOLUTIONS-&-MIGRATION"
   />
   <Servicesboxes
     title="CYBERSECURITY SERVICES"
     bgUrl="/services/div4.png"
      shifturl="/services/CYBERSECURITY-SERVICES"
   />
   <Servicesboxes
     title="Study Abroad"
     bgUrl="/services/div5.png"
      shifturl="/services/Study-Abroad
"
   />
   <Servicesboxes
     title="Work Abroad"
     bgUrl="/services/div6.png"
      shifturl="/services/Work-Abroad
"
   />
   <Servicesboxes
     title="E-COMMERCE SOLUTIONS"
     bgUrl="/services/div7.png"
      shifturl="/services/E-COMMERCE-SOLUTIONS"
   />
   <Servicesboxes
     title="UI/UX DESIGN SERVICES"
     bgUrl="/services/div8.png"
      shifturl="/services/UI-UX-DESIGN-SERVICES
"
   />
   <Servicesboxes
     title="IT INFRASTRUCTURE MANAGEMENT"
     bgUrl="/services/div9.png"
      shifturl="/services/IT-INFRASTRUCTURE-MANAGEMENT"
   />
</div>
</div>
  </>
  )
}
export default head