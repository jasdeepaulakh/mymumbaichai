import React, { Component } from 'react';
import { Grid, Card, Icon, Image } from 'semantic-ui-react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

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
                console.log(data);
                let products = data.map((product) => {
                    return (
                        <Grid.Column key={product.id}>
                            <Card>
                                <Image src='https://assets.bigcartel.com/product_images/209033911/Product+Image+square2.png' />
                                <Card.Content>
                                    <Card.Header>{product.name}</Card.Header>
                                    <Card.Description>{product.description}</Card.Description>
                                </Card.Content>
                                <Card.Content extra>
                                    <a>
                                        <Icon name='pound' />
                                        {product.price}
                                    </a>
                                </Card.Content>
                            </Card>
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
                <Grid>
                    <Grid.Row columns={2}>
                        {this.state.products}
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Products;