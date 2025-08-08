import React from 'react'
import { NavBarComponent } from './components/NavBarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { CartPage } from './pages/CartPage'


export const CarritoApp = () => {
    return (
        <>
            <NavBarComponent />
            <Routes>
                <Route path="/" element={<ProductsPage />}></Route>
                <Route path="/cart" element={<CartPage />}></Route>
                <Route path="/*" element={< Navigate to="/" />}></Route>
            </Routes>
        </>
    )
}
