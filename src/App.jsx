import React from 'react'
import MainLayout from './Layout/MainLayout'
import AppRoutes from './Routes/AppRoutes'
import Analytics from './Components/Analytics'

export default function App() {
  return (
<>
  <Analytics />
  <MainLayout>
    <AppRoutes/>
  </MainLayout>
</>
  )
}
