import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import('../Pages/Home'));
const AboutUs = React.lazy(() => import('../Pages/AboutUs'));
const ContactUs = React.lazy(() => import('../Pages/ContactUs'));
const Services = React.lazy(() => import('../Pages/Services'));
const WorksPage = React.lazy(() => import('../Pages/Projects'));

function AppRoutes() {
return (
    <Suspense fallback={<div className="min-h-screen bg-[#FBFBF9]" />}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/projects' element={<WorksPage/>} />
      </Routes>
    </Suspense>
)
}

export default AppRoutes
