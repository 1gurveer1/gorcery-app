import React, { useEffect, useState } from 'react';
import Item from './Item';
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../actions/dataActions";

const Home = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState('all');

    const datastate = useSelector((state) => state.getAllDataReducer);

    const { data } = datastate;

    const handleChange = (e) => {
        setValue(e.target.value)
        console.log(e.target.value)
        dispatch(getAllData(e.target.value));
    }

    useEffect(() => {

        if (localStorage.getItem("currentUser") == null) {
            window.location.href = "/login";
        }
        else {
            dispatch(getAllData(value));
        }

    }, [])


    return (
        <div className="container">
            <div style={{textAlign: 'center'}} className="my-3">
                <select style={{cursor:'pointer',width: '10%', textAlign: 'center', borderRadius: '5px'}} value={value} onChange={handleChange}>
                    <option >all</option>
                    <option >dairy</option>
                    <option >beverages</option>
                </select>
            </div>
            
            <div className="my-2 row">

                {data.map(item => {

                    return <div className="col-md-3" key={item._id}>
                        <div>
                            <Item item={item} />
                        </div>
                    </div>

                })}

            </div>
        </div>
    )
}

export default Home