import React, { useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";

const Register = () => {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirm_password, setconfirm_password] = useState("");

    const dispatch = useDispatch();

    function register() {
        if (password != confirm_password) {
            alert("passwords not matched");
        } else {
            const user = {
                name,
                email,
                password,
                confirm_password,
            };
            console.log(user);
            dispatch(registerUser(user));
        }
    }

  return (
      <div className="register">
          <div className="row justify-content-center mt-5">
              <div className="col-md-5 mt-2 text-left shadow-lg p-3 mb-5 bg-white rounded">

                  <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
                      Register
                  </h2>
                  <div>
                      <label htmlFor="exampleInputEmail1" className="my-3 form-label">Name </label>
                      <input
                          required
                          type="text"
                          placeholder="name"
                          className="form-control"
                          value={name}
                          onChange={(e) => {
                              setname(e.target.value);
                          }}
                      />
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
                      <label htmlFor="exampleInputEmail1" className="my-3 form-label">Confirm Password </label>
                      <input
                          type="password"
                          placeholder="confirm password"
                          className="form-control"
                          value={confirm_password}
                          required
                          onChange={(e) => {
                              setconfirm_password(e.target.value);
                          }}
                      />
                      <button style={{ backgroundColor: "lightblue"}} onClick={register} className="btn mt-3 mb-3">
                          REGISTER
                      </button>
                      <br />
                      <a style={{ color: "blue",textDecoration:'none' }} href="/login">
                          Click Here To Login
                      </a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Register