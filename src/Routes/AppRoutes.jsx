import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import Services from '../Pages/Services';
import WorksPage from '../Pages/WorksPage';

function AppRoutes() {
return (
    <Routes>
<Route path='/' element={<Home/>} />
<Route path='/about-us' element={<AboutUs/>} />
<Route path='/contact-us' element={<ContactUs/>} />
<Route path='/services' element={<Services/>} />
<Route path='/works' element={<WorksPage/>} />
    </Routes>
)
}

export default AppRoutes