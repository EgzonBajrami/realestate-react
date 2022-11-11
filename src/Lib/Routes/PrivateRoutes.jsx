import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PrivateRoutes = ({ role, children }) => {
  const auth = useSelector((state) => state.auth.data)

  if (!auth) {
    return <Navigate to="/login" />
  }


    if (role === 'ADMIN') {
      return <Navigate to="/dashboard" />
    } 

  return (
    <div className={role}>
      {children}
    </div>
  )
}

export default PrivateRoutes