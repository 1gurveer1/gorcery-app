import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserOrders } from '../actions/orderAction'

const OrderList = () => {

    const dispatch = useDispatch()

    const orderstate = useSelector(state => state.getUserOrdersReducer)
    const { orders } = orderstate

    useEffect(() => {

        dispatch(getUserOrders())

    }, [])

    return (
        <div>
            <h2 className="my-3" style={{ fontSize: '35px', textAlign: 'center' }}>Orders List</h2>
            <hr />
            <div className="row justify-content-center">

                {orders && orders.map(order => {
                    return <table className="table table-bordered table-responsive-lg" style={{width: '90%',backgroundColor: 'lightgreen', color: 'black' }}>

                        <thead className='thead-dark'>
                            <tr>
                                <th>Items</th>
                                <th>Address</th>
                                <th>Order Details</th>
                            </tr>
                        </thead>

                        <tbody>

                            <tr >
                                <td className=''>
                                    <hr />
                                    {order.orderItems.map(item => {
                                        return <div>
                                            <p>{item.name} {item.price} * {item.quantity} = {item.totalprice}</p>
                                        </div>
                                    })}
                                </td>
                                <td className=''>

                                    <hr />
                                    <p>Street : {order.shippingAddress.street}</p>
                                    <p>City : {order.shippingAddress.city}</p>
                                    <p>Country : {order.shippingAddress.country}</p>
                                </td>
                                <td className=''>
                                    <hr />
                                    <p>Order Amount : {order.orderAmount}</p>
                                    <p>Date : {order.createdAt.substring(0, 10)}</p>
                                </td>
                            </tr>

                        </tbody>



                    </table>
                })}
            </div>
        </div>
    )
}

export default OrderList