import Main from '@/component/Main';
import OurTeamGallery from '@/component/OurTeamGallery';
import ParallaxStarsReveal from '@/component/ParallexStars';
import ServiceCarousel from '@/component/ServiceCarousel';
import React from 'react';

const page = () => {
  return (
    <div>
      
      <ParallaxStarsReveal/>


    <div className='-mt-24'>
      </div>

      <div> <ServiceCarousel/>  </div>
      <div className=' 2xl:mt-44' ><Main/></div>
      <div><OurTeamGallery/></div>




    </div>
  )
}

export default page
