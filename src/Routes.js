import React, { useContext } from 'react'
import { Routes as Router, Route, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/login'
import Login from './pages/Login'
import Layout from './pages/Layout'
import User from './pages/User'
import Home from './pages/Home'

const PrivateRoutes = ({children}) => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) return <Navigate to='/login' replace />

  return children
}

const GuestRoutes = () => {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) return <Navigate to='/' replace />
  return <Login />
}

const Routes = () => {
  return (
    <Router>
      <Route path='/login' element={<><GuestRoutes><Login /></GuestRoutes></>} />
      <Route element={<><PrivateRoutes><Layout/></PrivateRoutes></>}>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
      </Route>
    </Router>
  )
}

export default Routes