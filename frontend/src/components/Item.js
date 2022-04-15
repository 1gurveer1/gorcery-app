import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { addToCart } from "../actions/cartActions";
import { useDispatch } from 'react-redux'

const Item = ({ item }) => {

    const [quantity, setQuantity] = useState(1)

    const dispatch = useDispatch()

    function addtocart()
    {
        dispatch(addToCart(item, quantity))
    }

    return (
        <>
            <Card className="shadow-lg item_card mx-2 my-2">
                <div className="item_name">{item.name}</div>
                <img src={item.image} alt=' ' />

                <div className="item_quantity">
                    <p>Quantity</p>
                    <select style={{ width: '70%' }} value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {

                            return <option value={i + 1}>{i + 1}</option>

                        })}
                    </select>
                </div>

                <div className="flex-container my-3">

                    <div className="m-1 w-100">
                        Price: {item.price * quantity}
                    </div>

                    <div className="m-1 w-100">
                        <button onClick={addtocart} className="btn btn-primary mx-2">Add To Cart</button>
                    </div>
                </div>

            </Card>
        </>
    )
}

export default Item