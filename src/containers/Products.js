/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import * as productsActions from '../redux-saga/actions/productsActions';

class Products extends Component {
    componentDidMount() {
        console.log('Products Initial Props...', this.props);
    }

    handleLoadNewOfDay = () => {
        this.props.actions.requestNews();
    }

    handleIncrementClicksCounter = () => {
        this.props.actions.incrementClicksCounter(this.props.globalCounter);
    }

    render() {
        return (
            <ProductsStyle>
                <h1>{this.props.newOfDay}</h1>
                <p>Build macros cannot be invoked from a macro context. This means it is impossible
                    to use a macro to create a class which will provide build macros for other classes.
                </p>
                <button onClick={this.handleLoadNewOfDay}>Update Title</button>
                <button onClick={this.handleIncrementClicksCounter}>{ this.props.globalCounter }</button>
            </ProductsStyle>
        )
    }
}

const ProductsStyle = styled.div`
    margin: 65px auto;
`;

export const mapStateToProps = ({ products }) => ({
    newOfDay: products.newOfDay,
    message: products.message,
    globalCounter: products.globalCounter
});

export function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...productsActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
