<<<<<<< HEAD
import React from 'react';

const Button = (props) => {
  return (
    <>
      <button className='btn-Comp'> {props.text} </button>
      <style>{`
        .btn-Comp {
        position: relative;
        padding: 10px 50px;
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
=======
'use client';

import React from 'react';

const ShineButton = () => {
  return (
    <button className="relative flex items-center font-medium text-[17px] px-[0.9em] py-[0.8em] pr-[1.3em] text-white bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] border-none tracking-wide rounded-2xl transition-all hover:translate-x-1 group my-[5vh] h-12 w-44 overflow-hidden">
      <svg
        height="28"
        width="50"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-[3px] rotate-[30deg] transition-transform duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:translate-x-1 group-hover:rotate-90"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
          fill="currentColor"
        ></path>
      </svg>
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)] group-hover:translate-x-[7px]">EXPLORE</span>
      
      {/* Shine effect element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full animate-shine">
          <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform skew-x-12"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </button>
  );
};

export default ShineButton;
>>>>>>> 567ae33d9e02a612740804f23440e392033f7e67
