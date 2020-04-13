/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from '@emotion/styled';

import * as productsActions from '../redux-saga/actions/productsActions';
import ProductsList from '../components/products/ProductsList';

class Products extends Component {
    componentDidMount() {
        console.log('Products Initial Props...', this.props);
        this.loadProductsList();
    }

    loadProductsList = () => {
        this.props.actions.loadProductsList();
    }

    shouldRenderProducts = () => {
        return this.props.productsList && this.props.productsList.length > 0;
    }

    render() {
        return (
            <ProductsStyle>
                <h1>{ this.props.title }</h1>
                {
                    this.shouldRenderProducts() &&
                        ( <ProductsList data={this.props.productsList} /> )
                }
            </ProductsStyle>
        )
    }
}

const ProductsStyle = styled.div`
    margin: 65px auto;
`;

const mapStateToProps = ({ products }) => ({
    title: products.title,
    productsList: products.productsList
});

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ ...productsActions }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
