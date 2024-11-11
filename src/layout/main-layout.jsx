import React from 'react'
import Header from './header'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
         <div>
            <Header/>
         </div>
         <main>
            <Outlet/>
         </main>
    </div>
  )
}
