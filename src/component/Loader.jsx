"use client";
import React, { useState, useEffect } from "react";
import ScrollReveal from './ScrollReveal';
const Loading = () => {
  return(
    <div className="absolute flex items-center bottom-5 gap-5 w-full md:justify-end justify-center mr-12">
        <div className="spinner h-10 w-10"/>
        <div className="loading flex md:text-5xl text-3xl">
          <div>P</div>
          <div>R</div>
          <div>E</div>
          <div>S</div>
          <div>E</div>
          <div>N</div>
          <div>T</div>
          <div>I</div>
          <div>N</div>
          <div>G</div>
        </div>
    </div>
  );
}
const Loader = () => {
  return (
    <div className="loader w-full h-full fixed z-50 flex items-center justify-center">
      <div className="relative h-screen w-full overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 bg-black">
        {/* Small stars */}
        <div className="stars-small"></div>
        {/* Medium stars */}
        <div className="stars-medium"></div>
        {/* Large stars */}
        <div className="stars-large"></div>
      </div>
      {/* Title */}
      <div className="absolute left-0 right-0 top-1/2 -mt-16 text-center">
        <h1 className="font-sans text-5xl font-light tracking-widest text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            <div className="flex items-center justify-center mx-auto relative w-full">
              <div className='absolute flex gap-8 sm:flex-row flex-col items-center justify-center'>
              <ScrollReveal animation="flipIn" duration={1200} easing="bouncy">
              <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0  sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 h-20 w-20">
                <path d="M 261,193 261,202 288,229 260,260 261,267 269,270 306,235 307,227 272,191 Z
                        M 185,190 147,226 147,234 182,269 189,270 194,265 193,257 166,230 193,202 193,193 Z
                        M 244,173 236,178 204,274 204,282 209,285 218,282 251,185 250,176 Z
                        M 9,199 5,243 22,284 160,424 181,441 202,450 241,453 274,442 359,361
                        388,381 423,390 469,383 502,362 423,280 402,267 373,259 339,260 308,271
                        243,332 223,338 123,240 120,225 124,217 223,121 240,124 301,183 336,198
                        383,198 412,186 430,172 294,32 278,19 252,8 210,7 172,24 32,163 Z"
                      fill="#CB3910" stroke="#000" strokeWidth='2'/>
              </svg>
              </ScrollReveal>
              <div className='flex flex-col items-center'>
              <ScrollReveal animation="slideUp" duration={1200} easing="spring" delay={200}>
                <p className="sm:text-sm md:text-lg lg:text-xl text-lg font-mono text-white select-none">Accelerate your career growth with</p>
              </ScrollReveal>
              {/* <ScrollReveal animation="slideUp" duration={1200} easing="spring" delay={1200}> */}
              <div className="container hidden sm:block">
                  <h1 className="expanding-div md:text-5xl sm:text-3xl lg:text-7xl text-4xl text-red-600 tracking-normal font-normal select-none">Careertronics</h1>
              </div>
              {/* </ScrollReveal> */}
              </div>
              </div>
            </div>
          </span>
        </h1>
      </div>
      <style>{`
      .loading div {
   font-family: 'Courier New', Courier, monospace;
   font-weight: 600;
   animation: blur 3s linear forwards;
   line-height: 20px;
   transition: all .5s;
  //  letter-spacing: 0.2em;
   color: #fff;
  }
  @keyframes blur {
  0%{
   opacity: .8;
  }
  50% {
    filter: blur(5px);
    opacity: 0.5;
    }
  95% {
    filter: blur(0);
    opacity: .35;
  }
   100%{
   opacity: 0;
   }
  }
  .spinner {
  // height: 50px;
  // width: 50px;
     display: grid;
     color: #fff;
     background: radial-gradient(farthest-side, currentColor calc(100% - 7px),#0000 calc(100% - 6px) 0);
     -webkit-mask: radial-gradient(farthest-side,#0000 calc(100% - 15px),#000 calc(100% - 13px));
     border-radius: 50%;
     animation: spinner-sm4bhi 4.5s forwards;
    }
    .spinner::before,
    .spinner::after {
     content: "";
     grid-area: 1/1;
     background: linear-gradient(currentColor 0 0) center,
              linear-gradient(currentColor 0 0) center;
     background-size: 90% 8px,8px 90%;
     background-repeat: no-repeat;
    }
    .spinner::after {
     transform: rotate(45deg);
    }
    @keyframes spinner-sm4bhi {
      0%{
        opacity: .8;
    }
      100% {
        opacity: 0;
      transform: rotate(1turn);
     }
    }
        @keyframes animStar {
          from { transform: translateY(0); }
          to { transform: translateY(-4000px); }
        }
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .expanding-div {
            color: white;
            display: flex;
            color: red;
            justify-content: center;
            align-items: center;
            /* Initial state */
            width: 0;
            overflow: hidden;
            white-space: nowrap; /* Added no wrap */
            animation: expandBothSides 2s ease-out 1.3s forwards;
        }
        @keyframes expandBothSides {
            0% {
                width: 0;
            }
            100% {
                width: 80%;
            }
        }
        .stars-small {
  position: absolute;
  width: 3px;
  border-radius: 50%;
  height: 3px;
  background: transparent;
  box-shadow: 1747px 1106px #FFF, 534px 1906px #FFF, 1140px 74px #FFF,
    792px 895px #FFF, 1489px 538px #FFF, 507px 1349px #FFF,
    1975px 430px #FFF, 1641px 38px #FFF, 896px 680px #FFF,
    175px 1527px #FFF, 1566px 1954px #FFF, 1907px 1285px #FFF,
    75px 152px #FFF, 156px 195px #FFF, 190px 185px #FFF,
    1733px 25px #FFF, 443px 1617px #FFF, 650px 577px #FFF,
    1589px 1154px #FFF, 1052px 297px #FFF, 750px 245px #FFF,
    1847px 1256px #FFF, 937px 406px #FFF, 1254px 632px #FFF,
    1333px 345px #FFF, 1889px 678px #FFF, 1420px 1234px #FFF,
    1190px 854px #FFF, 100px 1765px #FFF, 750px 1456px #FFF,
    1447px 1326px #FFF, 530px 1106px #FFF, 1770px 780px #FFF,
    600px 1200px #FFF, 850px 950px #FFF, 1400px 400px #FFF,
    500px 500px #FFF, 1800px 200px #FFF, 300px 1000px #FFF,
    1200px 1800px #FFF, 800px 300px #FFF, 1500px 1700px #FFF,
    200px 1500px #FFF, 1900px 900px #FFF, 400px 700px #FFF,
    1100px 1600px #FFF, 700px 1900px #FFF, 1300px 100px #FFF,
    300px 1300px #FFF, 1000px 600px #FFF, 200px 1400px #FFF,
    1100px 500px #FFF, 150px 1500px #FFF, 1200px 400px #FFF,
    50px 1600px #FFF, 1300px 300px #FFF, 100px 1700px #FFF;
  animation: animStar 50s linear infinite;
}
.stars-medium {
  position: absolute;
  width: 5px;
  border-radius: 50%;
  height: 5px;
  background: transparent;
  box-shadow: 409px 292px #FFF, 275px 142px #FFF, 814px 952px #FFF,
    1213px 901px #FFF, 1761px 505px #FFF, 844px 1276px #FFF,
    323px 261px #FFF, 1615px 640px #FFF, 336px 1422px #FFF,
    1115px 246px #FFF, 1219px 145px #FFF, 971px 939px #FFF,
    1450px 800px #FFF, 1600px 900px #FFF, 1350px 500px #FFF,
    1111px 130px #FFF, 150px 750px #FFF, 1500px 400px #FFF,
    2000px 10px #FFF, 12px 757px #FFF, 1570px 490px #FFF,
    3000px 1100px #FFF, 1150px 710px #FFF, 1520px 200px #FFF,
    4000px 100px #FFF, 1350px 750px #FFF, 1540px 130px #FFF,
    111px 104px #FFF, 1450px 753px #FFF, 1524px 90px #FFF,
    600px 300px #FFF, 1700px 1200px #FFF, 200px 800px #FFF,
    1300px 600px #FFF, 800px 1500px #FFF, 1100px 400px #FFF,
    500px 1700px #FFF, 1800px 500px #FFF, 300px 1100px #FFF,
    700px 1000px #FFF, 600px 1100px #FFF, 800px 900px #FFF,
    500px 1200px #FFF, 900px 800px #FFF, 400px 1300px #FFF,
    1000px 700px #FFF, 300px 1400px #FFF, 1100px 600px #FFF;
  animation: animStar 30s linear infinite;
}
.stars-large {
  position: absolute;
  width: 7px;
  border-radius: 50%;
  height: 7px;
  background: transparent;
  box-shadow: 624px 445px #FFF, 1369px 1925px #FFF, 240px 1902px #FFF,
    275px 772px #FFF, 1659px 1328px #FFF, 1406px 1638px #FFF,
    25px 77px #FFF, 169px 138px #FFF, 140px 138px #FFF,
    1100px 180px #FFF, 1450px 723px #FFF, 1225px 1291px #FFF,
    500px 195px #FFF, 1800px 765px #FFF, 1495px 1320px #FFF,
    1350px 1500px #FFF, 1750px 400px #FFF, 1900px 1000px #FFF,
    200px 900px #FFF, 600px 1500px #FFF, 1700px 300px #FFF,
    750px 1250px #FFF, 1400px 650px #FFF, 1650px 500px #FFF,
    300px 1600px #FFF, 1200px 400px #FFF, 800px 1800px #FFF,
    1600px 200px #FFF, 400px 1400px #FFF, 1900px 700px #FFF,
    100px 1100px #FFF, 1500px 900px #FFF, 700px 500px #FFF,
    1800px 1600px #FFF, 500px 1300px #FFF, 1100px 800px #FFF,
    700px 1100px #FFF, 600px 1200px #FFF, 800px 1000px #FFF,
    500px 1300px #FFF, 900px 900px #FFF, 400px 1400px #FFF,
    1000px 800px #FFF, 300px 1500px #FFF, 1100px 700px #FFF;
  animation: animStar 15s linear infinite;
}
      `}</style>
    </div>
    <Loading />
    </div>
  );
};
export default Loader;