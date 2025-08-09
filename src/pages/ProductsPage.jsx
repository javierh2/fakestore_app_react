import { CardComponent } from '../components/CardComponent'
import { ProductContext } from '../context/ProductContext'
import { useContext } from 'react'


export const ProductsPage = () => {
    const { products } = useContext(ProductContext)

    return (
        <>
            <h1>Productos</h1>
            <hr />
            {products.map(product => (
                <CardComponent
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            ))}
        </>
    )
}
