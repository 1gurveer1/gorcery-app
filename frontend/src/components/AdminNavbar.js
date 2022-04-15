import React from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

const AdminNavbar = () => {

    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch();

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
                            <a style={{ color: 'black' }} className="nav-link" href="/add">
                                Add Item 
                            </a>
                        </li>

                        <li className="nav-item" >
                            <a style={{ color: 'black' }} className="nav-link" href="/users">
                                Users
                            </a>
                        </li>

                        <li className="nav-item" >
                            <a style={{ color: 'black' }} className="nav-link" href="/admin">
                                Item List
                            </a>
                        </li>

                        {currentUser ? (
                            <div className="dropdown mt-2 mx-2">

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
                                    <a style={{ color: 'black' }} className="nav-link mx-2" href="/login">
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

export default AdminNavbar