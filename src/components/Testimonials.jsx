import React from 'react'
import { TestimonialCard } from './TestimonialCard'
import { feedback } from './Feedback.js'

console.log(feedback[0])

export const Testimonials = () => {
  return (
    <div  style={{height:"535px", display:"flex", justifyContent:"space-evenly", alignItems:"center", gap:"80px", padding:"20px"}} >
        <TestimonialCard image="./images/user-1.png" user ="Hannah Schmitt" profesion = "Lead designer"  feedback = {feedback[0]}/>
        <TestimonialCard image="./images/user-2.png" user ="Emily clerk" profesion = "Devloper"  feedback = {feedback[1]}/>
        <TestimonialCard image="./images/user-3.png" user ="Julia" profesion = "Actress"  feedback = {feedback[2]}/>
        <TestimonialCard image="./images/user-4.png" user ="John Doe" profesion = "Model"  feedback = {feedback[3]}/>
    </div>
  )
}
