import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'


export const CartPage = () => {

    const { shoppingList, removeProduct, incrementQuantity, decrementQuantity } = useContext(CartContext)

    const totalPrice = () => {
        return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    }

    const handlerPurchase = () => {
        const productsToPurchase = shoppingList.map(product => `${product.title} x ${product.quantity}`).join('\n');
        Swal.fire({
            title: `You are about to purchase the following items:\n${productsToPurchase}\n\nTotal: $${totalPrice()}`,
            icon: 'success',
            html: `<pre style="text-align: left;">${productsToPurchase}</pre>`,
        })
    }

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
                                <button className="btn btn-warning" onClick={() => decrementQuantity(product.id)}>
                                    <span style={{ marginRight: '6px' }}>-</span>
                                </button>
                                <span style={{ margin: '0 8px' }}>{product.quantity}</span>
                                <button className="btn btn-success" onClick={() => incrementQuantity(product.id)}>
                                    <span style={{ marginLeft: '6px' }}>+</span>
                                </button>
                            </td>
                            <td>
                                <button  className="btn btn-danger" onClick={() => removeProduct(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                    <th><b>Total:</b></th>
                    <td></td>
                    <td></td>
                    <td>${totalPrice()}</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button" onClick={handlerPurchase}>Buy</button>
            </div>
        </>
    )
}
