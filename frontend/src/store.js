import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getAllDataReducer, getDataByIdReducer, editDataReducer } from './reducers/dataReducer'
import { cartReducer } from './reducers/cartReducer'
import { registerUserReducer } from './reducers/userReducer'
import { loginUserReducer } from './reducers/userReducer'
import { getAllUsersReducer } from './reducers/userReducer'
import { editUserReducer } from './reducers/userReducer'
import { getUserByIdReducer } from './reducers/userReducer'
import { placeOrderReducer, getUserOrdersReducer } from './reducers/orderReducer'

const finalReducer = combineReducers({

    getAllDataReducer: getAllDataReducer,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer: loginUserReducer,
    placeOrderReducer: placeOrderReducer,
    getUserOrdersReducer: getUserOrdersReducer,
    getAllUsersReducer: getAllUsersReducer,
    getDataByIdReducer: getDataByIdReducer,
    editDataReducer: editDataReducer,
    editUserReducer: editUserReducer,
    getUserByIdReducer: getUserByIdReducer,

})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer: {
        cartItems: cartItems
    },
    loginUserReducer: {
        currentUser: currentUser
    }
}

const composeEnhancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export default store