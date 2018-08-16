import React, { Component } from 'react';

class Products extends Component{

    constructor(){
        super();
        this.state = {
            products: [],
        }
    }

    componentDidMount(){
        fetch('https://rest-test-jas.herokuapp.com/product')
        .then(response =>{
            return response.json();
        }).then(data => {
            console.log(data);
            let products = data.map((product) =>{
                return(
                    <div key={product.id}>
                        <p>{product.name}</p>
                    </div>
                )
            })
    
            
        this.setState({products: products});
        console.log("state", this.state.products);
        })
        
    }

    render(){
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