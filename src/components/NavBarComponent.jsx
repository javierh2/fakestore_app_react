import React from 'react'
import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import '../styles/NavBarComponent.css'


export const NavBarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" href="#">React SHOP</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/" className="nav-link active" aria-current="page">Productos</NavLink>
                    </div>
                </div>
                <NavLink to="/cart">
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCart color="action" />
                    </Badge>
                </NavLink>
            </div>
        </nav>
    )
}
