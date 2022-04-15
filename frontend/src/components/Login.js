import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { loginUser } from "../actions/userActions";
import { useSelector } from "react-redux";
import { Link,useHistory } from "react-router-dom"

const Login = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem("currentUser")) {
            window.location.href = "/";
        }
    }, []);

    function login() {
        const user = { email, password };
        dispatch(loginUser(user));
    }

    return (
        <div className="login">
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
                        Login
                    </h2>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="my-3 form-label">Email </label>
                        <input
                            required
                            type="email"
                            placeholder="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                        />
                        <label htmlFor="exampleInputEmail1" className="my-3 form-label">Password </label>
                        <input
                            type="password"
                            placeholder="password"
                            className="form-control"
                            value={password}
                            required
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                        />

                        <button style={{ backgroundColor: "lightblue" }} onClick={login} className="btn mt-3 mb-3">
                            LOGIN
                        </button>
                        <br />
                        <a style={{ color: "blue",textDecoration:'none' }} href="/register" className="mt-2">
                            Click Here To Register
                        </a>

                        <a style={{ color: "blue", textDecoration: 'none'}} href="/email" className="mt-2 mx-4">
                            Forgot Password
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login