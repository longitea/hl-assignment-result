import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Algorithm from '../pages/Algorithm/Algorithm'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default function Routers() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/algorithm" element={<Algorithm />} />
            </Routes>
            <Footer />
        </>

    )
}
