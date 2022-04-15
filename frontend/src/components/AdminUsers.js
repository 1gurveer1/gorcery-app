import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from '../actions/userActions'
import { useHistory } from "react-router-dom"

export default function AdminUsers() {

    let history = useHistory();
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;

    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUsersReducer)
    const { users } = usersstate

    useEffect(() => {

        if (currentUser.email === 'admin@gmail.com') {

            dispatch(getAllUsers())
        }

        else {
            history.push("/")
            alert('You Dont have Access to open this Tab')
        }
 

    }, [])
    return (
        <div className="container">

            <h1 className="my-3" style={{textAlign: 'center'}}>Users list</h1>

            <table className='table table-striped table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {users && users.map(user => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className='fa fa-trash' onClick={() => { dispatch(deleteUser(user._id)) }}></i></td>
                        </tr>
                    })}
                </tbody>

            </table>

        </div>
    )
}