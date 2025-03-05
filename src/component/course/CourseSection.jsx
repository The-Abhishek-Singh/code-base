'use client'
import React from 'react';


export default function CourseSection({ title, modules }) {
    return (
      <div
      className="course-section relative bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 relative inline-block overflow-hidden">{title}</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {modules.map((module, index) => (
            <li key={index} className="mb-1 list-none">
              <strong>Module {index + 1} -</strong> {module}  
            </li>
          ))}
        </ul>
        <style>{`
        /* styles/CourseSection.module.css */
        .course-section {
            background-color: #f8f8f8;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 20px 15px 10px rgba(225, 0, 0, 0.1);
          }
  }`}</style>
      </div>
    );
  }