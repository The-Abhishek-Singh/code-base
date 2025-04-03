import BusinessConsulting from '@/components/Business/BusinessConsulting'
import BusinessService from '@/components/Business/BusinessService'
import WhyUs from '@/components/Business/WhyUs'
import React from 'react'
const page = () => {
  return (
    <div className='overflow-hidden' >
    <div><BusinessConsulting/></div>
    <div><WhyUs/></div>
    <div><BusinessService/></div>

    </div>
  )
}
export default page