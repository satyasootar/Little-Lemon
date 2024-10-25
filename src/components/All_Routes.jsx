import React from 'react'
import { TableBookingParent }  from './TableBookingParent'
import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Confirmation } from './Confirmation';
import { AboutPage } from './AboutPage';
import { Menu } from './Menu';
export const AllRoutes = () => {
    const routes = [{
        path:"/",
        element: <Home />
    },
    {
        path:"/reservation",
        element: <TableBookingParent />
    },
    {
        path:"/confirmation",
        element: <Confirmation />
    },
    {
        path:"/about",
        element: <AboutPage />
    },
    {
        path:"/menu",
        element: <Menu />
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
