import React from 'react'

export const CartPage = () => {
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
                    <tr>
                        <th scope="row">Name</th>
                        <td>Price</td>
                        <td>Amount</td>
                        <td>Delete</td>
                    </tr>
                </tbody>
            </table>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">Buy</button>
            </div>
        </>
    )
}
