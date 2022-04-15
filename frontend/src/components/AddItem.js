import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom"

const AddItem = () => {

    let history = useHistory();
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const [item, setItem] = useState({ name: "", category: "", price: "", image: "" })

    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: item.name, category: item.category, price: item.price, image: item.image })
        });

        const json = await response.json();
        console.log(json);
    }

    const onChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    useEffect(() => {

        if (currentUser.email === 'admin@gmail.com') {

            history.push("/add")
        }

        else {
            history.push("/")
            alert('You Dont have Access to open this Tab')
        }
        

    }, [])

    return (
        <div className="container">
            <Card className="login" style={{ marginTop: '60px' }}>
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center', fontSize: '30px' }}>Add Item</Card.Title>
                    <Card.Text>
                        <form onSubmit={handleSubmit} >

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Item Name </label>
                                <input type="name" className="form-control" id="name" name="name" aria-describedby="emailHelp"
                                    onChange={onChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                                <input type="name" className="form-control" id="category" name="category"
                                    onChange={onChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                                <input type="name" className="form-control" id="price" name="price"
                                    onChange={onChange} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Image URL</label>
                                <input type="name" className="form-control" id="image" name="image"
                                     onChange={onChange} required />
                            </div>

                            <button type="submit" className="button my-3">Add Item</button>

                        </form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default AddItem
