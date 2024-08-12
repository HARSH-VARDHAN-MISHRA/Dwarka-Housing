import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from '../Header/Header'
import Dashboard from '../../Pages/Dashboard/Dashboard'
import AllUsers from '../../Pages/Users/AllUsers'
import AllLocation from '../../Pages/Location/AllLocation'
import AllProperty from '../../Pages/Property/AllProperty'
import Login from '../Auth/Login'
import ErrorPage from '../../Pages/Error/ErrorPage'

const Home = () => {
  const hansAdminToken = sessionStorage.getItem("hansBuilderToken")
  return (
    <>
      {hansAdminToken ? (
        <>
          <Header />
          <div className="rightside">
            <Routes>
              <Route path={"/dashboard"} element={<Dashboard />} />

              {/* Category --  */}
              <Route path={"/all-locations"} element={<AllLocation />} />

              {/* Product --  */}
              <Route path={"/all-properties"} element={<AllProperty />} />

              {/* --- Orders --- */}
              <Route path={"/all-users"} element={<AllUsers />} />

            </Routes>
          </div>
        </>
      ) : (
        <>
          <Routes>
            <Route path={"/"} element={<Login />} />
            <Route path={"/*"} element={<ErrorPage />} />
          </Routes>
        </>
      )}


    </>
  )
}

export default Home