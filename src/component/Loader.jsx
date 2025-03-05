"use client";
import React, { useState, useEffect } from "react";
import ScrollReveal from './ScrollReveal';
const Loading = () => {
  const [isLoaderVisible, setIsLoaderVisible] = useState(true);
  useEffect(() => {
    setIsLoaderVisible(true);
  }, []);
  return isLoaderVisible ? (
    <>
        <div className="spinner absolute bottom-[1.2rem] right-80"/>
        <div className="loading flex absolute bottom-8 right-8">
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
    </>
  ) : null;
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
              <ScrollReveal animation="slideUp" duration={1200} easing="spring" delay={1200}>
                <h1 className="md:text-5xl sm:text-3xl lg:text-7xl text-xl text-white select-none">
                Careertronics
                </h1>
              </ScrollReveal>
              </div>
              </div>
            </div>
          </span>
        </h1>
      </div>
      <Loading />
      <style>{`

        
   
  .loading div {
   font-size: 35px;
   font-family: 'Courier New', Courier, monospace;
   font-weight: 600;
   animation: blur 3s linear forwards;
   line-height: 20px;
   transition: all .5s;
   letter-spacing: 0.2em;
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
    opacity: .85;
  }
   100%{
   opacity: 0;
   }
  }
  .spinner {
     width: 48px;
     height: 48px;
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
     background-size: 100% 11px,11px 100%;
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
          to { transform: translateY(-2000px); }
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
            1733px 25px #FFF, 443px 1617px #FFF, 650px 577px #FFF,
            1589px 1154px #FFF, 1052px 297px #FFF, 750px 245px #FFF,
            412px 914px #FFF, 1660px 1062px #FFF, 1706px 150px #FFF,
            212px 814px #FFF, 1669px 1662px #FFF, 1736px 1553px #FFF;
          animation: animStar 50s linear infinite;
        }
        .stars-small:after {
          content: "";
          position: absolute;
          top: 2000px;
          width: 3px;
          border-radius: 50%;
          height: 3px;
          background: transparent;
          box-shadow: 1747px 1106px #FFF, 534px 1906px #FFF, 1140px 74px #FFF,
            792px 895px #FFF, 1489px 538px #FFF, 507px 1349px #FFF,
            1975px 430px #FFF, 1641px 38px #FFF, 896px 680px #FFF,
            1880px 423px #FFF, 1541px 80px #FFF, 820px 680px #FFF,
            1830px 478px #FFF, 1646px 70px #FFF, 830px 889px #FFF,
            1975px 433px #FFF, 1441px 38px #FFF, 890px 580px #FFF,
            175px 1527px #FFF, 1566px 1954px #FFF, 1907px 1285px #FFF,
            1733px 25px #FFF, 443px 1617px #FFF, 650px 577px #FFF,
            1589px 1154px #FFF, 1052px 297px #FFF, 750px 245px #FFF,
            1289px 1554px #FFF, 1052px 397px #FFF, 550px 245px #FFF,
            1389px 4154px #FFF, 1552px 797px #FFF, 850px 245px #FFF,
            1689px 1854px #FFF, 1952px 997px #FFF, 150px 245px #FFF,
            212px 814px #FFF, 1669px 1662px #FFF, 1736px 1553px #FFF;
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
            1115px 246px #FFF, 1219px 145px #FFF, 971px 939px #FFF;
          animation: animStar 5s linear infinite;
        }
        .stars-medium:after {
          content: "";
          position: absolute;
          top: 2000px;
          width: 5px;
          border-radius: 50%;
          height: 5px;
          background: transparent;
          box-shadow: 409px 292px #FFF, 275px 142px #FFF, 814px 952px #FFF,
            1213px 901px #FFF, 1761px 505px #FFF, 844px 1276px #FFF,
            323px 261px #FFF, 1615px 640px #FFF, 336px 1422px #FFF,
            1115px 246px #FFF, 1219px 145px #FFF, 971px 939px #FFF;
        }
        .stars-large {
          position: absolute;
          width: 7px;
          border-radius: 50%;
          height: 7px;
          background: transparent;
          box-shadow: 624px 445px #FFF, 1369px 1925px #FFF, 240px 1902px #FFF,
            275px 772px #FFF, 1659px 1328px #FFF, 1406px 1638px #FFF,
            1069px 180px #FFF, 1695px 723px #FFF, 1302px 1291px #FFF;
          animation: animStar 15s linear infinite;
        }
        .stars-large:after {
          content: "";
          position: absolute;
          top: 2000px;
          width: 7px;
          border-radius: 50%;
          height: 7px;
          background: transparent;
          box-shadow: 624px 445px #FFF, 1369px 1925px #FFF, 240px 1902px #FFF,
            275px 772px #FFF, 1659px 1328px #FFF, 1406px 1638px #FFF,
            1069px 180px #FFF, 1695px 723px #FFF, 1302px 1291px #FFF;
        }
      `}</style>
    </div>
    </div>
  );
};
export default Loader;