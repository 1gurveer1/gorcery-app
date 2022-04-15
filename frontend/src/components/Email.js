import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../actions/userActions";
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import UpdatePassword from "./UpdatePassword";


export default function Email() {


    const dispatch = useDispatch();
    const [email, setemail] = useState();

    function formHandler(e) {
        e.preventDefault();

        console.log(email)
        dispatch(getUserById(email));
    }

    return (
        <div className="container my-3">

            <Card className="text-left shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }} className="my-3">Generate OTP</Card.Title>

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
                            <button style={{ border: '1px solid black', borderRadius: '5px' }} className="my-2 btn mt-3" type="submit">
                                OTP
                            </button>


                        </form>
                    </Card.Text>

                </Card.Body>

            </Card>
            <UpdatePassword></UpdatePassword>
        </div>
    );
}