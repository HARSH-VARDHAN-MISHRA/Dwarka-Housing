import React from 'react'
import { Route,Routes } from 'react-router-dom'

import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllUsers from '../../Pages/Users/AllUsers'
import AllLocation from '../../Pages/Location/AllLocation'
import AllProperty from '../../Pages/Property/AllProperty'

const Home = () => {
  return (
    <>
    
      <Header/>
      <div className="rightside">
        <Routes>
          <Route path={"/dashboard"} element={<Dashboard/>}/>

          {/* Category --  */}
          <Route path={"/all-locations"} element={<AllLocation/>}/>

          {/* Product --  */}
          <Route path={"/all-properties"} element={<AllProperty/>}/>
          {/* <Route path={"/add-product"} element={<AddProduct/>}/>
          <Route path={"/edit-product/:id"} element={<EditCategory/>}/>  */} 
          
          {/* --- Orders --- */}
          <Route path={"/all-users"} element={<AllUsers/>}/>         

        </Routes>
      </div>

    </>
  )
}

export default Home