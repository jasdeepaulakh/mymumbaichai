import React, { Component } from 'react';

class Products extends Component{

    constructor(){
        super();
        this.state = {
            products: [],
            isLoading:false,
        }
    }

    componentDidMount(){
        this.setState({isLoading:true});
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://rest-test-jas.herokuapp.com/product'
        fetch(proxyUrl + targetUrl)
        .then(response =>{
            return response.json();
        }).then(data => {
            console.log(data);
            let products = data.map((product) =>{
                return(
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                    </div>
                )
            })
    
            
        this.setState({products: products, isLoading:false});
        console.log("state", this.state.products);
        })
        
    }

    render(){
        if(this.state.isLoading){
            return(
                <p>Loading...</p>
            )
        }
        return(
            <div>
            <p className="App-intro">
            Welcome to Products
            </p>

                {this.state.products}
            </div>
        )
    }
}

export default Products;