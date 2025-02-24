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

    <div className='h-full w-full servicegradient'>
  
  <div className='flex flex-col lg:flex-row '>


   <div className='h-full lg:w-[50%] w-full sm:py-10 sm:px-16 px-6 py-5 flex flex-col gap-8'>


   <h1 className='text-white font-bold text-3xl md:text-4xl lg:text-5xl mb-4'>OUR SERVICES</h1>



   <p className='text-white font-light text-lg md:text-2xl lg:text-xl w-full'>
        
      lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.

        </p>



       <div className=''>

           <Input/>


           </div>


        <div className='flex gap-4'>

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


   <div className='h-full lg:w-[50%] w-full py-10 px-16 flex items-center justify-center'>


   <img src="/services/Removed.png" alt="Removed" height={500} width={500}/>


   



</div>





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
     bgUrl="/services/image%2021.png"
   />

   <Servicesboxes 
     title="IT TRAINING & CERTIFICATION"
     bgUrl="/services/div2.png"
   />

   <Servicesboxes 
     title="CLOUD SOLUTIONS & MIGRATION"
     bgUrl="/services/div3.png"
   />

   <Servicesboxes 
     title="CYBERSECURITY SERVICES"
     bgUrl="/services/div4.png"
   />

   <Servicesboxes 
     title="Study Abroad"
     bgUrl="/services/div5.png"
   />

   <Servicesboxes 
     title="Work Abroad"
     bgUrl="/services/div6.png"
   />

   <Servicesboxes 
     title="E-COMMERCE SOLUTIONS"
     bgUrl="/services/div7.png"
   />

   <Servicesboxes 
     title="UI/UX DESIGN SERVICES"
     bgUrl="/services/div8.png"
   />

   <Servicesboxes 
     title="IT INFRASTRUCTURE MANAGEMENT"
     bgUrl="/services/div9.png"
   />








</div>


</div>


    
  </>
  )
}

export default head
