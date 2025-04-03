import React from 'react';


const MapsDisplay = () => {
  return (
    <div className="w-full mb-[10rem] mt-24">
      <div className="flex flex-col md:flex-row w-full">

      
             <div className="w-full md:w-1/3 h-96 p-1 ">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4728.054677395741!2d78.36139677601665!3d17.44857318344912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f332a6324f%3A0x6149f84d0a6fd8e6!2sCAREERTRONIC%20GLOBAL%20SERVICES%20PRIVATE%20LIMITED!5e1!3m2!1sen!2sin!4v1743414266297!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
         

     
        <div className="w-full md:w-1/3 h-96 p-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4618.870455450017!2d81.64287877609365!3d21.25816488044932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddb041a68115%3A0x203ac3fe0d691b19!2sCAREERTRONIC%20GLOBAL%20SERVICES!5e1!3m2!1sen!2sin!4v1743414783706!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="w-full md:w-1/3 h-96 p-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.540696831341!2d81.32033767609249!3d21.204845080488823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d2740ed2f49%3A0x9719b5faac671196!2sBIZOFFICE%20(Co-working%20Office%20Spaces)!5e1!3m2!1sen!2sin!4v1743414721799!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        
      </div>
    </div>
  );
};

export default MapsDisplay;