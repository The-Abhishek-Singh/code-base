import React from 'react'

const Heading = (props) => {
  return (
    <>
    <div 
    className="sm:w-full md:w-max p-4 sm:p-[4rem] border-black h-[4rem] font-bold rounded-lg overflow-hidden box flex relative items-center justify-center mb-2">
        <h1 className={`uppercase sm:text-3xl md:text-4xl sm:p-4 text-${props.color} text-nowrap font-semibold z-10`}>{props.text}</h1>
    </div>
    <style jsx>{`
.box {  
  padding: 1rem;
  &::before {
    content: '';
    position: absolute;
    height: 70%;
    width: 140%;
    background: linear-gradient(to right, white,red,white,red,white,red,white);
    animation: rotate 4s linear infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 4px;
    background: ${props.bgColor};
    border-radius: 0.3rem;
  }
}

@media(width<521px) {
  .box {
    padding: 1.5rem;
  }
  .box h1{
    font-size: calc(.3vh + 1rem);
  }
}
@media(width<640px){
  .box h1{
    font-size: calc(4.275vw + 0.5vw);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }  
  100% {
    transform: rotate(360deg);
  }
}`
}</style>
</>
  )
}
export default Heading