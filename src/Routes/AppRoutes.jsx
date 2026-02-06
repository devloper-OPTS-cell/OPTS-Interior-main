import React, { Suspense } from 'react'
import { Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import('../Pages/Home'));
const AboutUs = React.lazy(() => import('../Pages/AboutUs'));
const ContactUs = React.lazy(() => import('../Pages/ContactUs'));
const Services = React.lazy(() => import('../Pages/Services'));
const WorksPage = React.lazy(() => import('../Pages/Projects'));
const ProjectDetail = React.lazy(() => import('../Pages/ProjectDetail'));
const Faq = React.lazy(() => import('../Pages/Faq'));
const NotFound = React.lazy(() => import('../Pages/NotFound'));

function AppRoutes() {
return (
    <Suspense fallback={<div className="min-h-screen bg-[#FBFBF9]" />}>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/projects' element={<WorksPage/>} />
        <Route path='/projects/:slug' element={<ProjectDetail/>} />
        <Route path='/faq' element={<Faq/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Suspense>
)
}

export default AppRoutes
