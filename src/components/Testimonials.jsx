import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { feedback } from './Feedback.js';

export const Testimonials = () => {
  return (
    <>
    <p className='title' style={{color:"#495E57", display:"flex", justifyContent:"center", paddingTop:"20px", fontSize:"70px"}} >Testimonials</p>
    <div style={{
      height: "auto", 
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "20px",
      padding: "20px",
      paddingTop:"90px",
      paddingBottom:"90px",
      flexWrap: "wrap" 
    }}>
      <TestimonialCard image="./images/user-1.png" user="Hannah Schmitt" profesion="Lead designer" feedback={feedback[0]} />
      <TestimonialCard image="./images/user-2.png" user="Emily clerk" profesion="Developer" feedback={feedback[1]} />
      <TestimonialCard image="./images/user-3.png" user="Julia" profesion="Actress" feedback={feedback[2]} />
      <TestimonialCard image="./images/user-4.png" user="John Doe" profesion="Model" feedback={feedback[3]} />
    </div>
    </>
  );
};

