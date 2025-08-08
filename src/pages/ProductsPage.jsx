import React, { use } from 'react'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { CardComponent } from '../components/CardComponent'


export const ProductsPage = () => {

    const [products, setProducts] = useState([])

    const fetchProducts = async() => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Hubo un error al obtener los productos',
            })
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Productos</h1>
            <hr />
            {products.map(product => (
                <CardComponent
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
                />
            ))}
        </>
    )
}
