
import Loader from '@/component/Loader';
import Main from '@/component/Main';
import OurTeamGallery from '@/component/OurTeamGallery';
import ServiceCarousel from '@/component/ServiceCarousel';
import React from 'react';

const page = () => {
  return (
    <div>
      
    <div className='-mt-24'>
      <Loader/>

      </div>

      <div> <ServiceCarousel/>  </div>
      <div className=' 2xl:mt-44' ><Main/></div>
      <div><OurTeamGallery/></div>




    </div>
  )
}

export default page
