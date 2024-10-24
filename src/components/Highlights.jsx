import { Cards } from './Cards'

import React from 'react'

export const Highlights = () => {
  return (
    <div  style={{ height: "571px", width: "870px", margin: "auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom:"64px" }} >
        <p className='title' style={{ fontSize: "59px" }} >This weeks Specials</p>
        <button className='btn-1'>Online Menu</button>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "38px" }} >
        <Cards img=".\images\HighlightCardImg-1.png" title="Greek salad" description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons." pricing="$ 12.99" />

        <Cards img=".\images\HighlightCardImg-2.png" title="Lemon Desert" description="This comes straight from Grandma recipe book, every last ingredient has been sourced and is as authentic as can be imagined." pricing="$ 5.99" />

        <Cards img=".\images\HighlightCardImg-3.png" title="Bruchetta" description="Our bruschetta is made from grilled bread that has been rubbed with garlic and seasoned with salt and olive oil." pricing="$ 6.99" />
      </div>

    </div>
  )
}
