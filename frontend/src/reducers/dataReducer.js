export const getAllDataReducer = (state = { data: [] }, action) => {

    switch (action.type) {
        case 'GET_DATA_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_DATA_SUCCESS': return {
            loading: false,
            data: action.payload
        }
        case 'GET_DATA_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}


export const getDataByIdReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_DATABYID_REQUEST': return {
            loading: true,
            ...state
        }
        case 'GET_DATABYID_SUCCESS': return {
            loading: false,
            data: action.payload
        }
        case 'GET_DATABYID_FAILED': return {
            error: action.payload,
            loading: false
        }
        default: return state
    }

}


export const editDataReducer = (state = {}, action) => {

    switch (action.type) {
        case 'EDIT_DATA_REQUEST': return {
            editloading: true,
            ...state
        }
        case 'EDIT_DATA_SUCCESS': return {
            editloading: false,
            editsuccess: true,
        }
        case 'EDIT_DATA_FAILED': return {
            editerror: action.payload,
            editloading: false
        }
        default: return state
    }

}