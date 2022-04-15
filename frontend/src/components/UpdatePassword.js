import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, editUser } from "../actions/userActions";
import { Card } from 'react-bootstrap'

export default function UpdatePassword() {


    const dispatch = useDispatch();

    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [confirm_password, setconfirm_password] = useState();
    const [otp, setotp] = useState();
    
    function formHandler(e) {
        e.preventDefault();
        const newuser = { email, password, confirm_password, otp };
        dispatch(editUser(newuser))
    }

    return (
        <div className="container my-3">

            <Card className="text-left shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }} className="my-3">Reset Password</Card.Title>

                    <Card.Text>
                        <form onSubmit={formHandler}>

                            <label htmlFor="exampleInputEmail1" className="my-3 form-label">Email</label>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="email"
                                onChange={(e) => {
                                    setemail(e.target.value);
                                }}
                            />

                            <label htmlFor="exampleInputEmail1" className="my-3 form-label">New Password</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="password"
                                onChange={(e) => {
                                    setpassword(e.target.value);
                                }}
                            />

                            <label htmlFor="exampleInputEmail1" className="my-3 form-label">Confirm Password</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="confirm_password"
                                onChange={(e) => {
                                    setconfirm_password(e.target.value);
                                }}
                            />

                            <label htmlFor="exampleInputEmail1" className="my-3 form-label">OTP</label>
                            <input
                                className="form-control"
                                type="number"
                                placeholder="OTP"
                                onChange={(e) => {
                                    setotp(e.target.value);
                                }}
                            />
                            <button style={{ border: '1px solid black', borderRadius: '5px' }} className="my-2 btn mt-3" type="submit">
                                Update
                            </button>
                        </form>
                    </Card.Text>

                </Card.Body>

            </Card>
        </div>
    );
}