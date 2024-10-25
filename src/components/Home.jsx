import React from 'react'
import { Hero } from './Hero';
import { Highlights } from './Highlights';
import { Testimonials } from './Testimonials';
import { About } from './About';

export const Home = () => {
    return (
        <div>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </div>
    )
}
