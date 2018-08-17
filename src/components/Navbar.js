import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Container, Image } from 'semantic-ui-react'

export default class Navbar extends Component {
    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Link to="/">
                        <Menu.Item header>
                            <Image size='mini' src='https://assets.bigcartel.com/theme_images/35952433/Title_copy.png' style={{ marginRight: '1.5em' }} />
                        </Menu.Item>
                    </Link>
                    <Menu.Item link>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item link>
                        <Link to="/products">Shop</Link>
                    </Menu.Item>
                </Container>
            </Menu>
        )
    }
}