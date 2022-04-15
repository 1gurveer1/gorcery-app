import axios from "axios";

export const getAllData = (filtervalue) => async dispatch => {

    dispatch({ type: 'GET_DATA_REQUEST' })

    try {
        const response = await axios.post('/api/fetchdata', {filtervalue})
        console.log(response);
        dispatch({ type: 'GET_DATA_SUCCESS', payload: response.data })

    } catch (error) {
        dispatch({ type: 'GET_DATA_FAILED', payload: error })
    }

}

export const getDataById = (dataid) => async dispatch => {

    dispatch({ type: 'GET_DATABYID_REQUEST' })

    try {
        const response = await axios.post('/api/getbyid', { dataid })
        console.log(response);
        dispatch({ type: 'GET_DATABYID_SUCCESS', payload: response.data })
    } catch (error) {
        dispatch({ type: 'GET_DATABYID_FAILED', payload: error })
    }

}


export const editData = (newData) => async dispatch => {
    dispatch({ type: 'EDIT_DATA_REQUEST' })
    try {
        const response = await axios.post('/api/edit', { newData })
        console.log(response);
        dispatch({ type: 'EDIT_DATA_SUCCESS' })
        window.location.href = '/admin'
    } catch (error) {
        dispatch({ type: 'EDIT_DATA_FAILED', payload: error })
    }
}

export const deleteData = (dataid) => async dispatch => {

    try {
        const response = await axios.post('/api/delete', { dataid })
        alert('Data Deleted Successfully')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('Something went wrong')
        console.log(error);
    }


}