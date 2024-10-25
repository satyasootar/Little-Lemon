import React from 'react'
import { TableBooking }  from './TableBooking'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Confirmation } from './Confirmation';
export const AllRoutes = () => {
    const routes = [{
        path:"/",
        element: <Home />
    },
    {
        path:"/reservation",
        element: <TableBooking />
    },
    {
        path:"/confirmation",
        element: <Confirmation />
    }
]

  return (
    <Routes>
     {
        routes.map((ele, idx)=>{
            return <Route key={idx} path = {ele.path} element =  {ele.element} />
            
        })
     }
   </Routes>
  )
}
