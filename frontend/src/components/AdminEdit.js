import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData, getDataById } from "../actions/dataActions";
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap'

export default function AdminEdit({match}) {

    match = useParams();

    const dispatch = useDispatch();
    const [name, setname] = useState();
    const [price, setprice] = useState();
    const [image, setimage] = useState("");
    const [category, setcategory] = useState("");

    const getdatabyidstate = useSelector((state) => state.getDataByIdReducer);
    const { data } = getdatabyidstate;

    useEffect(() => {

        if (data) {
            if (data._id === match.dataid) {

                setname(data.name)
                setcategory(data.category)
                setprice(data.price)
                setimage(data.image)
            }
            else {
                dispatch(getDataById(match.dataid));
            }

        }
        else {
            dispatch(getDataById(match.dataid));
        }



    }, [data, dispatch]);

    function formHandler(e) {
        e.preventDefault();

        const editeddata = {
            _id: match.dataid,
            name,
            image,
            category,
            price,
        };

        dispatch(editData(editeddata))
    }

    return (
        <div className="container my-3">

            <Card className="text-left shadow-lg p-3 mb-5 bg-white rounded">
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center' }} className="my-3">Update Data</Card.Title>

                    <Card.Text>
                        <form onSubmit={formHandler}>
                            <label htmlFor="exampleInputEmail1" className="my-3 form-label">Item Name </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={(e) => {
                                    setname(e.target.value);
                                }}
                            />
                            <label htmlFor="exampleInputEmail1" className="my-3 form-label">Price </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="price"
                                value={price}
                                onChange={(e) => {
                                    setprice(e.target.value);
                                }}
                            />
                            <label htmlFor="exampleInputEmail1" className="my-3 form-label">Category </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="category"
                                value={category}
                                onChange={(e) => {
                                    setcategory(e.target.value);
                                }}
                            />
                            <label htmlFor="exampleInputEmail1" className="my-3 form-label">Image URL </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder="image URL"
                                value={image}
                                onChange={(e) => {
                                    setimage(e.target.value);
                                }}
                            />
                            <button style={{border: '1px solid black', borderRadius: '5px'}} className="my-2 btn mt-3" type="submit">
                                Update
                            </button>
                        </form>
                    </Card.Text>
                    
                </Card.Body>
                
            </Card>
        </div>
    );
}