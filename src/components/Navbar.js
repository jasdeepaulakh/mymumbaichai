import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react'

export default class Navbar extends Component {
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                        <Link to="/" className="header item">
                            <Image size='mini' src='https://assets.bigcartel.com/theme_images/35952433/Title_copy.png' style={{ marginRight: '1.5em' }} />
                        </Link>
                        <Link to="/" className="item">
                            Home
                        </Link>
                        <Link to="/products" className="item">
                            Shop
                        </Link>
                        <Link to="/about" className="item">
                            About
                        </Link>
                        <Link to="/contact" className="item">
                            Contact Us
                        </Link>
                </Container>
            </Menu>
        )
    }
}