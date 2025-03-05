import React from 'react'
import Button from './Button'

const Card = (props) => {
  return (
    <div 
    className="card relative w-full h-full m-auto text-black border border-black overflow-hidden contaiNer">
        <div className='w-full'>
        <img src={props.img} className=" card-img-top h-full w-full " alt="..." />
        </div>
            <div className="card-body p-3 bg-white">
                <h3 className="card-title text-lg sm:text-2xl font-semibold">{props.title}</h3>
                  <p className="card-text text-sm sm:text-lg mb-2">{props.content}</p>
            </div>
            <div className='m-auto relative flex justify-center btn-hover'>
               <Button text={'Enroll for course'} />
               </div> 

    <style>
      {`
      .contaiNer {
        background: linear-gradient(135deg, #CB3939, rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.9), rgb(255, 255, 255, 0.5), rgb(255, 255, 255, 0.8),rgb(255, 255, 255, 0.8));
        border: 2px solid rgba(255, 255, 255, 0.2);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 15px #cb393981;
        }`}
    </style>
    </div>
  )
}

export default Card