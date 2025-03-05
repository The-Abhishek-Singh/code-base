import BusinessConsulting from '@/component/Business/BusinessConsulting'
import BusinessService from '@/component/Business/BusinessService'
import WhyUs from '@/component/Business/WhyUs'
import React from 'react'
const page = () => {
  return (
    <div className='overflow-x-hidden' >
    <div><BusinessConsulting/></div>
    <div><BusinessService/></div>
    <div><WhyUs/></div>
    </div>
  )
}
export default page