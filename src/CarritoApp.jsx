import React from 'react'
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate, Route } from 'react-router-dom'

export const CarritoApp = () => {
    return (
        <>
            <NavBarComponent />
            <Routes>
                <Route path="/"></Route>
                <Route path="/cart"></Route>
                <Route path="/*" element={< Navigate to="/" />}></Route>
            </Routes>
        </>
    )
}
