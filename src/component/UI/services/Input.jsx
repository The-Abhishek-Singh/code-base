'use client'
import React from 'react'
import { useState } from "react";
import { Search } from 'lucide-react';

const Input = () => {


      const [course, setCourse] = useState("");
    
      const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Searching for: ${course}`);
      };

  return (
    <div>





<form
      onSubmit={handleSubmit}
      className="bg-white text-black font-light sm:text-lg text-sm mt-[3vw] rounded-2xl sm:w-[35%] w-[80%] sm:h-16 h-14 flex justify-end opacity-90"
    >
      <div className='m-5'>
      <Search />
      </div>


      <input 
        
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter course name"
        className="w-[60%] h-full px-4 rounded-l-2xl outline-none"
      />
      <button
        type="submit"
        className="bg-red-600 font-light sm:text-lg  text-sm p-2 w-[40%] h-auto rounded-full mr-[-24px] text-white"
      >
        Search Now
      </button>
    </form>



      
    </div>
  )
}

export default Input
