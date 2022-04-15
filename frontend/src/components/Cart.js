import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { deleteFromCart } from "../actions/cartActions";
import Stripe from "../components/Stripe";


const Cart = () => {

    const cartstate = useSelector((state) => state.cartReducer);
    const cartItems = cartstate.cartItems;
    const dispatch = useDispatch();
    var subtotal = cartItems.reduce((x, item) => x + item.totalprice, 0);

    useEffect(() => {
        if (localStorage.getItem("currentUser") == null) {
            window.location.href = "/login";
        }
    }, []);

    return (
        <div>
            <div className="row justify-content-center p-2">
                <div className="col-md-8">
                    <h2 style={{ fontSize: "40px" }}>Cart</h2>

                    {cartItems.map((item) => {
                        return (
                            <table className="table table-bordered table-responsive-sm">

                                <thead className='thead-dark'>
                                    <tr>
                                        <th>Name</th>
                                        <th>Prices</th>
                                        <th>Quantity</th>
                                        <th>Add</th>
                                        <th>Item</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>

                                <tbody >
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            Price : {item.quantity} * {item.price} ={" "}
                                            {item.totalprice}
                                        </td>
                                        <td style={{ display: "inline" }}>Quantity :

                                            {item.quantity}
                                        </td>

                                        <td>
                                            <i
                                                className="fa fa-plus"
                                                aria-hidden="true"
                                                onClick={() => {
                                                    dispatch(
                                                        addToCart(item, item.quantity + 1)
                                                    );
                                                }}
                                            ></i>
                                        </td>
                                        


                                        <td className=" w-200">
                                            <img
                                                src={item.image}
                                                style={{ height: "100px", height: "100px" }}
                                            />
                                        </td>
                                        <td className="m-1 w-200">
                                            <i
                                                className="fa fa-trash"
                                                aria-hidden="true"
                                                onClick={() => {
                                                    dispatch(deleteFromCart(item));
                                                }}
                                            ></i>
                                        </td>
                                    </tr>

                                </tbody>


                            </table>

                        );
                    })}
                </div>

                <div className="col-md-3 text-right">
                    <h2 style={{ fontSize: "45px" }}>Total : {subtotal} /-</h2>
                    <Stripe subtotal={subtotal} />
                </div>


            </div>
        </div>
    )
}

export default Cart