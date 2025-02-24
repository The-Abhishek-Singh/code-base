import ImageCarousel from '@/component/ImageCarousel';
import Main from '@/component/Main';
import OurTeamGallery from '@/component/OurTeamGallery';
import React from 'react';

const page = () => {
  return (
    <div>
      

      <div className='h-20 w-full'></div>
      <div><ImageCarousel/></div>
      <div><Main/></div>
      <div><OurTeamGallery/></div>




    </div>
  )
}

export default page
