'use client';
import React from 'react';
import { MousePointer } from "lucide-react";

function TawktoButton({ mdWidth, lgWidth, mdHeight, lgHeight, mdtextsize,Height,Width }) {
  const showAlert = () => {
    const alertBox = document.createElement('div');
    alertBox.innerText = "Live Chat will be available soon!";
    Object.assign(alertBox.style, {
      backgroundColor: '#ffeb3b',
      color: '#333',
      padding: '15px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontWeight: 'bold',
      textAlign: 'center',
      width: '300px',
      position: 'fixed',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: '1000',
      fontFamily: 'Arial, sans-serif',
    });
    document.body.appendChild(alertBox);
    
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 2200);
  };

  return (
    <div className="flex justify-center items-center ">
      <button
        className={`bg-[#11A4FF] text-white rounded-md flex flex-row justify-center items-center gap-3 hover:text-white hover:bg-blue-600 group transition-all
          ${mdWidth ? `md:w-[${mdWidth}px]` : 'md:w-[110px]'}
          ${lgWidth ? `lg:w-[${lgWidth}px]` : 'lg:w-[150px]'}
          ${mdHeight ? `md:h-[${mdHeight}px]` :'md:h-[42px]'}
          ${lgHeight ? `lg:h-[${lgHeight}px]` :'lg:h-[45px]'}
          ${Width ? ` w-[${Width}px]` : 'w-[100px]'}
          ${Height ? `h-[${Height}px]` :'h-[30px]'}
          p-3`}
        onClick={() => {
          try {
            Tawk_API.toggle();
          } catch (error) {
            showAlert();
          }
        }}
      >
        <span className={`${mdtextsize ? `md:text-[${mdtextsize}px]` : 'md:text-[16px]'} text-md`}>
          Live Chat
        </span>
        <span>
          <MousePointer className="group-hover:translate-x-1 transition-all" />
        </span>
      </button>
    </div>
  );
}

export default TawktoButton;
