import React, { Component } from 'react';
import { Grid, Icon, Image, Item } from 'semantic-ui-react'
import { Loader } from 'semantic-ui-react'
import { connect } from 'react-redux';

class Products extends Component {

    constructor() {
        super();
        this.state = {
            products: [],
            isLoading: false,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://rest-test-jas.herokuapp.com/product'
        fetch(proxyUrl + targetUrl)
            .then(response => {
                return response.json();
            }).then(data => {
                let products = data.map((product) => {
                    var productPrice = (product.price).toFixed(2)
                    return (
                        <Grid.Column key={product.id}>
                            <Item>
                                <Image src={product.product_image} />
                                <Item.Content>
                                    <Item.Header>{product.name}</Item.Header>
                                    <Item.Description>{product.description}</Item.Description>
                                </Item.Content>
                                <Item.Extra>
                                    <Icon name='pound' />{productPrice}
                                </Item.Extra>
                            </Item>
                        </Grid.Column>
                    )
                })


                this.setState({ products: products, isLoading: false });
                console.log("state", this.state.products);
            })

    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader active inline='centered'>Loading</Loader>
            )
        }
        return (
            <div>
                <h1>Products</h1>
                <Grid stackable columns={3}>
                    {this.state.products}
                </Grid>
            </div>
        )
    }
}

export default Products;