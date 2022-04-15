import React from 'react'
import { Link, useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

const Navbar = () => {

    let history = useHistory();
    const cartstate = useSelector((state) => state.cartReducer);
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

    const handleClick = async (e) => {

        if (currentUser.email === 'admin@gmail.com') {

            history.push("/admin")
        }

        else{
            alert('You Dont have Access to open this Tab')
        }
    }

    return (

        <nav className="shadow-lg navbar navbar-expand-lg" style={{ backgroundColor: 'white' }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{ color: 'black' }} >Groccify</Link>
                <button style={{ border: '1px solid #08EFA0' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i style={{ color: '#08EFA0' }} className="fas fa-sliders-h"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="text-light navbar-nav me-auto mb-2 mb-lg-0">

                        <li className="nav-item" >
                            <a style={{ color: 'black' }} className="nav-link" href="/cart">
                                Cart {cartstate.cartItems.length}
                            </a>
                        </li>

                        <li className="nav-item" >
                            <a style={{ color: 'black' }} className="nav-link" href="/orders">
                                Order List
                            </a>
                        </li>

                        <li onClick={handleClick} type="button" className="nav-item" >
                            <a style={{ color: 'black' }} className="nav-link">
                                Admin
                            </a>
                        </li>

                        {currentUser ? (
                            <div className="mx-2 dropdown mt-2">

                                <div style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        dispatch(logoutUser());
                                    }}
                                >
                                    <li style={{ color: 'black' }}>Logout</li>
                                </div>

                            </div>
                        ) : (
                            <li className="nav-item">
                                    <a style={{ color: 'black' }} className="nav-link" href="/login">
                                    Login
                                </a>
                            </li>
                        )}

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar