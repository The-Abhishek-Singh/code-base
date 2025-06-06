'use client'
import React from 'react';
const Button = (props) => {
  const { link, text, download = false } = props;
  const handleClick = () => {
    if (download) {
      const anchor = document.createElement('a');
      anchor.href = link;
      anchor.download = 'Brochure.pdf'; // Optional: you can set a filename like 'resume.pdf'
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      window.location.href = link;
    }
  }
  return (
    <>
      <button onClick={handleClick} className='btn-Comp'>{text}</button>
      <style>{`
        .btn-Comp {
        position: relative;
        padding: 10px 20px;
        border-radius: 7px;
        border: 1px solid #CB3939;
        text-transform: uppercase;
        font-weight: 600;
        // letter-spacing: 2px;
        background: #CB3939;
        color: #fff;
        overflow: hidden;
        box-shadow: 0 0 0 0 transparent;
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        }
        
        .btn-Comp:hover {
        background: #CB3939;
        // box-shadow: 0 0 30px 5px red;
        color: #fff;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        }
        
      .btn-Comp:hover::before {
        -webkit-animation: sh02 0.5s 0s linear;
        -moz-animation: sh02 0.5s 0s linear;
        animation: sh02 0.5s 0s linear;
        }
        
        .btn-Comp:before {
          content: '';
          display: block;
          width: 0px;
          height: 86%;
          position: absolute;
          top: 7%;
          left: 0%;
          opacity: 0;
          background: #fff;
          box-shadow: 0 0 50px 30px #fff;
          -webkit-transform: skewX(-20deg);
          -moz-transform: skewX(-20deg);
          -ms-transform: skewX(-20deg);
        -o-transform: skewX(-20deg);
        transform: skewX(-20deg);
        }

      @keyframes sh02 {
        from {
          opacity: 0;
          left: 0%;
          }
          
          50% {
            opacity: 1;
            }
            
            to {
          opacity: 0;
          left: 100%;
        }
      }

      .btn-Comp:active {
        box-shadow: 0 0 0 0 transparent;
        -webkit-transition: box-shadow 0.2s ease-in;
        -moz-transition: box-shadow 0.2s ease-in;
        transition: box-shadow 0.2s ease-in;
        }`}
        </style>
      </>
  );
}


export default Button;