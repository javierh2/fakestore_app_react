import { NavBarComponent } from './components/NavBarComponent'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ProductsPage } from './pages/ProductsPage'
import { CartPage } from './pages/CartPage'
import { ProductProvider } from './context/ProductProvider'


export const CarritoApp = () => {
    return (
        <ProductProvider>
            <NavBarComponent />
            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={<ProductsPage />}></Route>
                    <Route path="/cart" element={<CartPage />}></Route>
                    <Route path="/*" element={< Navigate to="/" />}></Route>
                </Routes>
            </div>
        </ProductProvider>
    )
}
