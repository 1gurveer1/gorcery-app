export const addToCart = (item, quantity) => (dispatch, getState) => {

    var cartItem = {
        name: item.name,
        _id: item._id,
        image: item.image,
        quantity: Number(quantity),
        price: item.price,
        totalprice: item.price * quantity
    }


    if (cartItem.quantity > 10) {
        alert('You cannot add more than 10 quantities')
    }
    else {
        if (cartItem.quantity < 1) {
            dispatch({ type: 'DELETE_FROM_CART', payload: item })
        }
        else {
            dispatch({ type: 'ADD_TO_CART', payload: cartItem })
        }

    }


    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}

export const deleteFromCart = (item) => (dispatch, getState) => {


    dispatch({ type: 'DELETE_FROM_CART', payload: item })
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems', JSON.stringify(cartItems))


}