import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Algorithm from '../pages/Algorithm/Algorithm'

export default function Routers() {
    return (
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/algorithm" element={<Algorithm />} />
        </Routes>
    )
}
