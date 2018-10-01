const initialState = {
    products: [],
    isLoading: false
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS" : {
            return {...state, products: action.payload, isLoading: false}
        }
        default:
            return state
    }
}


export default reducer;