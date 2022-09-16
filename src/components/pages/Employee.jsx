import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Employee = () => {

  const navigate = useNavigate();

  const isLogedIn = localStorage.getItem('is_loged_in') ? JSON.parse(localStorage.getItem('is_loged_in')) : false;

  useEffect(() => {
    if(isLogedIn === false) {
      navigate('/')
    }
  },[isLogedIn,navigate])

  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default Employee