import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartProvider } from '../context/CartProvider'

export const CartPage = () => {

    const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingList.map(product => (
                        <tr key={product.id}>
                            <th scope="row">{product.title}</th>
                            <td>{product.price}</td>
                            <td>
                                <button  className="btn btn-warning" onClick={() => decrementQuantity(product.id)}>-</button>
                                {product.quantity}
                                <button  className="btn btn-success" onClick={() => incrementQuantity(product.id)}>+</button>
                            </td>
                            <td>
                                <button  className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">Buy</button>
            </div>
        </>
    )
}
