import { connect } from 'react-redux';
import React from 'react'
import * as actionCreators from '../actions/actions'

class ProductsRedux extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        let products = this.props.products
        console.log(products)
        
    }

    render(){
        return(
            <p>Redux</p>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreators)(ProductsRedux);
