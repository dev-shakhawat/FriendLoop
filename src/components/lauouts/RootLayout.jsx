import React from 'react'
import Nav from '../common/nav/Nav'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div>
        <Nav/>

        <Outlet/>
    </div>
  )
}
