import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useHistory } from "react-router-dom";
import { deleteData, getAllData } from "../actions/dataActions";

export default function Admin() {

  let history = useHistory();
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;

  const [value, setValue] = useState('all');

  const dispatch = useDispatch();

  const datastate = useSelector((state) => state.getAllDataReducer);

  const { data } = datastate;

  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(e.target.value)
    dispatch(getAllData(e.target.value));
  }

  useEffect(() => {

    if (currentUser.email === 'admin@gmail.com') {
      dispatch(getAllData(value));
    }

    else {
      console.log(currentUser.email)
      history.push("/")
      alert('You Dont have Access to open this Tab')
    }

  }, []);

  return <div className="container">

    <h2 className="my-3" style={{ textAlign: 'center' }}>Item List</h2>

    <div style={{ textAlign: 'center' }} className="my-3">
      <select style={{ cursor: 'pointer', width: '10%', textAlign: 'center', borderRadius: '5px' }} value={value} onChange={handleChange}>
        <option >all</option>
        <option >dairy</option>
        <option >beverages</option>
      </select>
    </div>

    <table className='table table-bordered table-responsive-sm'>

      <thead className='thead-dark'>
        <tr>
          <th>Name</th>
          <th>Prices</th>
          <th>Category</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map(item => {

          return <tr>
            <td>{item.name}</td>
            <td>

              Price : {item.price}


            </td>
            <td>{item.category}</td>
            <td>
              <i className='fa fa-trash m-1' onClick={() => { dispatch(deleteData(item._id)) }}></i>
            </td>
            <td>
              <Link to={`/admin/${item._id}`}><i className='fa fa-edit m-1'></i> </Link>
            </td>

          </tr>

        })}
      </tbody>

    </table>


  </div>;
}