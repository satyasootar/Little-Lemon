import { Cards } from './Cards';
import React from 'react';
import { Link } from 'react-router-dom';

export const Highlights = () => {
  return (
    <div style={{ height: "auto", width: "100%", maxWidth: "870px", margin: "auto", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "64px",}}>
        <p className='title' style={{ fontSize: "59px" }}>This week's Specials</p>
        <Link to='/menu' ><button className='btn-1'>Online Menu</button></Link>
      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap", // Allow wrapping of cards
      }}>
        <div > 
          <Cards img="./images/HighlightCardImg-1.png" title="Greek salad" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons." pricing="$ 12.99" />
        </div>

        <div >
          <Cards img="./images/HighlightCardImg-2.png" title="Lemon Dessert" description="This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." pricing="$ 5.99" />
        </div>

        <div >
          <Cards img="./images/HighlightCardImg-3.png" title="Bruchetta" description="Our bruschetta is made from grilled bread that has been rubbed with garlic and seasoned with salt and olive oil." pricing="$ 6.99" />
        </div>
      </div>
    </div>
  );
};
