let apiUrl = 'https://rest-test-jas.herokuapp.com'
let proxyUrl = 'https://cors-anywhere.herokuapp.com/'

export function getProducts(){
    return (dispatch) => {
        fetch(proxyUrl + apiUrl + '/product')
        .then((response) => {
            dispatch({type: "GET_PRODUCTS", payload: response.data})
        })
    }
} 