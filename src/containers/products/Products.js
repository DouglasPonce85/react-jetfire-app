import React, { Component } from 'react';
import styled from '@emotion/styled'

class Products extends Component {
    render() {
        return (
            <ProductsStyle>
                <h1>Products Items</h1>
                <p>Build macros cannot be invoked from a macro context. This means it is impossible
                    to use a macro to create a class which will provide build macros for other classes.
                </p>
            </ProductsStyle>
        )
    }
}

const ProductsStyle = styled.div`
    margin: 65px auto;
`;

export default Products;
